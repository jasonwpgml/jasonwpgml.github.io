// face.link: 카메라로 얼굴 표정을 읽어 홀로그램이 거울처럼 따라 하게 한다(에이전트용 판본의 숨은 버튼).
// 인식은 MediaPipe Face Landmarker(Apache 2.0)를 이 사이트에 둔 파일로 기기 안에서 돌린다. 영상은 어디에도 보내지 않는다.
// MediaPipe가 보내려는 사용량 지표는 페이지에서는 CSP(connect-src 'self')가, 일꾼에서는 face-worker.js의 통신 막기가 막는다.
// 인식은 되도록 일꾼(face-worker.js)에서 돌려 페이지(비·홀로그램)를 막지 않는다. 일꾼이 안 되는 브라우저는 페이지에서 돌린다.

const here = (p) => new URL(p, import.meta.url).href;
const FILES = { wasmLoaderPath: here("./face/wasm/vision_wasm_internal.js"), wasmBinaryPath: here("./face/wasm/vision_wasm_internal.wasm") };
const MODEL = here("./face/face_landmarker.task");
const RUNTIME = "tasks-vision 1.1.1";
// 화면에 좌표를 보여 줄 대표 점(MediaPipe 얼굴 점 번호)
const POINTS = [[1, "코끝"], [33, "눈꼬리(화면 왼쪽)"], [263, "눈꼬리(화면 오른쪽)"], [61, "입꼬리(화면 왼쪽)"], [291, "입꼬리(화면 오른쪽)"], [13, "윗입술"], [14, "아랫입술"], [152, "턱끝"]];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const deg = (r) => (r * 180) / Math.PI;
const sign = (v, d = 1) => (v >= 0 ? "+" : "-") + Math.abs(v).toFixed(d);

// holoface와 같은 표정 이름 규칙
function label(s) {
  if (s.blinkLeft > 0.6 && s.blinkRight > 0.6) return "blink";
  if (Math.max(s.blinkLeft, s.blinkRight) > 0.55 && Math.abs(s.blinkLeft - s.blinkRight) > 0.3) return s.blinkLeft > s.blinkRight ? "winkLeft" : "winkRight";
  if (s.mouthOpen > 0.5 && s.browRaise > 0.45) return "surprised";
  if (s.smile > 0.5) return "smile";
  if (s.mouthOpen > 0.5) return "mouthOpen";
  if (s.browRaise > 0.5) return "browRaise";
  return "neutral";
}

// MediaPipe 결과 → holoface FaceState(홀로그램 track() 입력). 각도·시선은 사람 기준(자기 오른쪽·위가 +)
function toState(res) {
  const lm = res.faceLandmarks?.[0];
  if (!lm) return { present: false };
  const bs = {};
  for (const c of res.faceBlendshapes?.[0]?.categories ?? []) bs[c.categoryName] = c.score;
  const s = { present: true, yaw: 0, pitch: 0, roll: 0, gazeX: 0, gazeY: 0 };
  const m = res.facialTransformationMatrixes?.[0]?.data; // 4×4, 열 우선. 얼굴 앞쪽 = 셋째 열, 위쪽 = 둘째 열
  if (m) {
    s.yaw = -deg(Math.atan2(m[8], m[10]));           // 반전 없는 카메라에서 자기 오른쪽으로 돌면 얼굴 앞이 화면 왼쪽(-x)으로
    s.pitch = deg(Math.asin(clamp(m[9], -1, 1)));    // 위를 보면 얼굴 앞이 위(+y)로
    s.roll = deg(Math.atan2(-m[4], m[5]));           // 자기 오른쪽으로 기울이면 위쪽이 화면 왼쪽으로
  }
  const b = (k) => bs[k] ?? 0;
  s.blinkLeft = b("eyeBlinkLeft"); s.blinkRight = b("eyeBlinkRight"); // ARKit식 이름: 그 사람 기준 왼쪽·오른쪽
  s.mouthOpen = clamp(b("jawOpen") * 1.4);
  s.smile = clamp(((b("mouthSmileLeft") + b("mouthSmileRight")) / 2) * 1.3);
  s.browRaise = clamp(Math.max(b("browInnerUp"), (b("browOuterUpLeft") + b("browOuterUpRight")) / 2) * 1.3);
  s.gazeX = clamp(((b("eyeLookInLeft") + b("eyeLookOutRight")) - (b("eyeLookOutLeft") + b("eyeLookInRight"))) * 1.2, -1, 1);
  s.gazeY = clamp(((b("eyeLookUpLeft") + b("eyeLookUpRight")) - (b("eyeLookDownLeft") + b("eyeLookDownRight"))) * 1.2, -1, 1);
  s.expression = label(s);
  return s;
}

