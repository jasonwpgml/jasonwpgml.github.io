'use strict';
// 경사하강법 ② · W와 b 함께 조정하기
// 가격 세 점으로 MSE·기울기·갱신값을 직접 계산하고, 곡면·가격 그래프·계산식을 같은 W·b로 그린다.
(()=>{
const $=id=>document.getElementById(id);
const F=(v,n=1)=>Number(v).toLocaleString('ko-KR',{maximumFractionDigits:n});
const num=(v,n=2)=>F(v,n).replace('-','−');
const clamp=t=>Math.max(0,Math.min(1,t)),ease=t=>{t=clamp(t);return t*t*(3-2*t);};
const phase=(p,a,b)=>ease((p-a)/(b-a)),mix=(a,b,t)=>a+(b-a)*clamp(t);

/* ── 모델 ─────────────────────────────────────────────
   출시가 799달러에서 1·6·12개월 감가액을 뺀 매입가. x는 연 단위(개월 ÷ 12).
   내부 w는 연 단위 기울기라서 화면의 W(달러/개월)는 w ÷ 12다. */
const MSRP=799;
const DATA=[[1,233],[6,317],[12,388]].map(([month,lost])=>({month,x:month/12,y:MSRP-lost}));
const predict=(p,x)=>p.w*x+p.b;
const rows=p=>DATA.map(d=>{const pred=predict(p,d.x),error=pred-d.y;return {...d,pred,error,square:error*error};});
const loss=p=>rows(p).reduce((s,d)=>s+d.square,0)/DATA.length;
function step(p,rate=.5){const r=rows(p),dw=2*r.reduce((s,d)=>s+d.error*d.x,0)/r.length,db=2*r.reduce((s,d)=>s+d.error,0)/r.length;return {w:p.w-rate*dw,b:p.b-rate*db};}
const START={w:300,b:800};
const MIN=(()=>{const n=DATA.length,sx=DATA.reduce((a,d)=>a+d.x,0),sy=DATA.reduce((a,d)=>a+d.y,0),sxx=DATA.reduce((a,d)=>a+d.x*d.x,0),sxy=DATA.reduce((a,d)=>a+d.x*d.y,0);const w=(n*sxy-sx*sy)/(n*sxx-sx*sx),b=(sy-w*sx)/n;return {w,b,mse:loss({w,b})};})();
// 월 단위 W의 기울기. 내부 w=12W를 학습률 0.5로 갱신한 것과 같아지도록 W의 학습률은 1/288.
function cycleOf(p,index){
  const r=rows(p),gW=2*r.reduce((s,d)=>s+d.error*d.month,0)/r.length,gb=2*r.reduce((s,d)=>s+d.error,0)/r.length;
  return {from:{...p},to:step(p),gW,gb,separate:index===0};
}

/* ── 시간표 ─────────────────────────────────────────── */
const CUTS=[0,.39,.50,.89,1];
const stageOf=p=>p<CUTS[1]?0:p<CUTS[2]?1:p<CUTS[3]?2:3;
const durationOf=i=>i===0?16000:i<3?2400:140;
const TIMELINE=(()=>{
  const cycles=[];let p={...START},total=0;
  for(let i=0;i<80;i++){
    const c=cycleOf(p,i),duration=durationOf(i);
    cycles.push({...c,start:total,duration});total+=duration;p=c.to;
    if(Math.abs(loss(c.from)-loss(c.to))<.00001)break;
  }
  return {cycles,total};
})();
const T=TIMELINE.total;
function stateAt(c,p){
  if(c.separate===false){const t=ease(p);return {w:mix(c.from.w,c.to.w,t),b:mix(c.from.b,c.to.b,t)};}
  const w=phase(p,.39,.50),b=phase(p,.89,1);
  return {w:mix(c.from.w,c.to.w,w),b:mix(c.from.b,c.to.b,b)};
}
// 현재 시각에서 다시 계산한 상태 (되감아도 같은 결과)
const V={t:0,progress:0,cycle:null,count:0,done:false,phase:0,learn:{...START},history:[]};
function sample(time){
  const {cycles}=TIMELINE;V.t=Math.max(0,Math.min(T,time));
  const index=Math.max(0,cycles.findIndex(c=>V.t<c.start+c.duration));
  const i=V.t>=T?cycles.length-1:index,c=cycles[i];
  V.progress=clamp((V.t-c.start)/c.duration);V.cycle=c;
  V.done=V.t>=T;V.count=V.done?cycles.length:i;
  V.phase=c.separate?stageOf(V.progress):3;
  V.learn=stateAt(c,V.progress);V.history=cycles.slice(0,i+1).map(c=>({...c.from}));
}

/* ── 색 ─────────────────────────────────────────────── */
const C={ink:'var(--ink)',muted:'var(--ink-3)',w:'var(--c-w)',b:'var(--c-b)',rate:'var(--c-rate)',g:'var(--c-g)',joint:'var(--c-joint)'};
const fill=c=>`style="fill:${c}"`;

/* ── 3D 손실 곡면 (SVG 투영) ────────────────────────── */
const project=(w,b,z=0)=>{const u=w/35,v=(b-550)/300;return {x:315+(v-u)*132,y:265-(u+v)*50-z/400000*130};};
const xy=p=>p.x.toFixed(2)+','+p.y.toFixed(2);
const surfaceBase=(()=>{
  const WMIN=-35,WMAX=35,BMIN=250,BMAX=850,ZMAX=400000,value=(w,b)=>loss({w:w*12,b});
  let s=`<title>MSE(W, b) 삼차원 곡면</title><polygon class="gd-floor" points="${[project(WMIN,BMIN),project(WMAX,BMIN),project(WMAX,BMAX),project(WMIN,BMAX)].map(xy).join(' ')}"/>`;
  [-30,0,30].forEach(w=>{const a=project(w,BMIN),b=project(w,BMAX);s+=`<line class="gd-grid" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;});
  [300,550,800].forEach(v=>{const a=project(WMIN,v),b=project(WMAX,v);s+=`<line class="gd-grid" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;});
  // 이차 곡면을 24×24 칸으로 나눠 뒤쪽부터 그린다.
  const faces=[],N=24;
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){
    const w0=WMIN+i/N*(WMAX-WMIN),w1=WMIN+(i+1)/N*(WMAX-WMIN),b0=BMIN+j/N*(BMAX-BMIN),b1=BMIN+(j+1)/N*(BMAX-BMIN);
    const corners=[[w0,b0],[w1,b0],[w1,b1],[w0,b1]],mean=corners.reduce((sum,[w,b])=>sum+value(w,b),0)/4;
    faces.push({depth:i+j,mean,points:corners.map(([w,b])=>project(w,b,value(w,b)))});
  }
  faces.sort((a,b)=>b.depth-a.depth).forEach(f=>{const t=Math.min(1,Math.sqrt(f.mean/ZMAX));s+=`<polygon class="gd-face" style="--t:${t.toFixed(3)}" points="${f.points.map(xy).join(' ')}"/>`;});
  const axis=project(WMAX,BMIN);
  s+=`<line class="gd-axis" x1="${axis.x}" y1="${axis.y}" x2="${axis.x}" y2="${axis.y-130}"/>`;
  [0,200000,400000].forEach(z=>s+=`<text x="${axis.x-8}" y="${axis.y-z/ZMAX*130+5}" text-anchor="end" class="gd-axis-num">${z===0?'0':z/10000+'만'}</text>`);
  s+=`<text x="${axis.x-15}" y="${axis.y-151}" class="gd-axis-title">MSE</text>`;
  [-30,0,30].forEach(w=>{const p=project(w,BMIN);s+=`<text x="${p.x-10}" y="${p.y+24}" text-anchor="middle" class="gd-axis-num">${w}</text>`;});
  [300,550,800].forEach(b=>{const p=project(WMIN,b);s+=`<text x="${p.x+13}" y="${p.y+21}" text-anchor="middle" class="gd-axis-num">${b}</text>`;});
  s+='<text x="100" y="389" class="gd-axis-title">W (달러/개월)</text><text x="422" y="389" class="gd-axis-title">b (달러)</text>';
  const m=project(MIN.w/12,MIN.b,MIN.mse);
  s+=`<g class="gd-minimum" data-w="${MIN.w/12}" data-b="${MIN.b}" data-mse="${MIN.mse}"><circle class="gd-min-ring" cx="${m.x}" cy="${m.y}" r="12"/><circle class="gd-min-dot" cx="${m.x}" cy="${m.y}" r="3"/><path class="gd-min-lead" d="M${m.x-9},${m.y+7} l-20,18 h-82"/><text class="gd-min-label gd-halo" x="${m.x-33}" y="${m.y+44}" text-anchor="end">최솟값 ${F(MIN.mse,2)}</text></g>`;
  // 화살표 머리(색별)
  s+='<defs>'+[['joint',C.joint],['w',C.w],['b',C.b]].map(([k,c])=>`<marker id="gd-arrow-${k}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10Z" ${fill(c)}/></marker>`).join('')+'</defs>';
  return s;
})();
function surfaceOverlay(){
  const visits=[...V.history,V.learn],axisTrail=[];
  for(let i=0;i<visits.length;i++){if(i===1)axisTrail.push({w:visits[i].w,b:visits[i-1].b});axisTrail.push(visits[i]);}
  const trail=axisTrail.map(p=>({w:p.w/12,b:p.b,z:loss(p)}));
  let s='<g class="gd-moving">';
  for(let i=1;i<trail.length;i++){
    const a=trail[i-1],b=trail[i],path=[a],color=i===1?C.w:i===2?C.b:C.joint;
    for(let j=1;j<=6;j++){const t=j/6,w=a.w+(b.w-a.w)*t,bias=a.b+(b.b-a.b)*t;path.push({w,b:bias,z:loss({w:w*12,b:bias})});}
    s+=`<polyline points="${path.map(p=>xy(project(p.w,p.b,p.z))).join(' ')}" fill="none" style="stroke:${color}" stroke-width="2.7" stroke-dasharray="5 4"/>`;
  }
  // 이번 갱신 한 회의 방향을 실제 MSE 곡면 위에 표시한다.
  const c=V.cycle,begin=project(c.from.w/12,c.from.b,loss(c.from)),end=project(c.to.w/12,c.to.b,loss(c.to));
  if(Math.hypot(end.x-begin.x,end.y-begin.y)>8){
    const direct=[];for(let i=0;i<=24;i++){const t=i/24,p={w:c.from.w+(c.to.w-c.from.w)*t,b:c.from.b+(c.to.b-c.from.b)*t};direct.push(project(p.w/12,p.b,loss(p)));}
    s+=`<polyline class="gd-next-step" data-axis="both" points="${direct.map(xy).join(' ')}" fill="none" style="stroke:${C.joint}" stroke-width="3.5" marker-end="url(#gd-arrow-joint)"/>`;
    const axisPath=[];for(let i=0;i<=24;i++){const t=i/24,p=t<=.5?{w:c.from.w+(c.to.w-c.from.w)*t*2,b:c.from.b}:{w:c.to.w,b:c.from.b+(c.to.b-c.from.b)*(t-.5)*2};axisPath.push(project(p.w/12,p.b,loss(p)));}
    if(c.separate!==false)for(const [axis,color,points] of [['w',C.w,axisPath.slice(0,13)],['b',C.b,axisPath.slice(12)]]){
      const target=points.at(-1);
      s+=`<polyline class="gd-next-step" data-axis="${axis}" points="${points.map(xy).join(' ')}" fill="none" style="stroke:${color}" stroke-width="3.5" marker-end="url(#gd-arrow-${axis})"/><circle cx="${target.x}" cy="${target.y}" r="6" style="fill:var(--card);stroke:${color}" stroke-width="2.5"/>`;
    }
    // 현재 점과 너무 가까우면 '현재' 글자와 겹치므로 이름표만 숨긴다(화살표는 유지).
    const now=project(V.learn.w/12,V.learn.b,loss(V.learn));
    const pending=Math.hypot(V.learn.w-c.to.w,V.learn.b-c.to.b)>1e-7&&Math.hypot(end.x-now.x,end.y-now.y)>70;
    s+=`<text class="gd-next-label gd-halo" opacity="${pending?1:0}" x="${end.x+13}" y="${end.y-14}">${V.progress>=1?'갱신한 W·b':'다음 W·b'}</text>`;
  }
  const color=c.separate===false?C.joint:V.phase<2?C.w:C.b;
  const cur=trail.at(-1),pt=project(cur.w,cur.b,cur.z),base=project(cur.w,cur.b);
  s+=`<line x1="${pt.x}" y1="${pt.y}" x2="${base.x}" y2="${base.y}" style="stroke:${color}" stroke-dasharray="3 3" opacity=".55"/>`;
  s+=`<circle class="gd-current" data-w="${cur.w}" data-b="${cur.b}" data-mse="${cur.z}" cx="${pt.x}" cy="${pt.y}" r="7" style="fill:${color};stroke:var(--card)" stroke-width="2.5"/>`;
  s+=`<text class="gd-cur-label gd-halo" x="${pt.x+12}" y="${pt.y-19}">현재</text><text class="gd-cur-label gd-halo" x="${pt.x+12}" y="${pt.y+2}">${F(cur.z,1)}</text>`;
  return s+'</g>';
}

/* ── MSE 식 ─────────────────────────────────────────── */
function compactFormula(){
  const w=V.learn.w/12,b=V.learn.b,mse=loss(V.learn);
  const t=(x,y,v,size=25,color=C.ink,a='')=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" ${fill(color)} ${a}>${v}</text>`;
  return t(48,62,'MSE',28)+t(103,62,'=',26)+t(141,42,'1',21)+`<path d="M125,48H157" style="stroke:var(--ink-3)"/>`+t(141,74,'3',21)
   +t(193,67,'∑',44)+t(193,26,'3',15)+t(193,91,'i = 1',15)+t(230,62,'(',29)
   +`<rect x="244" y="30" width="92" height="48" rx="9" ${fill(C.w)} fill-opacity=".1"/>`+t(290,62,num(w),25,C.w,`data-mse-param="w" data-value="${w}"`)
   +t(355,62,'× Xᵢ',25)+t(405,62,'+',24)+`<rect x="427" y="30" width="104" height="48" rx="9" ${fill(C.b)} fill-opacity=".1"/>`+t(479,62,num(b),25,C.b,`data-mse-param="b" data-value="${b}"`)
   +t(568,62,'− Yᵢ',25)+t(612,62,')',29)+t(630,42,'2',18)+t(673,62,'≈',25)+t(788,62,num(mse),30,C.joint,`data-mse-param="mse" data-value="${mse}" font-weight="600"`);
}

/* ── 가격 그래프 ────────────────────────────────────── */
function priceChart(p){
  const xMax=13,f=m=>predict(p,m/12),ends=[f(0),f(xMax)];
  const lo=Math.min(0,Math.floor(Math.min(...ends)/100)*100),hi=Math.max(1200,Math.ceil(Math.max(...ends)/100)*100);
  const X=x=>65+x/xMax*470,Y=y=>250-(y-lo)/(hi-lo)*205;
  let s='<text x="65" y="22">매입가 (달러)</text>';
  s+=`<g class="gd-legend"><circle cx="372" cy="17" r="5" ${fill(C.ink)}/><text x="382" y="22">실제</text><rect x="425" y="12" width="10" height="10" style="fill:var(--card);stroke:var(--acc)" stroke-width="2.5"/><text x="441" y="22">예측</text><line x1="489" y1="10" x2="489" y2="25" style="stroke:var(--c-err)" stroke-width="2" stroke-dasharray="4 3"/><text x="497" y="22">오차</text></g>`;
  for(let i=0;i<4;i++){const y=lo+(hi-lo)*i/3;s+=`<line class="gd-gridline" x1="65" y1="${Y(y)}" x2="535" y2="${Y(y)}"/><text x="56" y="${Y(y)+6}" text-anchor="end">${F(y,0)}</text>`;}
  [1,6,12].forEach(x=>s+=`<text x="${X(x)}" y="277" text-anchor="middle">${x}</text>`);
  s+='<text x="535" y="308" text-anchor="end">출시 후 기간 (개월)</text>';
  let path='';for(let i=0;i<=100;i++){const x=i*xMax/100;path+=`${i?'L':'M'}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)} `;}
  s+=`<svg x="65" y="45" width="470" height="205" viewBox="65 45 470 205" overflow="hidden"><path d="${path}" fill="none" style="stroke:var(--acc)" stroke-width="3"/></svg>`;
  DATA.forEach(d=>{const py=f(d.month);
    s+=`<line x1="${X(d.month)}" y1="${Y(d.y)}" x2="${X(d.month)}" y2="${Y(py)}" style="stroke:var(--c-err)" stroke-width="2" stroke-dasharray="5 4"/>`;
    s+=`<circle cx="${X(d.month)}" cy="${Y(d.y)}" r="6" ${fill(C.ink)}/><text class="gd-point-label" x="${X(d.month)+10}" y="${Y(d.y)-12}">${F(d.y,0)}</text>`;
    s+=`<rect x="${X(d.month)-5}" y="${Y(py)-5}" width="10" height="10" data-pred="${py}" style="fill:var(--card);stroke:var(--acc)" stroke-width="2.5"/>`;
  });
  return s;
}

/* ── 계산식 흐름 (현재값·학습률·기울기 → 새 값) ────────── */
const txt=(x,y,s,size=26,color=C.ink,a='')=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" ${fill(color)} ${a}>${s}</text>`;
const group=(o,s)=>o<.00001?'':`<g opacity="${clamp(o)}">${s}</g>`;
const token=(x,y,s,color,width=106,extra='')=>`<g ${extra}><rect x="${x-width/2}" y="${y-(s==='fraction'?40:33)}" width="${width}" height="${s==='fraction'?66:48}" rx="10" ${fill(color)} fill-opacity=".12"/>${s==='fraction'?txt(x,y-13,'1',21,color)+`<path d="M${x-22},${y-6}H${x+22}" style="stroke:${color}"/>`+txt(x,y+15,'288',21,color):txt(x,y,s,29,color,'font-weight="650"')}</g>`;
function jointFormula(c,current){
  let s='';
  for(const [key,name,y,rate,g] of [['w','W',165,1/288,c.gW],['b','b',285,.5,c.gb]]){
    const old=key==='w'?c.from.w/12:c.from.b,next=key==='w'?c.to.w/12:c.to.b,color=C[key];
    s+=`<g data-joint-formula="${key}" data-old="${old}" data-gradient="${g}" data-next="${next}"><rect x="10" y="${y-60}" width="680" height="110" rx="12" ${fill(color)} fill-opacity=".08"/>`;
    s+=txt(58,y-33,name,26,color,'font-weight="700"')+txt(58,y,'새 값',16,C.muted);
    for(const [x,label,value] of [[174,'조정 전',old],[330,'학습률',rate],[455,'MSE 기울기',g],[620,'새 값',next]]){
      s+=txt(x,y-39,label,16,C.muted)+txt(x,y,x===330&&key==='w'?'1/288':num(value),22,color,'font-weight="650"');
    }
    s+=txt(105,y,'=',22,C.muted)+txt(254,y,'−',24,C.muted)+txt(383,y,'×',23,C.muted)+txt(544,y,'=',22,C.muted);
    s+=txt(350,y+31,'현재 '+name+' = '+num(current[key]),18,color)+'</g>';
  }
  return s;
}
function predictionFormula(current){
  let s='<g data-prediction-formula="true">';
  for(const [key,x,width,label,value,color] of [['price',80,148,'예측가격','Y',C.joint],['w',265,116,'W',current.w,C.w],['months',430,142,'사용기간','X',C.ink],['b',615,120,'b',current.b,C.b]]){
    s+=`<rect x="${x-width/2}" y="10" width="${width}" height="84" rx="10" ${fill(color)} fill-opacity=".09"/>`+txt(x,35,label,18,color)+txt(x,74,typeof value==='number'?num(value):value,27,color,`font-weight="650" data-prediction-term="${key}" data-value="${value}"`);
  }
  return s+txt(185,66,'=',26,C.muted)+txt(350,66,'×',27,C.muted)+txt(525,66,'+',27,C.muted)+'</g>';
}
function flow(c,p,current,{fast=false,completed=false}={}){
  if(c.separate===false)return predictionFormula(current)+jointFormula(c,current);
  // 계산 사이에 축별 이동을 넣는다. 두 기울기는 같은 갱신 전 값으로 계산한다.
  const moving=stageOf(p)%2===1,axis=stageOf(p)===1?'W':'b';
  p=p<.50?Math.min(p,.39):.40+Math.min((p-.50)/.39,1)*.37;
  const from={w:c.from.w/12,b:c.from.b},to={w:c.to.w/12,b:c.to.b};
  const returns={w:phase(p,.33,.39),b:phase(p,.70,.77)};
  let s=predictionFormula(current);
  if(fast||completed)return s;
  if(moving)return s+txt(350,170,axis+'축 방향으로 이동',27,C[axis.toLowerCase()],'font-weight="650"');
  const isB=p>=.40,start=isB?.42:0,span=isB?.28:.33,local=(p-start)/span;
  const key=isB?'b':'w',name=isB?'b':'W',color=C[key],old=from[key],rate=isB?.5:1/288,g=isB?c.gb:c.gW,next=to[key],dest=isB?615:265;
  const show=isB?phase(p,.40,.42)*(1-phase(p,.76,.80)):1-phase(p,.39,.40);
  const oldIn=phase(local,0,.20),rateIn=phase(local,.15,.38),gradIn=phase(local,.23,.47),product=phase(local,.57,.77),answer=phase(local,.78,.96);
  const back=returns[key];
  let f=txt(70,168,'새 '+name,26,color,'font-weight="650"')+txt(156,168,'≈',25,C.muted)+txt(311,168,'−',28,C.muted);
  if(answer>0)f=group(1-answer,txt(70,168,'새 '+name,26,color,'font-weight="650"'))+txt(156,168,'≈',25,C.muted)+txt(311,168,'−',28,C.muted);
  const items=[{id:'old',x:240,sourceX:dest,sourceY:74,label:'현재 '+name,value:num(old),color,width:104,t:oldIn},{id:'rate',x:386,sourceX:350,sourceY:269,label:'학습률',value:isB?'0.5':'fraction',color:C.rate,width:86,t:rateIn},{id:'gradient',x:575,sourceX:570,sourceY:269,label:'MSE 기울기',value:num(g),color:C.g,width:170,t:gradIn}];
  for(const it of items){
    const factor=it.id!=='old',vanish=factor?1-phase(product,0,.4):1;
    f+=group((1-it.t)*vanish,txt(it.x,168,it.label,it.id==='gradient'?23:24,it.color));
    const x=factor?mix(mix(it.sourceX,it.x,it.t),485,product):mix(it.sourceX,it.x,it.t),y=mix(it.sourceY,168,it.t);
    // 현재값은 위 카드에서 출발한다.
    const alpha=it.id==='old'?Math.min(1,it.t*7):1;
    f+=group(vanish*alpha,token(x,y,it.value,it.color,it.width,`data-flow-token="${key}-${it.id}" data-number="${it.id==='old'?old:it.id==='rate'?rate:g}"`));
    if(factor)f+=group((1-it.t)*vanish,txt(it.sourceX,310,it.label,18,C.muted));
    f+=group(it.t*vanish,txt(it.x,123,it.label,17,C.muted));
  }
  f+=group(1-phase(product,0,.4),txt(452,168,'×',25,C.muted));
  f+=group(phase(product,.45,.8),token(485,168,num(rate*g),C.rate,160,`data-product="${rate*g}"`)+txt(485,123,'학습률 × 기울기',17,C.muted));
  // 결과는 식 왼쪽에서 위의 W/b 카드 자리로 돌아간다.
  if(answer>0&&back<1){const x=mix(70,dest,back),y=mix(168,74,back)-30*Math.sin(Math.PI*back);f+=group(answer,token(x,y,num(next),color,118,`data-flow-result="${key}" data-number="${next}"`));}
  return s+group(show,f);
}

/* ── 화면 갱신 ──────────────────────────────────────── */
const el={gd:$('gd'),surface:$('gd-surface'),compact:$('gd-compact'),price:$('gd-price'),flow:$('gd-flow'),range:$('gd-range'),marks:$('gd-marks'),status:$('gd-status'),play:$('play'),steps:$('steps'),fit:$('fit')};
const LABELS=['W 계산','W 이동','b 계산','b 이동','2회','3회','빠른 수렴','완료'];
// 각 단계의 시작 시각. W·b 계산은 결과가 식 왼쪽에 나온 순간(5.28초, 13.06초)까지 보여 주고 다음 단계에서 카드로 돌려보낸다.
const MARKS=[0,6240,8000,14240,16000,18400,20800,T];
const STARTS=[0,5280,8000,13060,16000,18400,20800,T];
el.range.max=T;
el.marks.innerHTML=MARKS.map((t,k)=>`<i style="left:${t/T*100}%" data-time="${t}"><span>${LABELS[k]}</span></i>`).join('');
const stepAt=t=>{for(let k=STARTS.length-1;k>=0;k--)if(t>=STARTS[k])return k;return 0;};

function draw(){
  const c=V.cycle,cur={w:V.learn.w/12,b:V.learn.b};
  el.surface.innerHTML=surfaceBase+surfaceOverlay();
  el.compact.innerHTML=compactFormula();
  el.price.innerHTML=priceChart(V.learn);
  el.flow.innerHTML=flow(c,V.progress,cur,{fast:!c.separate,completed:V.progress>=1});
  el.range.value=V.t;
  el.range.setAttribute('aria-valuetext',(V.t/1000).toFixed(1)+'초 / '+(T/1000).toFixed(1)+'초');
  el.status.textContent=(V.t/1000).toFixed(1)+' / '+(T/1000).toFixed(1)+'초'+(V.done?' · 수렴 완료':' · '+(V.count+1)+'회차');
  el.gd.dataset.t=V.t;el.gd.dataset.cycle=V.count;el.gd.dataset.phase=V.phase;
}
const markOn=on=>el.marks.querySelectorAll('i').forEach((m,k)=>m.classList.toggle('on',k===on));
const seek=t=>{sample(t);draw();};

/* ── 재생 ───────────────────────────────────────────── */
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let raf=0,timer=0,running=false,follow=false,quiet=false,stepper=null;
function setPlaying(on){running=on;el.play.textContent=on?'정지':'재생';el.play.setAttribute('aria-pressed',String(on));}
function stop(){cancelAnimationFrame(raf);raf=0;clearInterval(timer);timer=0;setPlaying(false);}
function mark(k){quiet=true;stepper.set(k);quiet=false;}
// until까지 시간을 흘린다. follow면 지나는 단계 버튼을 따라 표시한다.
function runTo(until,{track=false}={}){
  stop();follow=track;setPlaying(true);let last=performance.now();
  const frame=now=>{
    const next=Math.min(until,V.t+Math.max(0,now-last));last=now;seek(next);
    if(follow&&stepper.get()!==stepAt(next))mark(stepAt(next));
    if(next>=until){raf=0;setPlaying(false);return;}
    raf=requestAnimationFrame(frame);
  };
  raf=requestAnimationFrame(frame);
}
// 단계 k: 그 단계의 움직임을 재생하고 끝에서 멈춘다. 움직임 줄이기 설정이면 결과만 보여 준다.
function showStep(k){
  markOn(k);
  if(quiet)return;
  stop();
  const end=k<STARTS.length-1?STARTS[k+1]:T;
  if(k===STARTS.length-1||reduced.matches){seek(end);return;}
  seek(STARTS[k]);runTo(end);
}
function togglePlay(){
  if(running){stop();return;}
  if(reduced.matches){
    // 애니메이션 없이 단계 결과를 차례로 넘긴다.
    const last=LABELS.length-1,show=k=>{mark(k);seek(k<last?STARTS[k+1]:T);};
    if(stepper.get()>=last)show(0);
    setPlaying(true);
    timer=setInterval(()=>{const k=stepper.get()+1;show(k);if(k>=last)stop();},1600);
    return;
  }
  if(V.t>=T)seek(0);
  mark(stepAt(V.t));runTo(T,{track:true});
}
el.play.addEventListener('click',togglePlay);
el.range.addEventListener('input',()=>{stop();seek(Number(el.range.value));mark(stepAt(V.t));});

/* ── 배치: 넓은 화면은 가로 1280×656, 좁은 화면은 세로 720×1440 ── */
const narrow=matchMedia('(max-width: 720px)');
function layout(){
  const tall=narrow.matches;
  el.gd.classList.toggle('tall',tall);
  // Demo.fit은 요소마다 한 번만 부르므로, 배치가 바뀌면 같은 내용을 새 .fit에 옮겨 다시 맞춘다.
  const fresh=el.fit.cloneNode(false);
  fresh.appendChild(el.fit.firstElementChild);
  el.fit.replaceWith(fresh);el.fit=fresh;
  Demo.fit(fresh,tall?720:1280,tall?1440:656);
}
layout();
narrow.addEventListener('change',layout);

sample(0);draw();
stepper=Demo.steps(el.steps,LABELS,showStep,{start:0});
reduced.addEventListener('change',()=>{if(reduced.matches&&running){stop();seek(STARTS[Math.min(stepper.get()+1,STARTS.length-1)]);}});

// 확인용: 화면이 쓰는 값
window.GradientDemo=Object.freeze({data:DATA,loss,rows,cycleOf,minimum:MIN,timeline:TIMELINE,seek,state:()=>({...V,learn:{...V.learn}})});
})();
