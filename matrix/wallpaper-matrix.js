// SPDX-FileCopyrightText: 2026 JSonJh
// 배경 자체가 주인공인 화면용 매트릭스 비(배경화면 모드).
// 깊이 세 겹, 칸에 고정된 글자와 내려가는 머리, 빛 번짐, 색 모드, 글자 모음, 마우스 시차.
// 호스트가 canvas를 주고 start/stop/set만 부른다. 본문 전환(fixed-cell-matrix)과 시간축을 공유하지 않는다.
// 그리기는 WebGL2로 겹마다 한 번에 한다. 글자 수천 개를 drawImage로 하나씩 찍으면 Safari 엔진(WKWebView)에서 특히 무겁다.
// WebGL2를 못 쓰거나 renderer: "2d"면 캔버스 2D로 그린다. 두 방식의 장면은 같다.
const wallpaperMatrix = (() => {
  const CHARSETS = {
    film: { chars: "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123457789Z:.=*+-<>¦", mirror: true },
    ascii: { chars: "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}#%+=", mirror: false },
    binary: { chars: "01", mirror: false },
    hangul: { chars: "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ", mirror: false },
  };
  // 먼 겹은 작고 흐리고 느리며, 해상도를 낮춰 자연스럽게 번진다. 가까운 겹은 크고 드물다.
  const LAYERS = [
    { size: 11, res: 0.5, alpha: 0.42, speed: 0.55, parallax: 4, density: 1 },
    { size: 16, res: 1, alpha: 0.82, speed: 0.85, parallax: 9, density: 1 },
    { size: 25, res: 1, alpha: 1, speed: 1.3, parallax: 18, density: 0.28 },
  ];
  const GRADIENTS = {
    vgrad: { dir: "v", stops: [[0, "#5ef0ff"], [0.55, "#2bff9a"], [1, "#0f7a3c"]] },
    hgrad: { dir: "h", stops: [[0, "#8b6bff"], [0.5, "#3ad6ff"], [1, "#2bffa0"]] },
  };
  const DEFAULTS = {
    color: "classic",      // classic | vgrad | hgrad | rainbow | CSS 색 문자열
    charset: "film",       // film | ascii | binary | hangul | 직접 넣은 문자열
    density: 0.7, speed: 1, bloom: 0.9, tail: 1, intensity: 1,
    scale: 1,              // 글자 크기 배율(0.4~2). 세 겹 모두 같은 비율로 줄거나 커진다
    depth: true, parallax: true, vignette: true, scan: false,
    scatter: true, scatterRadius: 110,   // 커서 주변 글자가 밀려나며 흩어진다(움직일수록 세게)
    intercept: true, interceptRadius: 46, // 커서에 닿은 물줄기가 터져 끊기고, 누르면 충격파가 퍼진다
    fps: 30, maxDpr: 1.5, background: "#000",
    fromTop: false,         // true면 처음 만들 때 화면을 비우고 비가 위에서부터 내리기 시작한다(만들 때만 읽는다. 그 뒤에는 reset(true))
    ramp: 0,                // 위에서부터 시작할 때 물방울마다 0~ramp초 늦게 들어오게 한다. 처음엔 성기게 내리다 ramp초에 걸쳐 평소 밀도까지 찬다(그리는 글자 수도 같이 는다)
    renderer: "auto",
    band: 0,                // 0보다 크면 위쪽 그만큼(CSS px)만 새로 그리고 나머지는 마지막 장면을 둔다(바탕화면이 상단바 띠로만 보일 때)       // auto: WebGL2, 안 되면 2D · 2d: 늘 캔버스 2D (만들 때만 읽는다)
    reducedMotion: "still", // still: 멈춘 한 장면, off: 배경색만
    relief: null,           // 벽 양각 지도(matrix-hologram.js가 넣는다). 얼굴 칸의 글자가 굴곡을 따라 튀어나오고 음영을 받는다
  };
  const FONT = `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "MS Gothic", ui-monospace, monospace`;
  const HEAD = "#f2fff8";
  const rnd = (a, b) => a + Math.random() * (b - a);
  const mirrored = (set, ch) => set.mirror && /[ｦ-ﾝ]/.test(ch); // 영화처럼 좌우를 뒤집은 가타카나

  // CSS 색 → [r, g, b] (0~1). 캔버스가 정규화한 문자열을 읽으므로 픽셀을 읽지 않는다.
  let probe = null;
  const rgbCache = new Map();
  function rgb(css) {
    let v = rgbCache.get(css);
    if (v) return v;
    probe ??= document.createElement("canvas").getContext("2d");
    probe.fillStyle = "#000"; probe.fillStyle = css;
    const s = String(probe.fillStyle), n = (s.match(/-?[\d.]+/g) || []).map(Number);
    if (s[0] === "#") v = [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16) / 255);
    else if (s.startsWith("color(")) v = n.slice(0, 3);
    else v = n.slice(0, 3).map((x) => x / 255);
    if (v.length < 3 || v.some((x) => !Number.isFinite(x))) v = [0, 0, 0];
    if (rgbCache.size > 64) rgbCache.clear();
    rgbCache.set(css, v);
    return v;
  }
  function hsl(h, s, l) { // CSS hsl()과 같은 식
    const a = s * Math.min(l, 1 - l), f = (n) => { const k = (n + h / 30) % 12; return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); };
    return [f(0), f(8), f(4)];
  }

  function create(view, options = {}) {
    const o = { ...DEFAULTS, ...options };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let W = 1, H = 1, dpr = 1, layers = [], mouse = [0, 0], mouseT = [0, 0];
    let raf = 0, running = false, wanted = false, last = 0, acc = 0, t0 = performance.now();
    let frames = 0, fpsT = 0, fps = 0, firstBuild = true;
    // 커서(캔버스 픽셀)와 움직임 세기. 움직이면 커지고 멈추면 빠르게 줄어든다.
    const ptr = { x: -1e9, y: -1e9, on: false, energy: 0, cx: 0, cy: 0 };
    let shocks = [], sparks = [];

    const clampScale = () => Math.min(2, Math.max(0.4, +o.scale || 1));
    const charset = () => CHARSETS[o.charset] || { chars: [...String(o.charset || "01")].slice(0, 128).join(""), mirror: false }; // 직접 넣은 글자는 128자까지
    const clamp = (v, lo, hi, d) => Math.min(hi, Math.max(lo, Number.isFinite(+v) ? +v : d));
    const accent = (x) => o.color === "rainbow" ? `hsl(${(x * 0.02) % 360} 95% 62%)`
      : GRADIENTS[o.color] ? GRADIENTS[o.color].stops[1][1] : o.color === "classic" ? "#2bff7a" : o.color;
    const accentRGB = (x) => o.color === "rainbow" ? hsl((x * 0.02) % 360, 0.95, 0.62) : rgb(accent(x));

    const R = (o.renderer !== "2d" && glRenderer()) || canvasRenderer();

    // 물방울: 머리 위치(칸), 속도(칸/초), 꼬리 길이(칸). 밀도가 낮을수록 다음 방울까지 오래 쉰다.
    // first: true면 화면 가득 무작위(평소 모습), "top"이면 그 평소 배치를 화면 한 장만큼 위로 올려 둔다.
    // 그래서 비는 위에서부터 평소 간격 그대로 차 내려오고, 모든 방울이 한꺼번에 들어와 평소보다 촘촘해지는 순간이 없다
    // (예전엔 반 화면 안에 몰아 두어 시작 5~12초에 글자가 평소의 1.6~2.2배였다). ramp초가 있으면 방울마다 0~ramp초 더 늦게 들어온다
    function spawn(L, d, first, ramp = 0) {
      const idle = (1 - clamp(o.density, 0, 1, 0.7) * L.density) * 3 + 0.15; // 값이 범위를 벗어나도 꼬리·간격이 터무니없어지지 않게
      d.v = rnd(10, 22) * L.speed; d.len = Math.max(4, Math.round(rnd(8, 30) * clamp(o.tail, 0.2, 3, 1))); d.last = -1; d.cut = null;
      d.y = first === "top" ? rnd(-L.rows * idle, L.rows) - L.rows - d.v * clamp(o.speed, 0, 4, 1) * rnd(0, Math.max(0, +ramp || 0))
        : first ? rnd(-L.rows * idle, L.rows) : -rnd(1, L.rows * idle);
      return d;
    }
    // 겹: 시차로 움직여도 가장자리가 비지 않게 화면보다 M만큼 크게 잡고, res 배율의 자기 좌표(겹 픽셀)를 쓴다.
    function layer(def) {
      const set = charset(), chars = [...set.chars], M = 24 * dpr;
      const LW = W + 2 * M, LH = H + 2 * M, cell = Math.max(4, def.size * clampScale() * dpr * def.res);
      const w = Math.ceil(LW * def.res), h = Math.ceil(LH * def.res);
      const cols = Math.ceil(w / cell), rows = Math.ceil(h / cell) + 1;
      const L = { ...def, M, LW, LH, w, h, cell, cols, rows, n: chars.length, chars, set,
        glyphs: new Uint8Array(cols * rows).map(() => (Math.random() * chars.length) | 0), drops: [], drawn: new Uint8Array(cols * rows) };
      const first = o.fromTop && firstBuild ? "top" : true;
      for (let x = 0; x < cols; x++) L.drops.push(spawn(L, {}, first, o.ramp), spawn(L, {}, first, o.ramp));
      R.layer(L);
      return L;
    }
    function burst(sx, sy, L, k = 1) { // 요격 파편: 그 자리의 글자들이 튀어 흩어진다
      const n = Math.max(1, Math.round((L.size > 20 ? 9 : L.size > 13 ? 6 : 3) * k));
      for (let i = 0; i < n && sparks.length < 450; i++) {
        const a = rnd(0, Math.PI * 2), v = rnd(60, 250) * dpr * (L.size / 16), g = (Math.random() * L.n) | 0;
        sparks.push({ x: sx, y: sy, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 70 * dpr, t: 0, life: rnd(0.45, 0.95),
          size: Math.round(L.size * clampScale() * dpr * rnd(0.6, 1)), g, ch: L.chars[g] });
      }
    }
    function draw(dt, t) {
      if (R.lost) return;
      mouse[0] += (mouseT[0] - mouse[0]) * 0.06; mouse[1] += (mouseT[1] - mouse[1]) * 0.06;
      ptr.energy *= Math.pow(0.05, dt);
      for (const s of shocks) { s.t += dt; s.r = s.t * 900 * dpr; }
      shocks = shocks.filter((s) => s.t < 0.75);
      const offs = layers.map((L) => o.parallax ? [mouse[0] * L.parallax * dpr, mouse[1] * L.parallax * dpr] : [0, 0]);
      const lim = o.band > 0 ? Math.min(H, (o.band + 48) * dpr) : 0; // 빛 번짐이 띠 아래에서도 번져 올라오게 조금 더 그린다
      R.frame(t, lim);
      layers.forEach((L, li) => {
        const cs = L.cell, heads = [], [px, py] = offs[li], near = L.size / 16;
        const rowMax = lim ? Math.floor(((lim + L.M - py) * L.res) / cs) + 1 : Infinity; // 이 겹에서 그릴 마지막 줄
        R.begin(L);
        for (let k = (L.glyphs.length * 0.012) | 0; k > 0; k--) L.glyphs[(Math.random() * L.glyphs.length) | 0] = (Math.random() * L.n) | 0; // 칸 글자가 제자리에서 가끔 바뀜
        // 커서를 이 겹의 좌표로 옮긴다
        const cx = (ptr.x + L.M - px) * L.res, cy = (ptr.y + L.M - py) * L.res;
        const sR = o.scatter && ptr.on ? o.scatterRadius * dpr * L.res : 0, sR2 = sR * sR;
        const sF = (0.3 + ptr.energy) * 30 * dpr * L.res * near;
        const iR = o.intercept && ptr.on ? o.interceptRadius * dpr * L.res * (0.7 + 0.3 * near) : 0, iR2 = iR * iR;
        const band = 22 * dpr * L.res;
        let ox = 0, oy = 0;
        // 벽 양각: 중간 겹 글자가 얼굴을 이룬다. 먼·가까운 겹은 얼굴 위에서 옅어지고, 얼굴 밖 비는 조금 물러난다
        const rel = o.relief && o.relief.ready ? o.relief : null, faceLayer = L.size === 16;
        let rm = 1, rs = cs, rlit = 0, onFace = false;
        const shift = (gx, gy) => { // 흩어짐: 커서에서 멀어지는 쪽으로 밀어낸다 + 양각
          ox = 0; oy = 0; rm = rel ? (faceLayer ? 0.65 : 0.8) : 1; rs = cs; onFace = false;
          if (sR) {
            const dx = gx - cx, dy = gy - cy, d2 = dx * dx + dy * dy;
            if (d2 < sR2 && d2 >= 0.01) { const d = Math.sqrt(d2), f = (1 - d / sR) ** 2 * sF / d; ox = dx * f; oy = dy * f; }
          }
          if (!rel) return;
          const sx = (gx / L.res - L.M + px) / dpr, sy = (gy / L.res - L.M + py) / dpr; // 이 글자의 화면 위치(CSS px)
          const rc = Math.floor((sx - rel.x0) / rel.cw), rr = Math.floor((sy - rel.y0) / rel.cw);
          if (rc < 0 || rr < 0 || rc >= rel.cols || rr >= rel.rows) return;
          const ri = rr * rel.cols + rc, z = rel.depth[ri]; if (z <= -9) return;
          if (!faceLayer) { rm = 0.18; return; }
          const pop = Math.max(0, z + 0.4), k = pop * 0.05 * dpr * L.res;      // 앞으로 나온 만큼 가운데에서 밖으로, 크게
          onFace = true; rlit = rel.lit[ri]; rm = 0.45 + 1.1 * rlit; rs = cs * (1 + pop * 0.22);
          ox += (sx - rel.cx) * k - (rs - cs) / 2; oy += (sy - rel.cy) * k - (rs - cs) / 2;
        };
        if (rel) L.drawn.fill(0);
        for (let i = 0; i < L.drops.length; i++) {
          const d = L.drops[i], x = i >> 1, hr = Math.floor(d.y);
          d.y += d.v * clamp(o.speed, 0, 4, 1) * dt;
          const end = d.cut ?? L.rows;
          if (hr - d.len > end) { spawn(L, d, false); continue; }
          if (d.cut == null && hr >= 0 && hr < L.rows && (iR || shocks.length)) { // 요격: 머리가 방패나 충격파에 닿으면 끊긴다
            const hx = x * cs + cs / 2, hy = hr * cs + cs / 2;
            let hit = false, byShock = false;
            if (iR) { const dx = hx - cx, dy = hy - cy; hit = dx * dx + dy * dy < iR2; }
            for (let q = 0; !hit && q < shocks.length; q++) {
              const sh = shocks[q], dd = Math.hypot(hx - (sh.x + L.M - px) * L.res, hy - (sh.y + L.M - py) * L.res);
              hit = byShock = Math.abs(dd - sh.r * L.res) < band;
            }
            if (hit) { d.cut = hr; burst(hx / L.res - L.M + px, hy / L.res - L.M + py, L, byShock ? 0.45 : 1); } // 충격파는 한 번에 많이 끊으니 파편을 줄인다
          }
          if (d.cut == null && hr !== d.last && hr >= 0 && hr < L.rows) { L.glyphs[hr * L.cols + x] = (Math.random() * L.n) | 0; d.last = hr; }
          for (let k = d.len; k >= 1; k--) {
            const r = hr - k; if (r > rowMax) break;
            if (r < 0 || r >= L.rows || r >= end) continue;
            const b = Math.pow(1 - k / (d.len + 1), 1.7); if (b < 0.03) continue;
            shift(x * cs + cs / 2, r * cs + cs / 2);
            if (rel && faceLayer) L.drawn[r * L.cols + x] = 1;
            R.glyph(L, x * cs + ox, r * cs + oy, rs, L.glyphs[r * L.cols + x], Math.min(1, b * rm));
          }
          if (d.cut == null && hr >= 0 && hr < L.rows && hr <= rowMax) heads.push(x, hr);
        }
        if (rel && faceLayer) { // 비가 지나가지 않는 얼굴 칸도 윤곽이 은은하게 남는다(중간 겹만)
          const toCell = (css, M0, off) => Math.floor(((css * dpr + M0 - off) * L.res) / cs);
          const c0 = Math.max(0, toCell(rel.x0, L.M, px)), c1 = Math.min(L.cols - 1, toCell(rel.x0 + rel.cols * rel.cw, L.M, px));
          const r0 = Math.max(0, toCell(rel.y0, L.M, py)), r1 = Math.min(L.rows - 1, toCell(rel.y0 + rel.rows * rel.cw, L.M, py));
          for (let r = r0; r <= r1; r++) for (let x = c0; x <= c1; x++) {
            if (L.drawn[r * L.cols + x]) continue;
            shift(x * cs + cs / 2, r * cs + cs / 2); if (!onFace || rlit < 0.05) continue;
            R.glyph(L, x * cs + ox, r * cs + oy, rs, L.glyphs[r * L.cols + x], Math.min(1, 0.5 * rlit));
          }
        }
        R.tint(L, t); // 여기까지 그린 흰 글자에 색을 입힌다. 머리는 그 뒤에 밝은 색 그대로
        for (let j = 0; j < heads.length; j += 2) {
          shift(heads[j] * cs + cs / 2, heads[j + 1] * cs + cs / 2);
          R.head(L, heads[j] * cs + ox, heads[j + 1] * cs + oy, rs, L.glyphs[heads[j + 1] * L.cols + heads[j]], onFace ? Math.min(1, 0.6 + rlit * 0.5) : rm);
        }
        R.end(L, offs[li], (o.depth ? L.alpha : 1) * o.intensity); // 먼 겹 → 가까운 겹 순서로 화면에 겹친다
      });
      for (const p of sparks) { p.t += dt; p.vy += 560 * dpr * dt; p.vx *= Math.pow(0.4, dt); p.x += p.vx * dt; p.y += p.vy * dt; }
      if (shocks.length || sparks.length) R.effects(shocks, sparks); // 충격파 고리와 요격 파편 (빛 번짐 전에 그려 함께 빛나게)
      sparks = sparks.filter((p) => p.t < p.life);
      R.post();
    }

    // ---- 캔버스 2D: 겹마다 캔버스에 흰 글자를 찍고 source-in으로 색을 입힌 뒤 화면에 겹친다
    function canvasRenderer() {
      let ctx = view.getContext("2d");
      if (!ctx) { // WebGL2 문맥을 만든 뒤 초기화에 실패하면 같은 캔버스에서 2D를 못 얻는다. 같은 캔버스를 새로 바꿔 끼운다
        const fresh = view.cloneNode(false); view.replaceWith(fresh); view = fresh; ctx = view.getContext("2d");
      }
      const bloomCv = document.createElement("canvas"), bctx = bloomCv.getContext("2d");
      let scanP = null, c = null, clipped = false;
      function atlas(cell, color, set) {
        const cv = document.createElement("canvas"), chars = [...set.chars];
        cv.width = Math.ceil(cell * chars.length); cv.height = Math.ceil(cell);
        const a = cv.getContext("2d");
        a.font = `${Math.round(cell * 0.86)}px ${FONT}`;
        a.textAlign = "center"; a.textBaseline = "middle"; a.fillStyle = color;
        chars.forEach((ch, i) => {
          a.save(); a.translate(i * cell + cell / 2, cell / 2);
          if (mirrored(set, ch)) a.scale(-1, 1);
          a.fillText(ch, 0, 0); a.restore();
        });
        return cv;
      }
      function tint(L, t) {
        const w = L.w, h = L.h;
        if (o.color === "rainbow") { // 줄마다 다른 색이 천천히 돈다
          for (let x = 0; x < L.cols; x++) { c.fillStyle = `hsl(${(x * 9 + t * 18) % 360} 95% 62%)`; c.fillRect(x * L.cell, 0, L.cell + 1, h); }
          return;
        }
        const g = GRADIENTS[o.color];
        if (g) {
          const f = g.dir === "v" ? c.createLinearGradient(0, 0, 0, h) : c.createLinearGradient(0, 0, w, 0);
          for (const [at, col] of g.stops) f.addColorStop(at, col);
          c.fillStyle = f;
        } else c.fillStyle = o.color === "classic" ? "#2bff7a" : o.color;
        c.fillRect(0, 0, w, h);
      }
      return {
        name: "2d", lost: false,
        resize() {
          view.width = W; view.height = H; scanP = null;
          bloomCv.width = Math.max(1, Math.floor(W / 6)); bloomCv.height = Math.max(1, Math.floor(H / 6));
        },
        layer(L) {
          L.cv = document.createElement("canvas"); L.cv.width = L.w; L.cv.height = L.h; L.c = L.cv.getContext("2d");
          L.white = atlas(L.cell, "#fff", L.set); L.headAtlas = atlas(L.cell, HEAD, L.set);
        },
        drop() {},
        clear() { ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1; ctx.fillStyle = o.background; ctx.fillRect(0, 0, W, H); },
        frame(t, lim) {
          if (lim) { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, lim); ctx.clip(); clipped = true; } // 띠 밖은 마지막 장면 그대로
          this.clear();
        },
        begin(L) { c = L.c; c.globalCompositeOperation = "source-over"; c.globalAlpha = 1; c.clearRect(0, 0, L.w, L.h); },
        glyph(L, x, y, s, g, a) { c.globalAlpha = a; c.drawImage(L.white, g * L.cell, 0, L.cell, L.cell, x, y, s, s); },
        // source-atop: 글자 모양은 두고 색만 바꾼다. source-in은 칠한 사각형 밖을 지워서, 줄마다 칠하는 무지개에서 꼬리가 사라졌다
        tint(L, t) { c.globalAlpha = 1; c.globalCompositeOperation = "source-atop"; tint(L, t); c.globalCompositeOperation = "source-over"; },
        head(L, x, y, s, g, a) { c.globalAlpha = a; c.drawImage(L.headAtlas, g * L.cell, 0, L.cell, L.cell, x, y, s, s); },
        end(L, off, alpha) { c.globalAlpha = 1; ctx.globalAlpha = alpha; ctx.drawImage(L.cv, -L.M + off[0], -L.M + off[1], L.LW, L.LH); },
        effects(shocks, sparks) {
          ctx.globalCompositeOperation = "lighter";
          for (const sh of shocks) {
            const a = (1 - sh.t / 0.75) * o.intensity;
            ctx.beginPath(); ctx.arc(sh.x, sh.y, sh.r, 0, Math.PI * 2); ctx.strokeStyle = accent(sh.x);
            ctx.globalAlpha = a * 0.25; ctx.lineWidth = 9 * dpr; ctx.stroke();
            ctx.globalAlpha = a * 0.8; ctx.lineWidth = 1.6 * dpr; ctx.strokeStyle = HEAD; ctx.stroke();
          }
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          let font = 0;
          for (const p of sparks) {
            const a = 1 - p.t / p.life; if (a <= 0) continue;
            if (p.size !== font) { font = p.size; ctx.font = `${font}px ${FONT}`; }
            ctx.globalAlpha = a * o.intensity; ctx.fillStyle = p.t < 0.12 ? HEAD : accent(p.x); ctx.fillText(p.ch, p.x, p.y);
          }
          ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
        },
        post() {
          if (o.bloom > 0) { // 빛 번짐: 1/6로 줄여 흐린 뒤 더하기로 겹친다
            bctx.globalCompositeOperation = "copy"; bctx.filter = "blur(2px)";
            bctx.drawImage(view, 0, 0, bloomCv.width, bloomCv.height); bctx.filter = "none";
            ctx.globalCompositeOperation = "lighter"; ctx.globalAlpha = Math.min(1, o.bloom * 0.75);
            ctx.drawImage(bloomCv, 0, 0, W, H);
            if (o.bloom > 1) { ctx.globalAlpha = Math.min(1, o.bloom - 1); ctx.drawImage(bloomCv, 0, 0, W, H); }
          }
          ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
          if (o.vignette) {
            const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.hypot(W, H) * 0.62);
            g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.72)"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
          }
          if (o.scan) {
            if (!scanP) {
              const p = document.createElement("canvas"); p.width = 1; p.height = Math.max(2, Math.round(3 * dpr));
              const pc = p.getContext("2d"); pc.fillStyle = "rgba(0,0,0,.28)"; pc.fillRect(0, 0, 1, Math.max(1, Math.round(dpr)));
              scanP = ctx.createPattern(p, "repeat");
            }
            ctx.fillStyle = scanP; ctx.fillRect(0, 0, W, H);
          }
          if (clipped) { ctx.restore(); clipped = false; }
        },
      };
    }

    // ---- WebGL2: 글자 하나가 인스턴스 하나다. 겹마다 그리기 호출 한 번, 색은 셰이더가 위치로 정한다.
    // 장면을 텍스처에 그린 뒤 1/6 축소·흐림으로 빛 번짐을 더하고, 비네트·주사선을 한 번에 입힌다.
    function glRenderer() {
      let gl = null;
      try { gl = view.getContext("webgl2", { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: true, preserveDrawingBuffer: false }); } catch { gl = null; }
      if (!gl) return null;
      const VS_GLYPH = `#version 300 es
layout(location=0) in vec2 a_corner; layout(location=1) in vec4 a_inst; layout(location=2) in vec4 a_col;
uniform vec2 u_view, u_shift, u_atlas; uniform float u_res, u_k, u_ac, u_acols;
out vec2 v_uv, v_lp; out vec4 v_col;
void main() {
  float s = a_inst.z * u_k;
  vec2 lp = a_inst.xy + a_inst.z * 0.5 + (a_corner - 0.5) * s; // 겹 픽셀
  vec2 sp = lp / u_res + u_shift;                              // 화면 픽셀
  gl_Position = vec4(sp.x / u_view.x * 2.0 - 1.0, 1.0 - sp.y / u_view.y * 2.0, 0.0, 1.0);
  float g = floor(a_inst.w + 0.5);
  v_uv = (vec2(mod(g, u_acols), floor(g / u_acols)) + a_corner) * u_ac / u_atlas;
  v_lp = lp; v_col = a_col;
}`;
      const FS_GLYPH = `#version 300 es
precision highp float;
in vec2 v_uv, v_lp; in vec4 v_col;
uniform sampler2D u_tex; uniform int u_mode; uniform float u_dir, u_cell, u_time, u_alpha;
uniform vec2 u_layer; uniform vec3 u_c0, u_c1, u_c2, u_at;
out vec4 outColor;
vec3 hsl(float h, float s, float l) { vec3 k = mod(vec3(0.0, 8.0, 4.0) + h / 30.0, 12.0); float a = s * min(l, 1.0 - l); return l - a * clamp(min(k - 3.0, 9.0 - k), -1.0, 1.0); }
void main() {
  float m = texture(u_tex, v_uv).a * v_col.x * u_alpha;
  vec3 c = v_col.yzw;
  if (v_col.y < 0.0) {
    if (u_mode == 0) c = u_c0;
    else if (u_mode == 1) {
      float p = clamp(u_dir > 0.5 ? v_lp.y / u_layer.y : v_lp.x / u_layer.x, 0.0, 1.0);
      c = p < u_at.y ? mix(u_c0, u_c1, (p - u_at.x) / (u_at.y - u_at.x)) : mix(u_c1, u_c2, (p - u_at.y) / (u_at.z - u_at.y));
    } else c = hsl(mod(floor(v_lp.x / u_cell) * 9.0 + u_time * 18.0, 360.0), 0.95, 0.62);
  }
  outColor = vec4(c * m, m);
}`;
      const VS_RING = `#version 300 es
layout(location=0) in vec2 a_corner; uniform vec2 u_view; uniform vec3 u_ring; uniform float u_pad; out vec2 v_p;
void main() { vec2 p = u_ring.xy + (a_corner * 2.0 - 1.0) * (u_ring.z + u_pad); v_p = p;
  gl_Position = vec4(p.x / u_view.x * 2.0 - 1.0, 1.0 - p.y / u_view.y * 2.0, 0.0, 1.0); }`;
      const FS_RING = `#version 300 es
precision highp float;
in vec2 v_p; uniform vec3 u_ring, u_acc, u_head; uniform float u_a, u_wide, u_thin; out vec4 outColor;
void main() { float d = abs(distance(v_p, u_ring.xy) - u_ring.z);
  float w = clamp(u_wide * 0.5 - d + 0.5, 0.0, 1.0) * u_a * 0.25, n = clamp(u_thin * 0.5 - d + 0.5, 0.0, 1.0) * u_a * 0.8;
  outColor = vec4(u_acc * w + u_head * n, w + n); }`;
      const VS_FULL = `#version 300 es
void main() { vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2)); gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0); }`;
      const FS_DOWN = `#version 300 es
precision highp float;
uniform sampler2D u_src; uniform vec2 u_src_size, u_size; out vec4 outColor;
void main() { vec2 c = gl_FragCoord.xy * (u_src_size / u_size); vec3 s = vec3(0.0); // 6×6 칸을 선형 표본 9개로 평균
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) s += texture(u_src, (c + vec2(i, j) * 2.0) / u_src_size).rgb;
  outColor = vec4(s / 9.0, 1.0); }`;
      const FS_BLUR = `#version 300 es
precision highp float;
uniform sampler2D u_src; uniform vec2 u_size, u_dir; uniform float u_w[7]; out vec4 outColor;
void main() { vec2 uv = gl_FragCoord.xy / u_size; vec3 s = texture(u_src, uv).rgb * u_w[0];
  for (int i = 1; i < 7; i++) { vec2 d = u_dir * float(i) / u_size; s += (texture(u_src, uv + d).rgb + texture(u_src, uv - d).rgb) * u_w[i]; }
  outColor = vec4(s, 1.0); }`;
      const FS_FINAL = `#version 300 es
precision highp float;
uniform sampler2D u_scene, u_bloom; uniform vec2 u_size; uniform float u_k1, u_k2, u_r0, u_r1, u_per, u_dark; uniform int u_vig, u_scan;
out vec4 outColor;
void main() { vec2 uv = gl_FragCoord.xy / u_size; vec3 c = texture(u_scene, uv).rgb;
  if (u_k1 > 0.0) { vec3 b = texture(u_bloom, uv).rgb; c = min(vec3(1.0), c + b * u_k1); c = min(vec3(1.0), c + b * u_k2); }
  if (u_vig == 1) c *= 1.0 - 0.72 * clamp((distance(gl_FragCoord.xy, u_size * 0.5) - u_r0) / (u_r1 - u_r0), 0.0, 1.0);
  if (u_scan == 1 && mod(floor(u_size.y - gl_FragCoord.y), u_per) < u_dark) c *= 0.72;
  outColor = vec4(c, 1.0); }`;

      const HEAD_RGB = rgb(HEAD);
      const S = { lost: false };
      let P, quad, inst, vaoGlyph, vaoRing, vaoEmpty, scene, bloomA, bloomB, bw = 1, bh = 1, sparkLayer = null;
      let data = new Float32Array(8 * 8192), n = 0, time = 0, band = 0;
      const tintU = { mode: 0, dir: 0, c0: [0, 0, 0], c1: [0, 0, 0], c2: [0, 0, 0], at: [0, 0.5, 1] };
      const weights = (() => { const w = [...Array(7)].map((_, i) => Math.exp(-i * i / 8)), s = w[0] + 2 * w.slice(1).reduce((a, b) => a + b, 0); return w.map((x) => x / s); })(); // blur(2px)

      function program(vs, fs) {
        const p = gl.createProgram();
        for (const [type, src] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
          const sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
          if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS) && !gl.isContextLost()) throw new Error(gl.getShaderInfoLog(sh));
          gl.attachShader(p, sh);
        }
        gl.linkProgram(p);
        if (!gl.getProgramParameter(p, gl.LINK_STATUS) && !gl.isContextLost()) throw new Error(gl.getProgramInfoLog(p));
        const u = {}, cnt = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS) || 0;
        for (let i = 0; i < cnt; i++) { const name = gl.getActiveUniform(p, i).name.replace(/\[0\]$/, ""); u[name] = gl.getUniformLocation(p, name); }
        return { p, u };
      }
      function target(w, h) {
        const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
        const fb = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        return { tex, fb, w, h };
      }
      const free = (t) => { if (t) { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); } };
      function init() {
        P = { glyph: program(VS_GLYPH, FS_GLYPH), ring: program(VS_RING, FS_RING), down: program(VS_FULL, FS_DOWN), blur: program(VS_FULL, FS_BLUR), final: program(VS_FULL, FS_FINAL) };
        quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
        inst = gl.createBuffer();
        vaoGlyph = gl.createVertexArray(); gl.bindVertexArray(vaoGlyph);
        gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, inst);
        gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 0); gl.vertexAttribDivisor(1, 1);
        gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 32, 16); gl.vertexAttribDivisor(2, 1);
        vaoRing = gl.createVertexArray(); gl.bindVertexArray(vaoRing);
        gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        vaoEmpty = gl.createVertexArray(); gl.bindVertexArray(null);
        scene = bloomA = bloomB = null;
      }
      function push(x, y, s, g, a, c) {
        if (n * 8 >= data.length) { const d = new Float32Array(data.length * 2); d.set(data); data = d; }
        const i = n++ * 8;
        data[i] = x; data[i + 1] = y; data[i + 2] = s; data[i + 3] = g; data[i + 4] = a;
        if (c) { data[i + 5] = c[0]; data[i + 6] = c[1]; data[i + 7] = c[2]; } else data[i + 5] = -1; // -1: 겹의 색 규칙을 따른다
      }
      function flush(L, shift, res, alpha) {
        if (!n) return;
        const u = P.glyph.u;
        gl.useProgram(P.glyph.p); gl.bindVertexArray(vaoGlyph);
        gl.uniform2f(u.u_view, W, H); gl.uniform2f(u.u_shift, shift[0], shift[1]); gl.uniform1f(u.u_res, res);
        gl.uniform1f(u.u_k, L.ac / L.cell); gl.uniform1f(u.u_ac, L.ac); gl.uniform1f(u.u_acols, L.acols); gl.uniform2f(u.u_atlas, L.aw, L.ah);
        gl.uniform1f(u.u_alpha, alpha); gl.uniform1f(u.u_cell, L.cell); gl.uniform2f(u.u_layer, L.w, L.h); gl.uniform1f(u.u_time, time);
        gl.uniform1i(u.u_mode, tintU.mode); gl.uniform1f(u.u_dir, tintU.dir);
        gl.uniform3fv(u.u_c0, tintU.c0); gl.uniform3fv(u.u_c1, tintU.c1); gl.uniform3fv(u.u_c2, tintU.c2); gl.uniform3fv(u.u_at, tintU.at);
        gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, L.tex); gl.uniform1i(u.u_tex, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, inst); gl.bufferData(gl.ARRAY_BUFFER, data.subarray(0, n * 8), gl.STREAM_DRAW);
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, n);
        n = 0;
      }
      view.addEventListener("webglcontextlost", (e) => { e.preventDefault(); S.lost = true; });
      view.addEventListener("webglcontextrestored", () => { init(); S.lost = false; resize(); });
      try { init(); } catch (e) { console.warn("wallpaperMatrix: WebGL2 초기화 실패, 2D로 그린다", e); return null; }

      return Object.assign(S, {
        name: "webgl",
        resize() {
          view.width = W; view.height = H;
          free(scene); free(bloomA); free(bloomB);
          bw = Math.max(1, Math.floor(W / 6)); bh = Math.max(1, Math.floor(H / 6));
          scene = target(W, H); bloomA = target(bw, bh); bloomB = target(bw, bh);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        },
        layer(L) { // 흰 글자 지도. 칸을 정수로 올리고 가장자리를 비워 이웃 글자가 번져 들어오지 않게 한다
          const cs = L.cell, ac = Math.ceil(cs) + 2, acols = Math.ceil(Math.sqrt(L.n)), arows = Math.ceil(L.n / acols);
          const cv = document.createElement("canvas"); cv.width = ac * acols; cv.height = ac * arows;
          const a = cv.getContext("2d");
          a.font = `${Math.round(cs * 0.86)}px ${FONT}`; a.textAlign = "center"; a.textBaseline = "middle"; a.fillStyle = "#fff";
          L.chars.forEach((ch, i) => {
            a.save(); a.translate((i % acols) * ac + ac / 2, Math.floor(i / acols) * ac + ac / 2);
            if (mirrored(L.set, ch)) a.scale(-1, 1);
            a.fillText(ch, 0, 0); a.restore();
          });
          L.tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, L.tex);
          gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cv);
          for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
          Object.assign(L, { ac, acols, aw: cv.width, ah: cv.height });
        },
        drop(L) { if (L.tex) gl.deleteTexture(L.tex); L.tex = null; },
        clear() {
          const b = rgb(o.background);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, W, H);
          gl.clearColor(b[0], b[1], b[2], 1); gl.clear(gl.COLOR_BUFFER_BIT);
        },
        frame(t, lim) {
          time = t; band = Math.ceil(lim || 0);
          const g = GRADIENTS[o.color];
          if (o.color === "rainbow") tintU.mode = 2;
          else if (g) {
            tintU.mode = 1; tintU.dir = g.dir === "v" ? 1 : 0;
            [tintU.c0, tintU.c1, tintU.c2] = g.stops.map((s) => rgb(s[1])); tintU.at = g.stops.map((s) => s[0]);
          } else { tintU.mode = 0; tintU.c0 = rgb(o.color === "classic" ? "#2bff7a" : o.color); }
          const b = rgb(o.background);
          gl.bindFramebuffer(gl.FRAMEBUFFER, scene.fb); gl.viewport(0, 0, W, H);
          // 띠만 그릴 때는 장면 텍스처의 띠 밖을 지우지 않는다. 마지막 장면이 남고, 마지막 합성이 그것까지 화면에 옮긴다
          if (band) { gl.enable(gl.SCISSOR_TEST); gl.scissor(0, H - band, W, band); } else gl.disable(gl.SCISSOR_TEST);
          gl.clearColor(b[0], b[1], b[2], 1); gl.clear(gl.COLOR_BUFFER_BIT);
          gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          sparkLayer = null;
        },
        begin() { n = 0; },
        glyph(L, x, y, s, g, a) { push(x, y, s, g, a, null); },
        tint() {},
        head(L, x, y, s, g, a) { push(x, y, s, g, a, HEAD_RGB); },
        end(L, off, alpha) { flush(L, [-L.M + off[0], -L.M + off[1]], L.res, alpha); if (!sparkLayer || L.cell / L.res > sparkLayer.cell / sparkLayer.res) sparkLayer = L; },
        effects(shocks, sparks) {
          gl.blendFunc(gl.ONE, gl.ONE); // lighter
          if (shocks.length) {
            const u = P.ring.u;
            gl.useProgram(P.ring.p); gl.bindVertexArray(vaoRing);
            gl.uniform2f(u.u_view, W, H); gl.uniform1f(u.u_pad, 6 * dpr); gl.uniform1f(u.u_wide, 9 * dpr); gl.uniform1f(u.u_thin, 1.6 * dpr); gl.uniform3fv(u.u_head, HEAD_RGB);
            for (const sh of shocks) {
              gl.uniform3f(u.u_ring, sh.x, sh.y, sh.r); gl.uniform1f(u.u_a, (1 - sh.t / 0.75) * o.intensity); gl.uniform3fv(u.u_acc, accentRGB(sh.x));
              gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            }
          }
          const L = sparkLayer;
          if (sparks.length && L) { // 파편은 가장 큰 글자 지도를 쓴다. 글꼴 크기 = 칸 × 0.86
            n = 0;
            for (const p of sparks) {
              const a = 1 - p.t / p.life; if (a <= 0) continue;
              const s = p.size / 0.86;
              push(p.x - s / 2, p.y - s / 2, s, p.g, a * o.intensity, p.t < 0.12 ? HEAD_RGB : accentRGB(p.x));
            }
            flush(L, [0, 0], 1, 1);
          }
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        },
        post() {
          gl.disable(gl.BLEND); gl.bindVertexArray(vaoEmpty);
          const k1 = o.bloom > 0 ? Math.min(1, o.bloom * 0.75) : 0, k2 = o.bloom > 1 ? Math.min(1, o.bloom - 1) : 0;
          gl.activeTexture(gl.TEXTURE0);
          if (band) { const bb = Math.min(bh, Math.ceil(band * bh / H) + 8); gl.scissor(0, bh - bb, bw, bb); }
          if (k1 > 0) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, bloomA.fb); gl.viewport(0, 0, bw, bh);
            gl.useProgram(P.down.p); gl.bindTexture(gl.TEXTURE_2D, scene.tex);
            gl.uniform1i(P.down.u.u_src, 0); gl.uniform2f(P.down.u.u_src_size, W, H); gl.uniform2f(P.down.u.u_size, bw, bh);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            gl.useProgram(P.blur.p); gl.uniform1i(P.blur.u.u_src, 0); gl.uniform2f(P.blur.u.u_size, bw, bh); gl.uniform1fv(P.blur.u.u_w, weights);
            for (const [src, dst, dx, dy] of [[bloomA, bloomB, 1, 0], [bloomB, bloomA, 0, 1]]) {
              gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fb); gl.bindTexture(gl.TEXTURE_2D, src.tex); gl.uniform2f(P.blur.u.u_dir, dx, dy);
              gl.drawArrays(gl.TRIANGLES, 0, 3);
            }
          }
          gl.disable(gl.SCISSOR_TEST);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, W, H);
          const u = P.final.u;
          gl.useProgram(P.final.p);
          gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, scene.tex); gl.uniform1i(u.u_scene, 0);
          gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, bloomA.tex); gl.uniform1i(u.u_bloom, 1);
          gl.uniform2f(u.u_size, W, H); gl.uniform1f(u.u_k1, k1); gl.uniform1f(u.u_k2, k2);
          gl.uniform1i(u.u_vig, o.vignette ? 1 : 0); gl.uniform1f(u.u_r0, Math.min(W, H) * 0.35); gl.uniform1f(u.u_r1, Math.hypot(W, H) * 0.62);
          gl.uniform1i(u.u_scan, o.scan ? 1 : 0); gl.uniform1f(u.u_per, Math.max(2, Math.round(3 * dpr))); gl.uniform1f(u.u_dark, Math.max(1, Math.round(dpr)));
          gl.drawArrays(gl.TRIANGLES, 0, 3);
          gl.activeTexture(gl.TEXTURE0);
        },
      });
    }

    function still() { // 멈춘 상태에서도 비가 내린 한 장면을 남긴다
      if (R.lost) return;
      if (reduce.matches && o.reducedMotion === "off") { R.clear(); return; }
      draw(0, (performance.now() - t0) / 1000);
    }
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, o.maxDpr);
      const r = view.getBoundingClientRect();
      W = Math.max(1, Math.floor(r.width * dpr)); H = Math.max(1, Math.floor(r.height * dpr));
      R.resize();
      for (const L of layers) R.drop(L);
      layers = (o.depth ? LAYERS : [LAYERS[1]]).map(layer);
      if (!running) still();
    }
    function loop(now) {
      raf = requestAnimationFrame(loop);
      acc += now - last; last = now;
      if (acc < 1000 / o.fps - 1) return;
      const dt = Math.min(0.1, acc / 1000); acc = 0;
      draw(dt, (now - t0) / 1000); frames++;
      if (now - fpsT > 1000) { fps = frames; frames = 0; fpsT = now; }
    }
    function run() { // 보이고, 원하고, 움직임 줄이기가 아닐 때만 예약한다
      const go = wanted && !document.hidden && !reduce.matches;
      if (go && !running) { running = true; firstBuild = false; last = performance.now(); acc = 0; raf = requestAnimationFrame(loop); } // fromTop은 처음 흐르기 시작할 때까지만
      if (!go && running) { running = false; cancelAnimationFrame(raf); still(); }
      if (!go && !running && reduce.matches) still();
    }
    const onMove = (e) => {
      mouseT = [(e.clientX / innerWidth - 0.5) * -2, (e.clientY / innerHeight - 0.5) * -2];
      const r = view.getBoundingClientRect(), x = (e.clientX - r.left) * dpr, y = (e.clientY - r.top) * dpr;
      if (ptr.on) ptr.energy = Math.min(1.6, ptr.energy + Math.hypot(x - ptr.x, y - ptr.y) / dpr * 0.012);
      ptr.x = x; ptr.y = y; ptr.on = true;
    };
    const onOut = (e) => { if (!e.relatedTarget) ptr.on = false; };
    // 누르면 충격파. 버튼·입력·링크나 data-no-matrix 안에서 누른 것은 무시한다.
    const onDown = (e) => {
      if (!o.intercept || !running || e.button > 0 || e.target.closest?.("a, button, input, select, textarea, label, [contenteditable], [data-no-matrix]")) return;
      const r = view.getBoundingClientRect();
      if (shocks.length < 6) shocks.push({ x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr, t: 0, r: 0 });
    };
    // 관찰을 시작하면 곧바로 한 번 불린다. 크기가 그대로면 다시 짓지 않는다(다시 지으면 fromTop으로 비워 둔 화면이 비로 가득 찬다)
    const ro = new ResizeObserver(() => {
      const r = view.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, o.maxDpr);
      if (Math.max(1, Math.floor(r.width * d)) === W && Math.max(1, Math.floor(r.height * d)) === H && d === dpr) return;
      resize();
    });
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerout", onOut); addEventListener("pointerdown", onDown);
    document.addEventListener("visibilitychange", run);
    reduce.addEventListener("change", run);
    ro.observe(view);
    resize();

    return {
      start() { wanted = true; run(); },
      stop() { wanted = false; run(); },
      set(patch) {
        const rebuild = ["charset", "depth", "maxDpr", "scale"].some((k) => k in patch && patch[k] !== o[k]);
        const respawn = ["density", "tail"].some((k) => k in patch);
        Object.assign(o, patch);
        if (rebuild) resize();
        else if (respawn) for (const L of layers) for (const d of L.drops) if (d.y < 0) spawn(L, d, false);
        if (!running) still();
      },
      resize,
      reset(top = true, ramp = o.ramp) { // 비를 처음처럼 다시 시작한다: top이면 위에서부터 내리고(ramp초에 걸쳐 평소 밀도까지), 아니면 화면 가득 무작위로 놓는다. 흐르던 것은 멈추지 않는다
        for (const L of layers) for (const d of L.drops) spawn(L, d, top ? "top" : true, ramp);
        shocks = []; sparks = [];
        if (!running) still();
      },
      destroy() {
        wanted = false; run(); ro.disconnect();
        for (const L of layers) R.drop(L);
        removeEventListener("pointermove", onMove); removeEventListener("pointerout", onOut); removeEventListener("pointerdown", onDown); document.removeEventListener("visibilitychange", run); reduce.removeEventListener("change", run);
      },
      get fps() { return running ? fps : 0; },
      get running() { return running; },
      get renderer() { return R.name; },
      get options() { return { ...o }; },
    };
  }
  return { create, charsets: Object.keys(CHARSETS), defaults: { ...DEFAULTS } };
})();
