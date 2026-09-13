"use client";

import {useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";

const MAX_PULL=220;
const OPEN_THRESHOLD=104;

export default function PullDiagnostic(){
  const [mounted,setMounted]=useState(false);
  const [open,setOpen]=useState(false);
  const [drag,setDrag]=useState(0);
  const [active,setActive]=useState(false);
  const [hero,setHero]=useState(true);
  const [demo,setDemo]=useState(false);
  const start=useRef(0);
  const moved=useRef(false);
  const demoShown=useRef(false);

  useEffect(()=>{
    setMounted(true);
    const update=()=>{
      const onHero=window.scrollY < window.innerHeight*.72;
      setHero(onHero);
      if(!onHero&&!demoShown.current){
        demoShown.current=true;
        setDemo(true);
        window.setTimeout(()=>setDemo(false),1800);
      }
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update);};
  },[]);

  function begin(e:any){
    if(open)return;
    start.current=e.clientX;
    moved.current=false;
    setActive(true);
    setDemo(false);
    e.currentTarget?.setPointerCapture?.(e.pointerId);
  }

  function move(e:any){
    if(!active||open)return;
    const value=Math.max(-MAX_PULL,Math.min(0,e.clientX-start.current));
    if(Math.abs(value)>5)moved.current=true;
    setDrag(value);
  }

  function finish(e?:any){
    if(!active||open)return;
    setActive(false);
    e?.currentTarget?.releasePointerCapture?.(e.pointerId);
    if(Math.abs(drag)>=OPEN_THRESHOLD){
      setDrag(-MAX_PULL);
      window.setTimeout(()=>{setOpen(true);setDrag(0)},150);
    }else{
      setDrag(0);
      if(!moved.current)setOpen(true);
    }
  }

  function close(){setOpen(false);setDrag(0);}

  if(!mounted)return null;
  const progress=Math.min(1,Math.abs(drag)/MAX_PULL);

  return createPortal(
    <aside className={`ra-diagnostic-assistant ${open?"is-open":""} ${active?"is-dragging":""} ${hero?"is-hero":"is-browsing"} ${demo&&!open?"is-demo":""}`} aria-label="Экспресс-диагностика">
      <button
        className="ra-diagnostic-tab"
        type="button"
        aria-expanded={open}
        aria-label="Открыть экспресс-диагностику"
        style={{transform:`translate3d(${drag}px,0,0)`}}
        onPointerDown={begin}
        onPointerMove={move}
        onPointerUp={finish}
        onPointerCancel={()=>{setActive(false);setDrag(0)}}
      >
        <span className="ra-tab-copy">
          <strong>{hero?"7":"Диагностика"}</strong>
          <small>{hero?"мин":"7 мин"}</small>
        </span>
        <span className="ra-tab-preview" style={{opacity:Math.max(hero?.1:.36,progress)}}>
          <b>Экспресс-диагностика</b>
          <small>15 сущностей · 6 связей</small>
        </span>
        <i className="ra-tab-glow" aria-hidden="true"/>
      </button>

      <div className="ra-diagnostic-card">
        <button className="ra-diagnostic-close" type="button" aria-label="Свернуть" onClick={close}>×</button>
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
