// face.link 일꾼: MediaPipe Face Landmarker를 페이지와 다른 스레드에서 돌린다.
// 페이지는 카메라 프레임을 ImageBitmap으로 넘기고 결과만 받아서, 인식하는 동안에도 비와 홀로그램이 멈추지 않는다.
// 페이지의 CSP(connect-src 'self')는 일꾼에는 적용되지 않는다(일꾼의 CSP는 응답 헤더로만 정해지는데 GitHub Pages는 헤더를 못 바꾼다).
// 그래서 MediaPipe가 사용량 지표를 구글로 보내지 못하게, 번들을 불러오기 전에 사이트 밖으로 나가는 통신을 여기서 막는다
const sameOrigin = (u) => { try { return new URL(String(u), self.location.href).origin === self.location.origin; } catch { return false; } };
const realFetch = self.fetch.bind(self);
self.fetch = (input, init) => sameOrigin(input && input.url ? input.url : input)
  ? realFetch(input, init) : Promise.reject(new TypeError("face.link: 사이트 밖 통신은 막혀 있습니다"));
if (self.XMLHttpRequest) {
  const open = self.XMLHttpRequest.prototype.open;
  self.XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    if (!sameOrigin(url)) throw new TypeError("face.link: 사이트 밖 통신은 막혀 있습니다");
    return open.call(this, method, url, ...rest);
  };
}
if (self.WebSocket) self.WebSocket = function () { throw new TypeError("face.link: 사이트 밖 통신은 막혀 있습니다"); };

importScripts("face/vision_bundle.js"); // self.Vision (IIFE 판)

let landmarker = null;

self.onmessage = async (e) => {
  const d = e.data;
  if (d.type === "init") {
    for (const delegate of ["GPU", "CPU"]) {
      try {
        landmarker = await self.Vision.FaceLandmarker.createFromOptions(d.files, {
          baseOptions: { modelAssetPath: d.model, delegate }, runningMode: "VIDEO", numFaces: 1,
          outputFaceBlendshapes: true, outputFacialTransformationMatrixes: true,
        });
        // 첫 인식은 그래픽 준비로 몇 초 걸린다(재 보니 4초). 카메라를 켜기 전에 빈 그림으로 한 번 돌려 둔다
        try { const c = new OffscreenCanvas(64, 64); c.getContext("2d").fillRect(0, 0, 1, 1); landmarker.detectForVideo(c.transferToImageBitmap(), 0); } catch {}
        self.postMessage({ type: "ready", delegate });
        return;
      } catch (err) {
        if (delegate === "CPU") self.postMessage({ type: "error", message: String(err?.message ?? err) });
      }
    }
  } else if (d.type === "frame") {
    try {
      const r = landmarker.detectForVideo(d.bitmap, d.t);
      // 구조화 복제로 넘길 수 있는 평범한 값만 보낸다
      self.postMessage({
        type: "result", t: d.t,
        res: {
          faceLandmarks: r.faceLandmarks,
          faceBlendshapes: r.faceBlendshapes?.map((b) => ({ categories: b.categories.map((c) => ({ categoryName: c.categoryName, score: c.score })) })),
          facialTransformationMatrixes: r.facialTransformationMatrixes?.map((m) => ({ data: Array.from(m.data) })),
        },
      });
    } catch (err) {
      self.postMessage({ type: "result", t: d.t, res: {}, error: String(err?.message ?? err) });
    } finally {
      d.bitmap.close?.();
    }
  } else if (d.type === "close") {
    landmarker?.close();
    landmarker = null;
    self.close();
  }
};
