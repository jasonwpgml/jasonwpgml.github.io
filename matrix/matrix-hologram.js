// 매트릭스 홀로그램 얼굴: 마우스를 바라보는 3D 얼굴을 비 위에 띄우거나(float),
// 비 글자가 얼굴 굴곡을 따라 벽에서 튀어나오게(wall) 한다.
// wallpaper-matrix.js와 matrix-hologram-data.js 다음에 로드한다. 호스트는 얼굴용 canvas 하나와 비(rain) 객체를 넘긴다.
const matrixHologram = (() => {
  const CHARS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123457789Z:=*+<>";
  const DEFAULTS = {
    enabled: true,
    view: "float",   // float: 비 위에 떠 있는 얼굴 · wall: 비 글자가 얼굴 모양으로 튀어나옴
    model: "head",   // head: 전체 머리 스캔 · mask: MediaPipe 얼굴 가면
    look: "glyph",   // glyph: 글자 · dot: 점
    sweep: true,     // 홀로그램 줄(밝은 띠가 위에서 아래로 지나감)
    eyeCore: "#dcfff0", eyeColor: "#3cff95", // 눈빛: 가운데 색 → 바깥 번짐 색(그라데이션)
    eyeSize: 1,      // 눈빛 크기 배율(0.4~2.5)
    eyeY: 0.03,      // 눈 높이 보정(모델 단위, -0.15~0.15). 위쪽 눈꺼풀 주름과 눈알 사이 가운데가 기본
    eyeSpread: 1,    // 눈 간격 배율(0.7~1.4)
    eyeBlink: "off", // off · led: 랜선 LED처럼 불규칙하게 톡톡 깜빡 · crt: 화면 지직거림처럼 떨리다 가끔 꺼짐
    anchor: [0.5, 0.5], // 얼굴 가운데 위치(화면 가로·세로 비율). 글이 왼쪽에 있으면 [0.8, 0.5]처럼 오른쪽 빈 곳에 둔다
    size: 1,         // 얼굴 크기 배율(화면 짧은 변의 36%가 1)
    appearDelay: 0,  // 켠 뒤 드러나기 시작할 때까지 기다리는 시간(초). 미리 켜 두면 처음 그릴 때의 준비 비용이 화면이 빈 동안 지나간다
    appear: 4,       // 켤 때 가운데서 빛 고리가 퍼지며 잔물결과 함께 드러나는 시간(초). 0이면 바로 보인다
    fps: 60,         // 프레임 상한. 하루 종일 도는 바탕화면에서는 30으로 낮춘다(벽 모드는 늘 30 이하)
    maxDpr: 1.5,
  };
  const unit = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const LIGHT = unit([-0.62, 0.5, 0.6]); // 왼쪽 위에서 비스듬히
  const jitter = () => [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const rgba = (hex, a) => { // "#rrggbb" → rgba(), 잘못된 값은 초록
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex).trim()); const v = m ? parseInt(m[1], 16) : 0x3cff95;
    return `rgba(${v >> 16 & 255},${v >> 8 & 255},${v & 255},${a})`;
  };

  // 가면: 얼굴을 일정한 높이마다 가로로 잘라, 잘린 선을 따라 점을 놓는다(홀로그램 등고선)
  function maskPoints(src) {
    const V = src.v, F = src.f, vn = V.map(() => [0, 0, 0]), nb = V.map(() => new Set());
    for (const [a, b, c] of F) {
      const fn = cross(sub(V[b], V[a]), sub(V[c], V[a]));
      for (const i of [a, b, c]) { vn[i][0] += fn[0]; vn[i][1] += fn[1]; vn[i][2] += fn[2]; }
      nb[a].add(b).add(c); nb[b].add(a).add(c); nb[c].add(a).add(b);
    }
    let N = vn.map(unit);
    if (N.reduce((s, q) => s + q[2], 0) < 0) N = N.map((q) => q.map((x) => -x));
    let D = V.map((v, i) => { let m = 0; for (const j of nb[i]) m += V[j][2]; return v[2] - m / nb[i].size; });
    const sd = Math.sqrt(D.reduce((s, d) => s + d * d, 0) / D.length) || 1; D = D.map((d) => (d / sd) * 0.1);
    // 가장자리: 한 삼각형에만 속한 변의 꼭짓점이 경계. 맨 바깥 두 칸만 서서히 흐리게
    const use = new Map(), key = (a, b) => (a < b ? a * 1000 + b : b * 1000 + a);
    for (const [a, b, c] of F) for (const [p, q] of [[a, b], [b, c], [c, a]]) use.set(key(p, q), (use.get(key(p, q)) || 0) + 1);
    const hop = V.map(() => Infinity), queue = [];
    for (const [k, cnt] of use) if (cnt === 1) for (const v of [Math.floor(k / 1000), k % 1000]) if (hop[v]) { hop[v] = 0; queue.push(v); }
    for (let q = 0; q < queue.length; q++) for (const n of nb[queue[q]]) if (hop[n] > hop[queue[q]] + 1) { hop[n] = hop[queue[q]] + 1; queue.push(n); }
    const E = hop.map((h) => Math.min(1, (h + 0.35) / 2.2));
    const pts = [], ROWS = 66, STEP = 0.03;
    for (let r = 0; r < ROWS; r++) {
      const c = -0.995 + (r / (ROWS - 1)) * 1.99;
      for (const [a, b, cc] of F) {
        const ids = [a, b, cc], cut = [];
        for (let e = 0; e < 3; e++) {
          const i0 = ids[e], i1 = ids[(e + 1) % 3], y0 = V[i0][1], y1 = V[i1][1];
          if ((y0 - c) * (y1 - c) >= 0 || y0 === y1) continue;
          const t = (c - y0) / (y1 - y0), lerp = (A) => A[i0].map((q, k) => q + (A[i1][k] - q) * t);
          cut.push({ p: lerp(V), n: lerp(N), d: D[i0] + (D[i1] - D[i0]) * t, e: E[i0] + (E[i1] - E[i0]) * t });
        }
        if (cut.length !== 2) continue;
        const [A, B] = cut, k = Math.floor(Math.hypot(...sub(B.p, A.p)) / STEP + Math.random());
        for (let m = 0; m < k; m++) {
          const t = (m + 0.5) / k, mix = (x, y) => x.map((q, z) => q + (y[z] - q) * t);
          pts.push({ p: mix(A.p, B.p), n: unit(mix(A.n, B.n)), d: A.d + (B.d - A.d) * t, e: A.e + (B.e - A.e) * t, g: (Math.random() * 40) | 0, j: jitter() });
        }
      }
    }
    const eyes = [[33, 133], [362, 263]].map(([a, b]) => V[a].map((q, i) => (q + V[b][i]) / 2 + (i === 2 ? 0.02 : 0)));
    // 표정 자리: MediaPipe 점 번호로 입 가운데(13·14), 입꼬리(61·291), 턱끝(152)
    const mid = (a, b) => V[a].map((q, i) => (q + V[b][i]) / 2);
    const m = { pts, eyes, scale: 1, lift: 0, F: 3.2 };
    rig(m, { mouth: mid(13, 14), corners: [V[61], V[291]], chin: V[152] });
    return m;
  }
  // 표정에 쓰는 점별 무게: 턱(입 벌림), 입꼬리(웃음), 눈썹 띠(눈썹 올림)
  function rig(m, at) {
    const ey = (m.eyes[0][1] + m.eyes[1][1]) / 2, ed = Math.abs(m.eyes[1][0] - m.eyes[0][0]) || 0.6;
    const mouth = at.mouth, chinY = at.chin ? at.chin[1] : mouth[1] - ed * 0.9, n = m.pts.length;
    m.wJaw = new Float32Array(n); m.wCorner = new Float32Array(n); m.wBrow = new Float32Array(n); m.side = new Int8Array(n);
    const s2 = (ed * 0.28) ** 2;
    m.pts.forEach((P, i) => {
      const [x, y] = P.p;
      m.side[i] = x < 0 ? -1 : 1;
      // 턱: 입 너비 안쪽은 입 줄 아래가 한 번에 내려가 입술 틈이 생기고, 그 바깥 턱은 아래로 갈수록 완만하게 따라 내려간다
      const below = (mouth[1] - y) / Math.max(0.05, mouth[1] - chinY), half = Math.abs(at.corners[1][0] - at.corners[0][0]) / 2 || ed * 0.4;
      const gap = (0.7 + 0.3 * Math.min(1, below)) * Math.max(0, 1 - (Math.abs(x) / (half * 1.15)) ** 4);
      const slope = Math.min(1, below * 1.2) * Math.max(0, 1 - Math.abs(x) / (ed * 1.3)) ** 2 * 0.85;
      m.wJaw[i] = below > 0 ? Math.max(gap, slope) : 0;
      // 입꼬리: 가까운 입꼬리에서 멀어질수록 줄어든다
      const c = at.corners[x < 0 ? 0 : 1], d2 = (x - c[0]) ** 2 + (y - c[1]) ** 2;
      m.wCorner[i] = Math.exp(-d2 / s2);
      // 눈썹 띠: 눈보다 조금 위부터 이마 아래까지
      const up = (y - ey) / ed;
      m.wBrow[i] = up > 0.12 && up < 0.75 ? Math.sin(((up - 0.12) / 0.63) * Math.PI) * Math.max(0, 1 - Math.abs(x) / (ed * 1.4)) : 0;
    });
  }
  function headPoints(src) {
    const pts = [];
    for (let i = 0; i < src.d.length; i++)
      pts.push({ p: src.p.slice(i * 3, i * 3 + 3), n: src.n.slice(i * 3, i * 3 + 3), d: src.d[i], e: src.e[i], g: (Math.random() * 40) | 0, j: jitter() });
    const m = { pts, eyes: src.eyes, scale: 0.8, lift: 0.26, F: 4.2 };
    // 전체 머리 모델은 점 번호가 없어 눈 위치로 입·입꼬리 자리를 어림한다
    const ey = (src.eyes[0][1] + src.eyes[1][1]) / 2, ez = (src.eyes[0][2] + src.eyes[1][2]) / 2, ed = Math.abs(src.eyes[1][0] - src.eyes[0][0]) || 0.6;
    const mouth = [0, ey - ed * 1.05, ez];
    rig(m, { mouth, corners: [[-ed * 0.42, mouth[1] + ed * 0.03, ez], [ed * 0.42, mouth[1] + ed * 0.03, ez]], chin: [0, mouth[1] - ed * 0.85, ez] });
    return m;
  }
  const cache = {};
  function model(key) {
    const k = key === "mask" ? "mask" : "head";
    if (!cache[k]) cache[k] = k === "mask" ? maskPoints(MATRIX_HOLOGRAM_MODELS.mask) : headPoints(MATRIX_HOLOGRAM_MODELS.head);
    return cache[k];
  }

  function create(canvas, rain, options = {}) {
    const o = { ...DEFAULTS, ...options };
    const ctx = canvas.getContext("2d"), glow = document.createElement("canvas"), gctx = glow.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    // 느리면 한 단계씩 낮춘다: 픽셀 밀도 → 빛 번짐 → 30fps
    const Q = [{ dpr: 2, glow: true, fps: 60 }, { dpr: 1.15, glow: true, fps: 60 }, { dpr: 1, glow: false, fps: 60 }, { dpr: 1, glow: false, fps: 30 }];
    let qi = 0, M = null, bk, order, zbuf, proj, dpr = 1, Rcss = 1, SZcss = 1, atlas = null, CELL = 1;
    let raf = 0, running = false, lastDraw = 0, slow = 0, good = 0, upAfter = 900;
    const bucket = new Uint32Array(64);
    const S = { yaw: 0, pitch: 0, ty: 0, tp: 0, moved: -1e9, mx: 0.5, my: 0.5, glitch: 9, last: performance.now(), appear: 0, shown: false };
    // 눈 깜빡임 상태: LED는 '오래 켜져 있다가 몇 번 톡톡톡' 하는 묶음, CRT는 늘 미세하게 떨리다 가끔 한두 프레임 꺼짐
    const B = { on: true, left: 0, next: 0, drop: 0, jx: 0 };
    // 카메라로 읽은 사람 얼굴(holoface FaceState). 거울처럼 따라 한다: 고개·기울기·시선·눈 감김·입·웃음·눈썹
    const T = { at: -1e9, s: null, jaw: 0, smile: 0, brow: 0, bl: 0, br: 0, roll: 0 };
    const tracking = (now) => T.s && T.s.present && now - T.at < 1500;
    function eyeLevel(now) {
      B.jx = 0;
      if (o.eyeBlink === "led") {
        if (now >= B.next) {
          if (B.left > 0) { B.on = !B.on; B.left--; B.next = now + rnd(28, 85); }
          else { B.on = true; B.left = Math.random() < 0.45 ? 2 * Math.round(rnd(1, 4)) : 0; B.next = now + (B.left ? rnd(40, 120) : rnd(350, 2400)); }
        }
        return B.on ? 1 : 0.1;
      }
      if (o.eyeBlink === "crt") {
        if (B.drop > 0) { B.drop--; B.jx = rnd(-2, 2); return rnd(0.05, 0.25); }
        if (Math.random() < 0.025) B.drop = Math.random() < 0.3 ? 3 : 1;
        return 0.78 + Math.random() * 0.22;
      }
      return 1;
    }
    // 벽 모드에서 비 모듈이 읽는 양각 지도(CSS 픽셀 격자): 칸마다 가장 앞의 깊이와 밝기
    const relief = { ready: false, x0: 0, y0: 0, cw: 9, cols: 0, rows: 0, depth: null, lit: null, tmpD: null, tmpL: null, cx: 0, cy: 0 };

    Object.assign(canvas.style, { position: "fixed", transform: "translate(-50%, -50%)", pointerEvents: "none" });
    const anchor = () => { const a = Array.isArray(o.anchor) ? o.anchor : [0.5, 0.5]; return [Math.min(1, Math.max(0, +a[0] || 0.5)), Math.min(1, Math.max(0, +a[1] || 0.5))]; };
    let custom = null; // useFace()로 넣은 사람 얼굴(가면과 같은 MediaPipe 점 468개)
    function use(key) {
      M = custom || model(key);
      bk = new Uint8Array(M.pts.length); order = new Uint16Array(M.pts.length); zbuf = new Float32Array(M.pts.length);
      proj = M.pts.map(() => ({ x: 0, y: 0, s: 0, b: 0, vis: false }));
    }
    function makeAtlas() {
      CELL = Math.ceil(16 * dpr);
      atlas = document.createElement("canvas"); atlas.width = CELL * CHARS.length; atlas.height = CELL;
      const c = atlas.getContext("2d");
      c.font = `${Math.round(CELL * 0.86)}px "Hiragino Sans", "MS Gothic", ui-monospace, monospace`; c.textAlign = "center"; c.textBaseline = "middle"; c.fillStyle = "#fff";
      [...CHARS].forEach((ch, i) => { c.save(); c.translate(i * CELL + CELL / 2, CELL / 2); if (/[ｦ-ﾝ]/.test(ch)) c.scale(-1, 1); c.fillText(ch, 0, 0); c.restore(); });
    }
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, Q[qi].dpr, o.maxDpr);
      const [ax, ay] = anchor();
      Rcss = Math.min(innerWidth, innerHeight) * 0.36 * Math.min(2, Math.max(0.3, +o.size || 1)); SZcss = Math.ceil(Rcss * 3); // 얼굴이 돌아가도 들어가는 정사각형만 그린다
      canvas.width = canvas.height = Math.ceil(SZcss * dpr); canvas.style.width = canvas.style.height = `${SZcss}px`;
      canvas.style.left = `${ax * 100}%`; canvas.style.top = `${ay * 100}%`;
      glow.width = glow.height = Math.max(1, canvas.width >> 2); makeAtlas();
      relief.cols = relief.rows = Math.ceil(SZcss / relief.cw); const n = relief.cols * relief.rows;
      relief.depth = new Float32Array(n); relief.lit = new Float32Array(n); relief.tmpD = new Float32Array(n); relief.tmpL = new Float32Array(n);
      relief.x0 = innerWidth * ax - SZcss / 2; relief.y0 = innerHeight * ay - SZcss / 2; relief.ready = false;
    }

    function frame(now) {
      const dt = Math.min(0.05, (now - S.last) / 1000); S.last = now; const t = now / 1000;
      const tr = tracking(now);
      if (tr) { // 사람이 자기 오른쪽으로 돌면 화면 오른쪽으로, 위를 보면 위로(거울)
        const s = T.s, k = Math.min(1, dt * 12), ke = Math.min(1, dt * 18);
        S.ty = Math.max(-0.75, Math.min(0.75, (+s.yaw || 0) * Math.PI / 180));
        S.tp = Math.max(-0.45, Math.min(0.45, -(+s.pitch || 0) * Math.PI / 180));
        S.mx = 0.5 + Math.max(-1, Math.min(1, +s.gazeX || 0)) * 0.5; S.my = 0.5 - Math.max(-1, Math.min(1, +s.gazeY || 0)) * 0.5;
        T.roll += (Math.max(-0.5, Math.min(0.5, -(+s.roll || 0) * Math.PI / 180)) - T.roll) * k;
        T.jaw += ((+s.mouthOpen || 0) - T.jaw) * k; T.smile += ((+s.smile || 0) - T.smile) * k; T.brow += ((+s.browRaise || 0) - T.brow) * k;
        T.bl += ((+s.blinkLeft || 0) - T.bl) * ke; T.br += ((+s.blinkRight || 0) - T.br) * ke;
        S.moved = now;
      } else { const k = Math.min(1, dt * 3); T.roll -= T.roll * k; T.jaw -= T.jaw * k; T.smile -= T.smile * k; T.brow -= T.brow * k; T.bl -= T.bl * k; T.br -= T.br * k; }
      if (!tr && now - S.moved > 3000) { S.ty = Math.sin(t * 0.45) * 0.35; S.tp = Math.sin(t * 0.31) * 0.12; } // 마우스가 멈추면 두리번거림
      const k = 1 - Math.pow(tr ? 2e-5 : 0.002, dt); S.yaw += (S.ty - S.yaw) * k; S.pitch += (S.tp - S.pitch) * k; S.glitch += dt; // 따라 할 때는 더 빨리 따라간다
      const wall = o.view === "wall", turn = wall && !tr ? 0.6 : 1;         // 벽에 붙은 얼굴은 덜 돈다(카메라로 따라 할 때는 그대로)
      const cy = Math.cos(S.yaw * turn), sy = Math.sin(S.yaw * turn), cp = Math.cos(S.pitch * turn), sp = Math.sin(S.pitch * turn);
      const cr = Math.cos(T.roll * turn), sr = Math.sin(T.roll * turn), expr = T.jaw > 0.01 || T.smile > 0.01 || T.brow > 0.01;
      // 등장: 가운데서 빛 고리가 천천히 퍼지며 지나간 자리부터 드러나고, 뒤로 잔물결이 남았다가 잦아든다.
      // 조금 뒤(작게)에서 어둡게 시작해 앞으로 다가오며 밝아진다
      const ap = +o.appear > 0 && !reduce.matches ? Math.max(0, (S.appear = Math.min(1, S.appear + dt / +o.appear))) : 1;
      const rip = ap < 1, ease = ap * ap * (3 - 2 * ap), front = Math.pow(ap, 1.4) * 1.95 - 0.15, calm = 1 - ease;
      const SZ = canvas.width, R = Rcss * dpr * M.scale * (0.9 + 0.1 * ease), ox = SZ / 2, oy = SZ / 2 - M.lift * R, F = M.F;
      const g = S.glitch < 1.1 ? Math.pow(1 - S.glitch / 1.1, 2.2) : 0;  // 누른 직후 흩어짐(1 → 0)
      const sweepY = 1.2 - ((t * 0.35) % 1) * 2.6, P = M.pts;
      for (let i = 0; i < P.length; i++) {
        const A = P[i]; let x = A.p[0], y = A.p[1], z = A.p[2];
        if (g) { const s = g * 0.65 * (0.9 + A.j[2]); x += A.n[0] * s * 0.9 + A.j[0] * s * 1.4; y += A.n[1] * s * 0.9 + A.j[1] * s * 1.4; z += A.n[2] * s * 0.9; }
        if (expr) { // 표정: 턱을 내리고, 입꼬리를 위·옆으로, 눈썹 띠를 위로(벽 모드는 비 글자 칸이 굵어서 더 크게)
          const amp = wall ? 1.6 : 1;
          y -= M.wJaw[i] * T.jaw * 0.2 * amp;
          const c = M.wCorner[i] * T.smile * amp; y += c * 0.08; x += M.side[i] * c * 0.05; z += c * 0.02;
          y += M.wBrow[i] * T.brow * 0.07 * amp;
        }
        let reveal = 1, ring = 0;
        if (rip) {
          const d = front - Math.hypot(A.p[0], A.p[1] - 0.05);
          reveal = Math.max(0, Math.min(1, d / 0.45)) * (0.35 + 0.65 * ease); ring = Math.exp(-(d * d) / 0.008);
          const wave = d > 0 ? Math.sin(d * 22) * Math.exp(-d * 2.5) : 0;
          const s = (0.07 * ring + 0.025 * wave) * (0.4 + 0.6 * calm);
          x += A.n[0] * s; y += A.n[1] * s; z += A.n[2] * s;
        }
        let X = x * cy + z * sy, Z = -x * sy + z * cy; let Y = y * cp - Z * sp; Z = y * sp + Z * cp;
        if (T.roll) { const X0 = X; X = X0 * cr - Y * sr; Y = X0 * sr + Y * cr; } // 고개 기울기
        const nx = A.n[0] * cy + A.n[2] * sy; let nz = -A.n[0] * sy + A.n[2] * cy; const ny = A.n[1] * cp - nz * sp; nz = A.n[1] * sp + nz * cp;
        const q = proj[i], per = F / (F - Z);
        q.x = ox + X * per * R; q.y = oy - Y * per * R; q.s = per; q.vis = wall ? nz > 0.05 : nz > -0.1 || g > 0.05;
        let b = 0.08 + 0.92 * Math.max(0, nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2]) ** 1.25;
        b *= (0.5 + 0.5 * Math.max(0, nz)) * (1 + Math.max(-0.7, Math.min(0.6, A.d * 5))) * (0.05 + 0.95 * A.e);
        if (o.sweep) b += 0.55 * Math.exp(-((y - sweepY) ** 2) / 0.003);
        if (Math.random() < 0.01) A.g = (Math.random() * CHARS.length) | 0;
        if (rip) { b = b * reveal + 0.6 * ring * (0.5 + 0.5 * calm); if (reveal <= 0 && ring < 0.05) q.vis = false; } // 고리가 아직 안 닿은 곳은 없다(벽 모드 양각에서도 빠진다)
        q.b = Math.min(1.2, b * (1 - 0.4 * g)); zbuf[i] = Z;
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1; ctx.clearRect(0, 0, SZ, SZ);
      if (wall) buildRelief(ox, oy);
      else {
        // 먼 점부터: z를 64칸에 나눠 담는다(비교 정렬보다 싸다)
        bucket.fill(0);
        for (let i = 0; i < P.length; i++) bucket[bk[i] = Math.max(0, Math.min(63, ((zbuf[i] + 1.6) / 3.2 * 64) | 0))]++;
        for (let b = 1; b < 64; b++) bucket[b] += bucket[b - 1];
        for (let i = P.length - 1; i >= 0; i--) order[--bucket[bk[i]]] = i;
        const base = 9 * dpr * (Rcss / 324) ** 0.5;
        for (const i of order) {
          const q = proj[i]; if (!q.vis || q.b < 0.04) continue;
          ctx.globalAlpha = Math.min(1, q.b); const sz = base * q.s;
          if (o.look === "glyph") ctx.drawImage(atlas, P[i].g * CELL, 0, CELL, CELL, q.x - sz / 2, q.y - sz / 2, sz, sz);
          else { ctx.fillStyle = "#fff"; ctx.fillRect(q.x - sz * 0.14, q.y - sz * 0.14, sz * 0.28, sz * 0.28); }
        }
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-in"; // 흰 점에 색: 위는 청록, 아래는 초록
        const grad = ctx.createLinearGradient(0, oy - R * 1.2, 0, oy + R * 1.2); grad.addColorStop(0, "#7ff7ff"); grad.addColorStop(0.5, "#3cff95"); grad.addColorStop(1, "#159a4e");
        ctx.fillStyle = grad; ctx.fillRect(0, 0, SZ, SZ);
        ctx.globalCompositeOperation = "lighter";
        if (o.look === "glyph") for (const i of order) { const q = proj[i]; if (q.vis && q.b > 0.92) { ctx.globalAlpha = (q.b - 0.92) * 2.5; const sz = base * q.s * 0.9; ctx.drawImage(atlas, P[i].g * CELL, 0, CELL, CELL, q.x - sz / 2, q.y - sz / 2, sz, sz); } }
      }
      // 눈빛: 얼굴보다 조금 더 마우스 쪽으로 굴리고, 눈이 뒤로 돌아가면 흐려진다
      ctx.globalCompositeOperation = "lighter";
      const lv = eyeLevel(now) * Math.max(0, Math.min(1, (ap - 0.6) / 0.4)), size = Math.max(0.4, Math.min(2.5, +o.eyeSize || 1)); // 눈은 얼굴이 거의 다 드러난 뒤 켜진다
      for (const e of M.eyes) {
        const x = e[0] * (+o.eyeSpread || 1) + (S.mx - 0.5) * (tr ? 0.06 : 0.035), y = e[1] + (+o.eyeY || 0) - (S.my - 0.5) * 0.022 + T.brow * 0.012, z = e[2]; // 눈동자는 눈두덩 안에서만 조금 굴린다
        let X = x * cy + z * sy, Z = -x * sy + z * cy; let Y = y * cp - Z * sp; Z = y * sp + Z * cp;
        if (T.roll) { const X0 = X; X = X0 * cr - Y * sr; Y = X0 * sr + Y * cr; }
        const shut = e[0] < 0 ? T.bl : T.br; // 화면 왼쪽 눈 = 거울 속 그 사람의 왼쪽 눈
        if (shut > 0.85) continue;
        const front = Math.max(0, Math.min(1, ((-x * 0.9 * sy + cy) * cp + y * sp - 0.3) / 0.4));
        const per = F / (F - Z), r = 6 * dpr * per * (1 - g) * front * size * (1 - shut * 0.85);
        let px = ox + X * per * R, py = oy - Y * per * R;
        if (wall) { const pop = Math.max(0, Z + 0.4) * 0.05; px += (px - ox) * pop; py += (py - oy) * pop; } // 벽의 비 글자와 같은 만큼 밖으로 밀려 나온다
        if (r <= 0.5 || lv <= 0) continue;
        px += B.jx * dpr;
        // 먼저 눈 자리를 어둡게 눌러 둔다: 초록 얼굴 위에 더하면 빨강이 주황·노랑으로 섞이기 때문
        ctx.globalCompositeOperation = "source-over";
        const dk = ctx.createRadialGradient(px, py, 0, px, py, r * 2.2); dk.addColorStop(0, "rgba(0,0,0,.85)"); dk.addColorStop(0.6, "rgba(0,0,0,.45)"); dk.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalAlpha = lv; ctx.fillStyle = dk; ctx.fillRect(px - r * 2.2, py - r * 2.2, r * 4.4, r * 4.4);
        const rg = ctx.createRadialGradient(px, py, 0, px, py, r * 3.2);
        rg.addColorStop(0, rgba(o.eyeCore, 0.95)); rg.addColorStop(0.22, rgba(o.eyeColor, 0.6)); rg.addColorStop(0.55, rgba(o.eyeColor, 0.14)); rg.addColorStop(1, rgba(o.eyeColor, 0));
        ctx.globalAlpha = (0.9 + 0.1 * Math.sin(t * 3)) * lv; ctx.fillStyle = rg; ctx.fillRect(px - r * 3.2, py - r * 3.2, r * 6.4, r * 6.4);
      }
      if (!wall) {
        ctx.globalCompositeOperation = "destination-over"; ctx.globalAlpha = ease; // 얼굴 뒤 옅은 어둠: 비가 얼굴을 흐리지 않게(등장하며 짙어진다)
        const back = ctx.createRadialGradient(ox, oy, R * 0.2, ox, oy, R * 1.3); back.addColorStop(0, "rgba(0,0,0,.82)"); back.addColorStop(0.7, "rgba(0,0,0,.55)"); back.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = back; ctx.fillRect(0, 0, SZ, SZ);
        if (Q[qi].glow) {
          gctx.globalCompositeOperation = "copy"; gctx.filter = "blur(3px)"; gctx.drawImage(canvas, 0, 0, glow.width, glow.height); gctx.filter = "none";
          ctx.globalCompositeOperation = "lighter"; ctx.globalAlpha = 0.85; ctx.drawImage(glow, 0, 0, SZ, SZ);
        }
      }
      ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
    }
    function buildRelief(ox, oy) { // 투영한 점을 CSS 격자에 모으고 빈칸을 두 번 메운다
      const rl = relief, cw = rl.cw * dpr, cols = rl.cols, rows = rl.rows;
      rl.depth.fill(-9); rl.lit.fill(0);
      for (let i = 0; i < proj.length; i++) {
        const q = proj[i]; if (!q.vis) continue;
        const c = (q.x / cw) | 0, r = (q.y / cw) | 0; if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
        const idx = r * cols + c; if (zbuf[i] > rl.depth[idx]) { rl.depth[idx] = zbuf[i]; rl.lit[idx] = q.b; }
      }
      for (let pass = 0; pass < 2; pass++) {
        rl.tmpD.set(rl.depth); rl.tmpL.set(rl.lit);
        for (let r = 1; r < rows - 1; r++) for (let c = 1; c < cols - 1; c++) {
          const idx = r * cols + c; if (rl.tmpD[idx] > -9) continue;
          let best = -9, bl = 0, cnt = 0;
          for (const d of [-1, 1, -cols, cols]) if (rl.tmpD[idx + d] > -9) { cnt++; if (rl.tmpD[idx + d] > best) { best = rl.tmpD[idx + d]; bl = rl.tmpL[idx + d]; } }
          if (cnt >= 2) { rl.depth[idx] = best; rl.lit[idx] = bl; }
        }
      }
      rl.cx = rl.x0 + ox / dpr; rl.cy = rl.y0 + oy / dpr; rl.ready = true;
    }

    function loop(now) {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      const fps = Math.min(+o.fps || 60, o.view === "wall" ? 30 : 60, Q[qi].fps), gap = now - lastDraw;
      if (gap < 1000 / fps - 2) return;
      lastDraw = now;
      const a = performance.now(); frame(now); const cost = performance.now() - a;
      // 120ms가 넘는 틈은 느린 게 아니라 OS가 갱신을 줄인 것(창에 거의 가려짐·App Nap)이라 세지 않는다
      if (gap > 120) return;
      if (gap > 1000 / fps + 10 || cost > 10) { slow++; good = 0; } else { slow = Math.max(0, slow - 1); good++; }
      if (slow > 45 && qi < Q.length - 1) { qi++; slow = 0; upAfter = Math.min(upAfter * 2, 3e4); resize(); } // 내려갈 때마다 되돌리기를 더 기다려 오락가락하지 않게
      else if (good > upAfter && qi > 0) { qi--; good = 0; resize(); } // 오래 여유가 있으면 한 단계씩 되돌린다
    }
    function sync() { // 켜져 있고, 보이고, 움직임 줄이기가 아닐 때만 돈다
      if (o.enabled && !S.shown) S.appear = -Math.max(0, +o.appearDelay || 0) / Math.max(0.1, +o.appear || 1); // 꺼져 있다 켜질 때마다 다시 드러난다
      S.shown = o.enabled;
      canvas.style.display = o.enabled ? "" : "none";
      rain.set({ relief: o.enabled && o.view === "wall" ? relief : null });
      if (!o.enabled) relief.ready = false;
      const go = o.enabled && !document.hidden && !reduce.matches;
      if (go && !running) { running = true; S.last = lastDraw = performance.now(); raf = requestAnimationFrame(loop); }
      if (!go && running) { running = false; cancelAnimationFrame(raf); }
      if (o.enabled && reduce.matches) frame(performance.now()); // 멈춘 한 장면
    }
    const onMove = (e) => {
      if (tracking(performance.now())) return; // 카메라로 따라 하는 동안에는 마우스를 보지 않는다
      S.mx = e.clientX / innerWidth; S.my = e.clientY / innerHeight; S.moved = performance.now();
      const [ax, ay] = anchor(); // 얼굴이 있는 자리 기준으로 커서 쪽을 본다
      S.ty = Math.max(-0.75, Math.min(0.75, (S.mx - ax) * 1.6)); S.tp = Math.max(-0.45, Math.min(0.45, (S.my - ay) * 0.9)); // 좌우 약 43°, 위아래 약 26°
    };
    const onDown = (e) => { if (o.enabled && S.glitch > 0.6 && !e.target.closest?.("a, button, input, select, textarea, label, [contenteditable], [data-no-matrix]")) S.glitch = 0; };
    const onResize = () => { resize(); if (reduce.matches && o.enabled) frame(performance.now()); };
    addEventListener("pointermove", onMove, { passive: true }); addEventListener("pointerdown", onDown); addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", sync); reduce.addEventListener("change", sync);
    use(o.model); resize(); sync();

    return {
      set(patch) {
        const prev = { ...o }; Object.assign(o, patch);
        if (o.model !== prev.model) use(o.model);
        if (o.maxDpr !== prev.maxDpr || o.size !== prev.size || String(o.anchor) !== String(prev.anchor)) resize();
        sync();
      },
      // holoface가 읽은 얼굴 상태({ present, yaw, pitch, roll, gazeX, gazeY, blinkLeft, blinkRight, mouthOpen, smile, browRaise })를 넣는다.
      // 1.5초 동안 새 값이 없거나 얼굴이 없으면 마우스·두리번거림으로 돌아간다
      track(state) { if (state && typeof state === "object") { T.s = state; T.at = performance.now(); } },
      get tracking() { return tracking(performance.now()); },
      // 사람 얼굴 모양으로 바꾼다: { v: [[x,y,z]×468], f: 삼각형 }(MediaPipe 얼굴 점 순서, 세로 -1 턱끝 ~ 1 이마 위, x는 화면 오른쪽 +, z는 앞 +).
      // 가면과 같은 방식으로 등고선 점을 다시 만들고 빛 고리와 함께 다시 드러난다. null이면 원래 모델로 돌아간다
      useFace(src) {
        try { custom = src && Array.isArray(src.v) && src.v.length >= 468 && Array.isArray(src.f) ? maskPoints(src) : null; } catch { custom = null; }
        use(o.model);
        if (+o.appear > 0) S.appear = 0;
        return !!custom;
      },
      start() { this.set({ enabled: true }); },
      stop() { this.set({ enabled: false }); },
      get options() { return { ...o }; },
      get quality() { return Q.length - qi; },
      get levels() { return Q.length; },
      destroy() {
        o.enabled = false; sync(); rain.set({ relief: null });
        removeEventListener("pointermove", onMove); removeEventListener("pointerdown", onDown); removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", sync); reduce.removeEventListener("change", sync);
      },
    };
  }
  return { create, defaults: { ...DEFAULTS } };
})();
