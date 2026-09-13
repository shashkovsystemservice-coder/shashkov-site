"use client";

import {useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";

export default function PullDiagnostic(){
  const [mounted,setMounted]=useState(false);
  const [open,setOpen]=useState(false);
  const [drag,setDrag]=useState(0);
  const [active,setActive]=useState(false);
  const start=useRef(0);
  const moved=useRef(false);

  useEffect(()=>setMounted(true),[]);

  function begin(e:any){start.current=e.clientX;moved.current=false;setActive(true);}
  function move(e:any){if(!active)return;const value=Math.max(-132,Math.min(0,e.clientX-start.current));if(Math.abs(value)>5)moved.current=true;setDrag(value);}
  function finish(){if(!active)return;setActive(false);if(drag<-76){setOpen(true);setDrag(-106);setTimeout(()=>setDrag(0),220);}else{setDrag(0);if(!moved.current)setOpen(v=>!v);}}

  if(!mounted)return null;

  return createPortal(
    <aside className={`ra-diagnostic-assistant ${open?"is-open":""} ${active?"is-dragging":""}`} aria-label="Экспресс-диагностика">
      <div className="ra-diagnostic-pull-label">Потяни</div>
      <div className="ra-diagnostic-tether"><i style={{width:`${Math.max(26,44+Math.abs(drag))}px`}} /></div>
      <button className="ra-diagnostic-orb" type="button" aria-expanded={open} aria-label="Потянуть или открыть экспресс-диагностику" style={{transform:`translate3d(${drag}px,0,0)`}} onPointerDown={begin} onPointerMove={move} onPointerUp={finish} onPointerCancel={()=>{setActive(false);setDrag(0)}}>
        <span className="ra-diagnostic-orb-core"><b>7</b><small>мин</small></span>
        <i className="ra-pulse-one" /><i className="ra-pulse-two" />
      </button>
      <div className="ra-diagnostic-card">
        <button className="ra-diagnostic-close" type="button" aria-label="Свернуть" onClick={()=>setOpen(false)}>×</button>
        <small>Экспресс-диагностика · маркетинг</small>
        <strong>Проверьте маркетинговую логику бизнеса</strong>
        <p>15 ключевых сущностей, 6 связей и понятный результат: где система собрана, где рвётся и что исправлять первым.</p>
        <div className="ra-diagnostic-meta"><span>15 сущностей</span><span>6 связей</span><span>результат сразу</span></div>
        <a href="/art-direction-2027-lab/express-diagnostic">Начать диагностику</a>
      </div>
    </aside>,
    document.body
  );
}