// 일꾼에서 돌리는 인식기. 안 되면(예: 일꾼 안 그래픽을 못 쓰는 브라우저) 페이지에서 돌린다
async function createDetector() {
  try {
    const worker = new Worker(here("./face-worker.js"));
    const ready = await new Promise((ok, no) => {
      const t = setTimeout(() => no(new Error("시간 초과")), 30000);
      worker.onmessage = (e) => { if (e.data.type === "ready") { clearTimeout(t); ok(e.data.delegate); } else if (e.data.type === "error") { clearTimeout(t); no(new Error(e.data.message)); } };
      worker.onerror = (e) => { clearTimeout(t); no(new Error(e.message || "일꾼 오류")); };
      worker.postMessage({ type: "init", files: FILES, model: MODEL });
    });
    let pending = null;
    worker.onmessage = (e) => { if (e.data.type === "result" && pending) { const p = pending; pending = null; p(e.data.res); } };
    return {
      mode: `Web Worker ${ready}`,
      async detect(video, t) {
        const bitmap = await createImageBitmap(video);
        return new Promise((ok) => { pending = ok; worker.postMessage({ type: "frame", bitmap, t }, [bitmap]); });
      },
      close() { worker.postMessage({ type: "close" }); setTimeout(() => worker.terminate(), 500); },
    };
  } catch (err) {
    console.warn("face.link: 일꾼에서 못 돌려 페이지에서 돌린다", err);
  }
  const { FaceLandmarker } = await import("./face/vision_bundle.mjs");
  for (const delegate of ["GPU", "CPU"]) {
    try {
      const lm = await FaceLandmarker.createFromOptions(FILES, {
        baseOptions: { modelAssetPath: MODEL, delegate }, runningMode: "VIDEO", numFaces: 1,
        outputFaceBlendshapes: true, outputFacialTransformationMatrixes: true,
      });
      return { mode: `main ${delegate}`, detect: async (video, t) => lm.detectForVideo(video, t), close: () => lm.close() };
    } catch (e) { if (delegate === "CPU") throw new Error(`인식 모델을 불러오지 못했습니다: ${e?.message ?? e}`); }
  }
}

/**
 * 카메라를 켜고 인식을 시작한다.
 * @param {{video: HTMLVideoElement, dots: HTMLCanvasElement, out: HTMLElement, onState: (s: object) => void, onShape?: (v: number[][]) => void}} ui
 * @returns {Promise<() => void>} 멈추는 함수
 */
