'use strict';
// 인공신경망(뉴런 → 노드)과 심층신경망(사진 → RGB → 신경망 → 출력) 도식.
// 좌표·RGB 값·재생 순서는 고정값이고, 색은 demo.css 토큰을 따른다.
const Neural=(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const pulse=(d,delay=0)=>`<path class="n-wire" d="${d}"/><path class="n-current" pathLength="100" d="${d}" style="--d:${delay}s"/>`;
 const cell=(x,y,r=18,delay=0)=>`<circle class="n-cell" cx="${x}" cy="${y}" r="${r}"/><circle class="n-flash" cx="${x}" cy="${y}" r="${r}" style="--d:${delay}s"/>`;
 const neuron=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path class="bio-branches" d="M-14 0L-46-22L-75-18M-46-22L-52-48M-42-21L-28-44M-15 6L-49 24L-78 18M-49 24L-59 49M-15-8L-16-39M-12 14L-10 43"/><path class="bio-body" d="M-20 0Q-24-20-8-17Q8-28 18-11L33 0L16 13Q3 29-11 15Q-27 17-20 0"/><circle class="bio-core" r="8"/></g>`;

 // ── 18 · 뉴런에서 노드로 ──
 const singleNeuron=()=>`<svg viewBox="0 0 560 190">${pulse('M30 43L85 55L145 90',0)}${pulse('M30 144L85 125L145 90',.2)}${pulse('M166 90C240 77 320 103 394 90L470 45',.85)}${pulse('M394 90L478 139',.9)}${neuron(160,90,.9)}${[245,290,335].map(x=>`<rect class="bio-sheath" x="${x}" y="79" width="30" height="23" rx="11"/>`).join('')}<g class="n-label"><text x="58" y="180">입력</text><text x="162" y="180">세포체</text><text x="298" y="180">축삭</text><text x="473" y="180">신호 전달</text></g></svg>`;
 const singleNode=()=>`<svg viewBox="0 0 560 190">${[40,90,140].map((y,i)=>pulse(`M80 ${y}L280 90`,i*.12)).join('')}${pulse('M310 90H485',.9)}${[40,90,140].map(y=>cell(75,y,10)).join('')}${cell(285,90,40,.7)}<text class="n-calc" x="285" y="97">계산</text>${cell(490,90,10,1.5)}<g class="n-label"><text x="75" y="180">여러 입력</text><text x="285" y="180">노드 하나</text><text x="490" y="180">출력</text></g></svg>`;
 const bioNet=()=>{const n=[[80,48],[80,138],[260,40],[260,138],[460,91]];return `<svg viewBox="0 0 560 190">${[[0,2],[0,3],[1,2],[1,3],[2,4],[3,4]].map(([a,b])=>pulse(`M${n[a][0]+18} ${n[a][1]}C${n[a][0]+100} ${n[a][1]} ${n[b][0]-90} ${n[b][1]} ${n[b][0]-10} ${n[b][1]}`,a<2?0:.9)).join('')}${n.map(([x,y])=>neuron(x,y,.55)).join('')}</svg>`;};
 const artNet=()=>{const L=[[65,[50,95,140]],[230,[35,75,115,155]],[390,[50,95,140]],[510,[70,120]]];return `<svg viewBox="0 0 560 190">${L.slice(0,-1).map(([x,ys],l)=>ys.map(y=>L[l+1][1].map(ny=>pulse(`M${x} ${y}L${L[l+1][0]} ${ny}`,l*.6)).join('')).join('')).join('')}${L.map(([x,ys],l)=>ys.map(y=>cell(x,y,13,l*.6)).join('')).join('')}</svg>`;};
 const inset=(m,y,h)=>m.replace('<svg ',`<svg x="8" y="${y}" width="544" height="${h}" `);
 function zoom(bio){
  const x=bio?261:231,y=bio?306:340,r=bio?29:23;
  return `<svg class="zoom" viewBox="0 0 560 470" role="img" aria-label="${bio?'아래 신경망에서 고른 뉴런 하나를 위에 확대':'아래 인공신경망에서 고른 노드 하나를 위에 확대'}"><g data-part="one"><rect class="zoom-frame" x="5" y="5" width="550" height="205" rx="14"/><text class="zoom-label" x="24" y="32">${bio?'뉴런 하나':'노드 하나'} · 확대</text>${inset(bio?singleNeuron():singleNode(),40,165)}</g><path class="zoom-leaders" d="M180 210L${x-r} ${y-r}M380 210L${x+r} ${y-r}"/><g data-part="many">${inset(bio?bioNet():artNet(),267,185)}<circle class="zoom-focus" cx="${x}" cy="${y}" r="${r}"/><text class="net-label" x="280" y="465">${bio?'뉴런의 집합':'여러 층으로 연결된 노드들'}</text></g></svg>`;
 }
 function mountNeuron(root){
  root.innerHTML=`<div class="pairs" data-focus="all"><section class="well"><h2>생물학적 신경망</h2>${zoom(true)}</section><div class="bridge" aria-label="생물학적 구조에서 착안">→<small>구조에 착안</small></div><section class="well"><h2>인공신경망</h2>${zoom(false)}</section></div><p class="principle">뉴런은 입력이 쌓여 분계점에 닿으면 활성화되어 신호를 전달합니다. 인공신경망은 이 구조를 빌려 <b>노드</b>를 층으로 쌓습니다.</p><p class="footnote">생물학적 구조에서 착안한 개념도 · 인공신경망의 빛은 계산값이 전달되는 흐름을 표현</p>`;
  const pairs=root.querySelector('.pairs');
  return {focus(step){
   const key=['all','one','many'][step];pairs.dataset.focus=key;
   pairs.querySelectorAll('[data-part]').forEach(g=>g.classList.toggle('is-focus',g.dataset.part===key));
  }};
 }

 // ── 19 · 사진 → RGB → 심층신경망 → 출력 ──
 // 사진별 가운데 정사각형을 4×4 영역 평균으로 줄인 RGB 값.
 const samples=[
  {pixels:[[93,119,148],[138,112,79],[142,142,139],[100,118,141],[69,71,73],[160,139,107],[143,114,80],[123,107,81],[120,117,107],[93,82,66],[102,80,53],[197,164,115],[157,119,29],[92,69,16],[138,124,93],[197,173,133]],src:'img/dog.jpg',alt:'골든 리트리버 얼굴 사진',label:'개',output:0,active:[[0,24],[1,3],[0,2]]},
  {pixels:[[192,188,184],[168,162,159],[176,172,169],[187,182,177],[177,171,166],[167,166,167],[142,142,146],[168,166,164],[155,151,150],[156,159,170],[140,139,137],[163,162,159],[135,133,134],[160,164,176],[148,150,156],[157,156,154]],src:'img/cat.jpg',alt:'고양이 사진',label:'고양이',output:1,active:[[12,36],[0,2],[1,3]]},
  {pixels:[[217,218,222],[217,218,223],[221,220,223],[221,220,220],[165,166,170],[175,174,175],[164,160,159],[156,137,118],[157,150,144],[164,157,151],[159,155,151],[176,169,162],[208,208,212],[222,222,225],[224,224,228],[229,229,229]],src:'img/cat-2.jpg',alt:'다른 고양이 사진',label:'고양이',output:1,active:[[0,36],[1,2],[0,3]]}
 ];
 const ch=[['R','var(--ch-r)','빨강'],['G','var(--ch-g)','초록'],['B','var(--ch-b)','파랑']];
 const layers=[[250,[45,125,205,285,365]],[445,[75,155,235,315]],[625,[145,265]]];
 function deepNet(){
  const P=[Array.from({length:48},(_,i)=>[38+Math.floor(i/16)*28,32+i%16*23]),...layers.map(([x,ys])=>ys.map(y=>[x,y]))];
  const wires=P.slice(0,-1).map((pts,l)=>pts.map(([x,y],a)=>P[l+1].map(([nx,ny],b)=>`<g class="d-edge" data-layer="${l}" data-from="${a}" data-to="${b}"><path class="d-wire" d="M${x} ${y}L${nx} ${ny}"/><path class="d-cur" pathLength="100" d="M${x} ${y}L${nx} ${ny}"/></g>`).join('')).join('')).join('');
  const nodes=P.map((pts,l)=>pts.map(([x,y],i)=>l===0?`<circle class="in-node" data-in="${i}" cx="${x}" cy="${y}" r="5" style="--cc:${ch[Math.floor(i/16)][1]}"/>`:`<circle class="d-node" data-layer="${l}" data-node="${i}" cx="${x}" cy="${y}" r="17"/>`).join('')).join('');
  return `<svg viewBox="0 0 690 455" role="img" aria-label="RGB 입력값 48개가 은닉층을 거쳐 개 또는 고양이 출력으로 이어진다">${wires}${nodes}${ch.map(([n,c],k)=>`<text class="in-label" x="${38+k*28}" y="12" style="fill:${c}">${n}</text>`).join('')}<g class="layer-label"><text x="62" y="430">입력값 48개</text><text x="347" y="430">은닉층</text><text x="625" y="430">출력층</text></g><g class="hidden-hit" data-hidden-info role="button" tabindex="0" aria-label="은닉층 설명 열기"><rect x="212" y="18" width="270" height="426" rx="18"/><circle cx="397" cy="423" r="12"/><text x="397" y="428">?</text></g></svg>`;
 }
 const conn=side=>`<svg class="conn conn-${side}" viewBox="0 0 80 80" aria-hidden="true"><path d="M5 40H70M56 26L70 40L56 54"/><path class="cur" pathLength="100" d="M5 40H70"/></svg>`;
 const infoHTML=`<div class="hi-in"><div class="hi-head"><div><p>딥러닝 더 알아보기</p><h2 id="hi-title">은닉층과 블랙박스</h2></div><button type="button" class="ctl" data-close>닫기 ×</button></div>
  <section><h3><b>1</b>은닉층은 어떻게 만들어질까</h3><p>입력층 → <strong>은닉층</strong> → 출력층. 은닉층은 입력받은 정보를 분석하고 처리합니다.</p><dl class="hi-split"><div><dt>사람이 정함</dt><dd>은닉층 개수 · 뉴런 개수 · 연결 방식</dd></div><div><dt>학습으로 정해짐</dt><dd>각 뉴런이 어떤 정보를 학습할지</dd></div></dl></section>
  <section><h3><b>2</b>왜 이해하기 어려울까</h3><p>학습하면서 뉴런 사이의 연결 강도인 <strong>가중치</strong>를 스스로 조정합니다. 고양이 사진이라면 귀 모양에 반응하는 뉴런, 털의 특징에 반응하는 뉴런이 생기고 여러 뉴런이 함께 판단합니다.</p><p>가중치 숫자는 볼 수 있지만 각 뉴런이 무엇을 학습했는지는 완전히 알기 어렵습니다. 그래서 <strong>블랙박스(Black Box)</strong>라고 부릅니다.</p></section>
  <section><h3><b>3</b>해석할 수는 없을까</h3><p><strong>AI 해석가능성(Interpretability)</strong> 연구가 진행 중입니다. 일부 뉴런의 역할은 밝혀냈지만 복잡한 모델의 내부 작동 원리는 아직 다 이해하지 못했습니다.</p></section>
  <p class="hi-sum"><span>핵심</span>계산 방법은 알지만, 그 계산이 어떤 의미인지 모두 설명할 수는 없음</p></div>`;

 function mountDnn(root){
  const px=samples[0].pixels;
  root.innerHTML=`<div class="flow" data-focus="all" data-phase="input">
   <section class="well" data-part="input"><h2>입력 데이터</h2><div class="photo">${samples.map((s,i)=>`<img src="${s.src}" alt="${s.alt}" class="${i?'':'is-current'}" aria-hidden="${i!==0}">`).join('')}</div><p class="photo-cap"><span>사진</span><b>1 / ${samples.length}</b></p><div class="pixels" role="img" aria-label="지금 사진을 4×4 픽셀로 줄인 모습">${px.map((p,i)=>`<i data-px="${i}" style="background:rgb(${p.join(',')})"></i>`).join('')}</div><p class="pixels-cap">4 × 4 픽셀로 줄인 예</p></section>
   ${conn('input')}
   <section class="well" data-part="input"><h2>RGB 데이터</h2><div class="rgb-stack">${ch.map(([n,c,ko],k)=>`<section class="plane" data-ch="${k}" style="--cc:${c};--k:${k}"><h3>${n}<small>${ko}</small></h3><div class="grid4">${px.map((p,i)=>`<span data-ri="${k*16+i}">${p[k]}</span>`).join('')}</div></section>`).join('')}</div><p class="rgb-count">4 × 4 × 3 = <b>48개 값</b></p><p class="readout"><small></small><strong></strong></p></section>
   <div class="transfer">${conn('rgb')}<span class="packet"></span></div>
   <section class="well model" data-part="model"><h2>심층신경망</h2>${deepNet()}<p class="status"></p></section>
   ${conn('output')}
   <section class="well" data-part="output"><h2>출력 데이터</h2><div class="results"><div data-class="0"><i></i><span>개</span></div><div data-class="1"><i></i><span>고양이</span></div></div><p class="pred"><small>예측 결과</small><strong>—</strong></p></section>
  </div>
  <p class="footnote">색의 세기 0~255를 0~1로 바꿔 입력 · 한 사진의 값을 한꺼번에 쓰며, 하나씩 들어가는 것은 설명용 연출 · 출력은 미리 정한 예시</p>`;
  const flow=root.querySelector('.flow');
  let timer=0,sample=0,phase=0,cursor=0,playing=!reduced.matches,onPlay=()=>{};
  const $$=s=>flow.querySelectorAll(s);
  function paint(){
   const cur=samples[sample],active=[...cur.active,[cur.output]],feeding=phase===1,prog=phase===0?-1:feeding?cursor:47;
   const k=Math.floor(Math.max(0,prog)/16),p=Math.max(0,prog)%16,val=cur.pixels[p][k],norm=(val/255).toFixed(3),net=Math.max(0,phase-1);
   flow.dataset.phase=phase===0?'input':feeding?'rgb':phase===5?'output':'layer';
   flow.style.setProperty('--c',ch[k][1]);
   if(flow.dataset.sample!==String(sample)){
    $$('[data-ri]').forEach(el=>{const i=+el.dataset.ri;el.textContent=cur.pixels[i%16][Math.floor(i/16)];});
    $$('[data-px]').forEach(el=>el.style.background=`rgb(${cur.pixels[+el.dataset.px].join(',')})`);
    $$('.photo img').forEach((img,i)=>{img.classList.toggle('is-current',i===sample);img.setAttribute('aria-hidden',String(i!==sample));});
    flow.querySelector('.photo-cap b').textContent=`${sample+1} / ${samples.length}`;
    flow.dataset.sample=sample;
   }
   $$('[data-px]').forEach(el=>el.classList.toggle('is-current',feeding&&+el.dataset.px===p));
   $$('[data-ch]').forEach(el=>el.classList.toggle('is-current',+el.dataset.ch===k));
   $$('[data-ri]').forEach(el=>el.classList.toggle('is-current',feeding&&+el.dataset.ri===prog));
   $$('[data-in]').forEach(el=>{const i=+el.dataset.in;el.classList.toggle('is-filled',i<=prog);el.classList.toggle('is-current',feeding&&i===prog);});
   flow.querySelector('.readout small').textContent=phase===0?'색의 세기를 숫자로':`${Math.floor(p/4)+1}행 ${p%4+1}열 · ${ch[k][0]}`;
   flow.querySelector('.readout strong').textContent=phase===0?'0~255 → 0~1':`${val} ÷ 255 = ${norm}`;
   const pk=flow.querySelector('.packet');pk.textContent=feeding?norm:'';
   if(feeding&&!reduced.matches)pk.animate([{opacity:0,transform:'translateX(-10px)'},{opacity:1,offset:.3},{opacity:0,transform:'translateX(16px)'}],{duration:100,fill:'both'});
   $$('.d-edge').forEach(e=>{const l=+e.dataset.layer,on=active[l].includes(+e.dataset.from)&&active[l+1].includes(+e.dataset.to);e.classList.toggle('is-active',on&&net>l);e.classList.toggle('is-flowing',on&&net===l+1);});
   $$('.d-node').forEach(n=>n.classList.toggle('is-active',net>+n.dataset.layer&&active[+n.dataset.layer].includes(+n.dataset.node)));
   $$('[data-class]').forEach(r=>r.classList.toggle('is-selected',phase===5&&+r.dataset.class===cur.output));
   flow.querySelector('.pred strong').textContent=phase===5?cur.label:'—';
   flow.querySelector('.status').textContent=['사진을 입력',`입력값 ${cursor+1} / 48`,'첫 번째 은닉층에서 계산','다음 은닉층에서 계산','출력층으로 신호 전달',`${cur.label}(으)로 분류`][phase];
  }
  function advance(){
   if(phase===1&&cursor<47)cursor++;
   else if(phase===5){phase=0;cursor=0;sample=(sample+1)%samples.length;}
   else phase++;
   paint();
  }
  function tick(){
   clearTimeout(timer);if(!playing)return;
   const delay=phase===1?(cursor%16===0?650:100):[750,0,450,450,450,1500][phase];
   timer=setTimeout(()=>{advance();tick();},delay);
  }
  const setPlaying=v=>{playing=v;onPlay(v);tick();};
  document.addEventListener('visibilitychange',()=>{clearTimeout(timer);if(!document.hidden)tick();});

  // 은닉층 설명
  const dlg=document.createElement('dialog');dlg.className='hidden-info';dlg.setAttribute('aria-labelledby','hi-title');dlg.innerHTML=infoHTML;document.body.append(dlg);
  dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('[data-close]'))dlg.close();});
  dlg.addEventListener('keydown',e=>{if(e.key!=='Tab'&&e.key!=='Escape')e.stopPropagation();});
  const hit=flow.querySelector('[data-hidden-info]');
  hit.addEventListener('click',()=>dlg.showModal());
  hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();dlg.showModal();}});

  if(reduced.matches)phase=5;
  paint();tick();
  return {
   focus(step){
    const key=['all','input','model','output'][step];flow.dataset.focus=key;
    $$('[data-part]').forEach(s=>s.classList.toggle('is-focus',s.dataset.part===key));
   },
   toggle(){setPlaying(!playing);},
   next(){setPlaying(false);advance();},
   onPlay(fn){onPlay=fn;fn(playing);}
  };
 }
 return {mountNeuron,mountDnn};
})();
