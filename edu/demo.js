'use strict';
// 교육 자료 데모 공용: 테마(포트폴리오와 같은 localStorage 키), 무대 맞춤, 단계 버튼.
(()=>{try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch{}})();

const Demo={
  // .fit 안의 .canvas(고정 w×h)를 부모 폭에 맞춰 축소·확대
  fit(fitEl,w,h){
    const canvas=fitEl.querySelector('.canvas');
    canvas.style.width=w+'px';canvas.style.height=h+'px';
    const apply=()=>{const s=fitEl.clientWidth/w;canvas.style.transform=`scale(${s})`;fitEl.style.height=h*s+'px';};
    new ResizeObserver(apply).observe(fitEl);apply();
  },
  // 단계 버튼과 ↑↓←→ 키. onChange(index)
  steps(nav,labels,onChange,{start=0}={}){
    let i=start;
    nav.innerHTML=labels.map((l,k)=>`<button type="button" data-k="${k}">${l}</button>`).join('');
    const set=k=>{
      i=Math.max(0,Math.min(labels.length-1,k));
      nav.querySelectorAll('button').forEach((b,k2)=>{if(k2===i)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
      onChange(i);
    };
    nav.addEventListener('click',e=>{const b=e.target.closest('button[data-k]');if(b)set(Number(b.dataset.k));});
    document.addEventListener('keydown',e=>{
      if(e.target.closest('input,textarea,select'))return;
      if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();set(i+1);}
      else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();set(i-1);}
    });
    set(i);
    return {set,get:()=>i};
  }
};