export async function start({ video, dots, out, onState, onShape }) {
  const say = (t) => { out.textContent = t; };
  say("> face.link\n  인식 모델을 불러오는 중입니다(처음 한 번, 약 17MB)…");
  const detector = await createDetector();
  const delegate = detector.mode;
  say("> face.link\n  카메라 권한을 묻는 중입니다…");
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } }, audio: false });
  } catch (e) {
    detector.close();
    throw new Error(e?.name === "NotAllowedError" ? "카메라 권한이 거부됐습니다." : `카메라를 켜지 못했습니다: ${e?.message ?? e}`);
  }
  video.srcObject = stream;
  await video.play();
  const ctx = dots.getContext("2d");
  let raf = 0, lastVideo = -1, frames = 0, fps = 0, fpsT = performance.now(), lastPaint = 0, stopped = false;
  // 얼굴 본뜨기: 정면을 보는 프레임 15개(약 1초)의 점을 평균 내 홀로그램 얼굴을 그 사람 모양으로 바꾼다
  const SHAPE_FRAMES = 15, sum = new Float64Array(468 * 3);
  let shapeCount = 0, shaped = false;
  const capture = (lm, s) => {
    if (shaped || !onShape || !lm || lm.length < 468) return;
    if (Math.abs(s.yaw) > 8 || Math.abs(s.pitch) > 10 || Math.abs(s.roll) > 6) { shapeCount = 0; sum.fill(0); return; }
    const vw = video.videoWidth, vh = video.videoHeight;
    for (let i = 0; i < 468; i++) { sum[i * 3] += lm[i].x * vw; sum[i * 3 + 1] += lm[i].y * vh; sum[i * 3 + 2] += lm[i].z * vw; } // z는 x와 같은 크기로 나온다
    if (++shapeCount < SHAPE_FRAMES) return;
    const P = (i) => [sum[i * 3] / shapeCount, sum[i * 3 + 1] / shapeCount, sum[i * 3 + 2] / shapeCount];
    // 가면 데이터와 같은 자리: 세로는 턱끝(152) -1 ~ 이마 위(10) 1, 가로 가운데는 두 눈꼬리(33·263) 사이, 앞(+z)은 카메라 쪽
    const top = P(10), chin = P(152), cx = (P(33)[0] + P(263)[0]) / 2, cy = (top[1] + chin[1]) / 2, zref = (top[2] + chin[2]) / 2;
    const k = 2 / Math.max(1, chin[1] - top[1]);
    const v = Array.from({ length: 468 }, (_, i) => { const p = P(i); return [(p[0] - cx) * k, -(p[1] - cy) * k, -(p[2] - zref) * k + 0.5]; });
    shaped = true;
    onShape(v);
  };

  const paint = (res, s, now) => {
    const vw = video.videoWidth, vh = video.videoHeight;
    if (dots.width !== vw) { dots.width = vw; dots.height = vh; }
    ctx.clearRect(0, 0, vw, vh);
    const lm = res.faceLandmarks?.[0];
    if (lm) {
      ctx.fillStyle = "rgba(125,255,159,.85)";
      for (const p of lm) ctx.fillRect(p.x * vw - 1, p.y * vh - 1, 2, 2);
      ctx.fillStyle = "#e8fff0";
      for (const [i] of POINTS) ctx.fillRect(lm[i].x * vw - 2.5, lm[i].y * vh - 2.5, 5, 5);
    }
    if (now - lastPaint < 150) return; // 글은 초당 6~7번만 바꾼다
    lastPaint = now;
    const lines = [
      "> face.link",
      `  model      MediaPipe Face Landmarker (float16) · ${RUNTIME} · ${delegate}`,
      `  camera     ${vw}×${vh}  ${fps}fps  faces=${lm ? 1 : 0}  landmarks=${lm ? lm.length : 0}  blendshapes=${res.faceBlendshapes?.[0]?.categories?.length ?? 0}`,
    ];
    lines.push(`  shape      ${shaped ? "내 얼굴 점 468개로 홀로그램을 다시 만들었습니다" : onShape ? `정면을 1초 보면 내 얼굴 모양으로 바뀝니다 (${shapeCount}/${SHAPE_FRAMES})` : "—"}`);
    if (s.present) {
      lines.push(`  pose       yaw ${sign(s.yaw)}°  pitch ${sign(s.pitch)}°  roll ${sign(s.roll)}°`);
      lines.push(`  gaze       x ${sign(s.gazeX, 2)}  y ${sign(s.gazeY, 2)}`);
      lines.push(`  expression ${s.expression}  (blinkL ${s.blinkLeft.toFixed(2)} blinkR ${s.blinkRight.toFixed(2)} mouth ${s.mouthOpen.toFixed(2)} smile ${s.smile.toFixed(2)} brow ${s.browRaise.toFixed(2)})`);
      const top = [...(res.faceBlendshapes?.[0]?.categories ?? [])].filter((c) => c.categoryName !== "_neutral").sort((a, b) => b.score - a.score).slice(0, 5);
      top.forEach((c, i) => lines.push(`  ${i ? "          " : "top      "} ${c.categoryName.padEnd(18)} ${c.score.toFixed(2)} ${"█".repeat(Math.round(c.score * 12))}`));
      POINTS.forEach(([i, name], k) => { const p = lm[i]; lines.push(`  ${k ? "          " : "points   "} #${String(i).padEnd(3)} ${name.padEnd(12)} x=${p.x.toFixed(3)} y=${p.y.toFixed(3)} z=${sign(p.z, 3)}`); });
    } else lines.push("  얼굴을 찾는 중…");
    lines.push("  privacy    영상은 이 기기 안에서만 처리합니다. 어디에도 보내지 않습니다.");
    say(lines.join("\n"));
  };

  // 앞 프레임 인식이 끝나야 다음 프레임을 넘긴다(쌓이지 않게). 일꾼이면 그동안 페이지는 계속 그린다
  let busy = false;
  const handle = (res) => {
    if (stopped) return;
    const now = performance.now();
    const s = toState(res);
    onState(s);
    capture(res.faceLandmarks?.[0], s);
    frames++;
    if (now - fpsT > 1000) { fps = frames; frames = 0; fpsT = now; }
    paint(res, s, now);
  };
  const loop = () => {
    if (stopped) return;
    raf = requestAnimationFrame(loop);
    if (busy || video.readyState < 2 || video.currentTime === lastVideo) return;
    lastVideo = video.currentTime;
    busy = true;
    detector.detect(video, performance.now()).then(handle, () => {}).finally(() => { busy = false; });
  };
  raf = requestAnimationFrame(loop);

  return () => {
    stopped = true;
    cancelAnimationFrame(raf);
    stream.getTracks().forEach((t) => t.stop());
    video.srcObject = null;
    detector.close();
    onState({ present: false });
  };
}
