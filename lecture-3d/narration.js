/* 음성 시간과 기존 3D 장면 시간을 연결한다. 음원은 로컬 파일만 사용한다. */
(() => {
  'use strict';
  const data = window.LinearNarrationData;
  const $ = id => document.getElementById(id);
  const clamp = (v, end) => Math.max(0, Math.min(end, v));
  const formatTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  const safeRead = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeWrite = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const segmentAt = (value, key) => data.cues.findLast(cue => value >= cue[key]) || data.cues[0];
  const toScene = time => {
    if (time >= data.duration) return data.sceneDuration;
    const cue = segmentAt(time, 'audioStart');
    return cue.start + (time - cue.audioStart) / cue.duration * (cue.end - cue.start);
  };
  const toAudio = scene => {
    if (scene >= data.sceneDuration) return data.duration;
    const cue = segmentAt(scene, 'start');
    return cue.audioStart + (scene - cue.start) / (cue.end - cue.start) * cue.duration;
  };
  const storedVoice = safeRead('linear3d-narration-voice');
  const storedVolume = Number(safeRead('linear3d-narration-volume') ?? 1);
  const controller = {
    time: 0,
    voice: ['male', 'female'].includes(storedVoice) ? storedVoice : 'female',
    volume: storedVolume >= 0 && storedVolume <= 1 ? storedVolume : 1,
    muted: safeRead('linear3d-narration-muted') === 'true',
    seeking: false,
    pending: false,
    failed: false,
    revision: 0,
    audio: new Audio(),
    advance(scene, delta) {
      // 기존 재생 버튼이 마지막에서 처음으로 돌아오는 경우도 함께 초기화한다.
      if (scene === 0 && this.time >= data.duration - .001) this.time = 0;
      if (!this.muted && (this.failed || this.audio.readyState < 3)) return scene;
      const audio = this.audio;
      if (!this.muted && !audio.paused) {
        // 음성이 나오는 동안에는 음성 시계를 기준으로 삼는다. 3D 프레임이 느려도 음성 위치를 다시 맞추지 않아 소리가 끊기지 않는다.
        const heard = audio.ended ? data.duration : audio.currentTime;
        if (heard !== this.lastHeard) { this.lastHeard = heard; this.time = heard; }
        else this.time = Math.min(this.time + delta, heard + .12);
        this.time = clamp(this.time, data.duration);
      } else if (!this.muted && this.pending) {
        // 음성 재생이 시작되기를 기다리는 동안 장면도 멈춰 둔다.
        return toScene(this.time);
      } else {
        this.time = clamp(this.time + delta, data.duration);
      }
      if (this.time >= data.duration) audio.pause();
      return toScene(this.time);
    },
    sceneSeek(scene) {
      if (!this.seeking) this.time = toAudio(clamp(scene, data.sceneDuration));
      this.syncAudio(true);
    },
    seek(time) {
      this.time = clamp(time, data.duration);
      this.seeking = true;
      try { window.LinearLesson3D.seek(toScene(this.time)); }
      finally { this.seeking = false; }
      this.syncAudio(true);
      this.render();
    },
    syncAudio(force = false) {
      const state = window.LinearLesson3D?.playback();
      const audio = this.audio;
      if (!state) return;
      audio.playbackRate = state.speed;
      audio.preservesPitch = true;
      if (audio.readyState >= 1 && (force || Math.abs(audio.currentTime - this.time) > .22)) {
        audio.currentTime = Math.min(this.time, Math.max(0, audio.duration - .001));
      }
      if (!state.playing || this.muted || this.time >= data.duration || this.failed) {
        audio.pause();
      } else if (audio.paused && !this.pending && audio.readyState >= 2) {
        this.pending = true;
        const revision = this.revision;
        audio.play().then(() => {
          if (revision !== this.revision || this.muted || !window.LinearLesson3D.playback().playing) audio.pause();
        }).catch(error => {
          if (error.name === 'AbortError' || revision !== this.revision) return;
          this.fail('음성을 재생하지 못했습니다. 다시 듣기를 눌러 주세요.');
        }).finally(() => { this.pending = false; });
      }
    },
    fail(message) {
      this.failed = true;
      this.audio.pause();
      if (!this.muted) window.LinearLesson3D?.pause();
      $('narration-status').textContent = message;
      $('narration-retry').hidden = false;
    },
    loadVoice() {
      this.revision++;
      this.audio.pause();
      this.failed = false;
      this.pending = false;
      $('narration-retry').hidden = true;
      this.audio.src = data.voices[this.voice].src;
      this.audio.load();
      this.render();
    },
    render() {
      const state = window.LinearLesson3D?.playback();
      if (!state) return;
      const seek = $('seek');
      seek.max = data.duration;
      seek.value = this.time;
      seek.style.setProperty('--progress', `${this.time / data.duration * 100}%`);
      $('time').textContent = formatTime(this.time);
      $('duration').textContent = formatTime(data.duration);
      $('narration-voice').value = this.voice;
      const percent = Math.round(this.volume * 100);
      $('narration-volume').value = percent;
      $('narration-volume').style.setProperty('--volume', `${percent}%`);
      $('narration-volume-value').textContent = percent;
      $('narration-mute').setAttribute('aria-pressed', String(this.muted));
      $('narration-mute').textContent = this.muted ? '음성 켜기' : '음성 끄기';
      const status = this.muted ? '음성 꺼짐' : this.audio.readyState < 3 ? '음성 불러오는 중…' : 'AI 내레이션';
      if (!this.failed && $('narration-status').textContent !== status) $('narration-status').textContent = status;
      // 장면 이름·구간 표시는 기존 3D 시간을 새 음성 시간으로 변환한다.
      document.querySelectorAll('#timeline-marks span').forEach(mark => {
        if (!mark.dataset.sceneStart) {
          mark.dataset.sceneStart = parseFloat(mark.style.left) / 100 * data.sceneDuration;
          mark.dataset.sceneEnd = (parseFloat(mark.style.left) + parseFloat(mark.style.width)) / 100 * data.sceneDuration;
        }
        const start = toAudio(Number(mark.dataset.sceneStart));
        const end = toAudio(Number(mark.dataset.sceneEnd));
        mark.style.left = `${start / data.duration * 100}%`;
        mark.style.width = `${(end - start) / data.duration * 100}%`;
      });
      this.syncAudio();
    },
    snapshot() {
      return { time: this.time, duration: data.duration, voice: this.voice, muted: this.muted,
        audioTime: this.audio.currentTime, audioPaused: this.audio.paused, readyState: this.audio.readyState,
        failed: this.failed, sceneTime: toScene(this.time) };
    },
    toScene, toAudio,
  };
  window.LinearNarration = controller;
  controller.audio.preload = 'auto';
  controller.audio.addEventListener('loadedmetadata', () => { controller.syncAudio(true); controller.render(); });
  controller.audio.addEventListener('canplay', () => controller.render());
  controller.audio.addEventListener('error', () => controller.fail('음성 파일을 불러오지 못했습니다. 다시 듣기를 눌러 주세요.'));
  controller.audio.addEventListener('waiting', () => controller.render());
  $('narration-voice').addEventListener('change', event => {
    controller.voice = event.target.value;
    safeWrite('linear3d-narration-voice', controller.voice);
    controller.loadVoice();
  });
  $('narration-mute').addEventListener('click', () => {
    controller.muted = !controller.muted;
    safeWrite('linear3d-narration-muted', String(controller.muted));
    controller.render();
  });
  controller.audio.volume = controller.volume;
  // iOS에서는 페이지가 음량을 바꿀 수 없다(기기 버튼만 가능). 그런 곳에서는 조절 막대를 숨긴다.
  const probe = new Audio();
  probe.volume = .5;
  if (probe.volume !== .5) $('narration-volume-label').hidden = true;
  $('narration-volume').addEventListener('input', event => {
    controller.volume = Number(event.target.value) / 100;
    controller.audio.volume = controller.volume;
    safeWrite('linear3d-narration-volume', String(controller.volume));
    controller.render();
  });
  $('narration-retry').addEventListener('click', () => controller.loadVoice());
  document.querySelector('.narration-row').addEventListener('keydown', event => event.stopPropagation());
  // 재생바는 음성 시간으로 표시하므로 기존 입력 처리 전에 변환한다.
  $('seek').addEventListener('input', event => {
    if (!window.LinearLesson3D) return;
    event.stopImmediatePropagation();
    const time = Number(event.target.value);
    window.LinearLesson3D.pause();
    controller.seek(time);
  }, true);
  addEventListener('pagehide', () => { window.LinearLesson3D?.pause(); controller.audio.pause(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { window.LinearLesson3D?.pause(); controller.audio.pause(); }
  });
  addEventListener('pageshow', () => controller.render());
  controller.loadVoice();
})();
