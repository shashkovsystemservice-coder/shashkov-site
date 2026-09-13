"use client";

import {useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";

const MAX_PULL=210;
const OPEN_THRESHOLD=92;

const contextualCopy=[
  {id:"situations",label:"Проверить маркетинг"},
  {id:"work",label:"Где у вас разрыв?"},
  {id:"approach",label:"Проверить систему"},
  {id:"case",label:"Сверить с кейсами"},
  {id:"about",label:"Получить результат"},
  {id:"contact",label:"Начать диагностику"},
] as const;

export default function PullDiagnostic(){
  const [mounted,setMounted]=useState(false);
  const [open,setOpen]=useState(false);
  const [drag,setDrag]=useState(0);
  const [active,setActive]=useState(false);
  const [hero,setHero]=useState(true);
  const [intro,setIntro]=useState(true);
  const [contextLabel,setContextLabel]=useState("Диагностика");
  const start=useRef(0);
  const moved=useRef(false);
  const postHeroPeekShown=useRef(false);

  useEffect(()=>{
    setMounted(true);
    const introTimer=window.setTimeout(()=>setIntro(false),4200);
    const update=()=>{
      const onHero=window.scrollY < window.innerHeight*.72;
      setHero(onHero);
      if(!onHero&&!postHeroPeekShown.current){
        postHeroPeekShown.current=true;
        setIntro(true);
        window.setTimeout(()=>setIntro(false),1500);
      }
      if(onHero){setContextLabel("Диагностика");return;}
      const y=window.innerHeight*.48;
      let bestLabel="Проверить маркетинг";
      let bestDistance=Infinity;
      contextualCopy.forEach(item=>{
        const el=document.getElementById(item.id);
        if(!el)return;
        const r=el.getBoundingClientRect();
        const d=r.top<=y&&r.bottom>=y?0:Math.min(Math.abs(r.top-y),Math.abs(r.bottom-y));
        if(d<bestDistance){bestDistance=d;bestLabel=item.label;}
      });
      setContextLabel(bestLabel);
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return()=>{
      window.clearTimeout(introTimer);
      window.removeEventListener("scroll",update);
      window.removeEventListener("resize",update);
    };
  },[]);

  function begin(e:any){
    if(open)return;
    start.current=e.clientX;
    moved.current=false;
    setActive(true);
    setIntro(false);
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
      window.setTimeout(()=>{setOpen(true);setDrag(0)},140);
    }else{
      setDrag(0);
      if(!moved.current)setOpen(true);
    }
  }

  function close(){setOpen(false);setDrag(0);}

  if(!mounted)return null;
  const progress=Math.min(1,Math.abs(drag)/MAX_PULL);

  return createPortal(
    <aside className={`ra-diagnostic-assistant ${open?"is-open":""} ${active?"is-dragging":""} ${hero?"is-hero":"is-browsing"} ${intro&&!open?"is-intro":""}`} aria-label="Экспресс-диагностика">
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
        <span className="ra-tab-main">
          <strong>{hero?"Диагностика":contextLabel}</strong>
          <small>7 мин</small>
        </span>
        <span className="ra-tab-reveal" style={{opacity:Math.max(.18,progress)}}>
          <b>Экспресс-диагностика</b>
          <small>15 сущностей · 6 связей</small>
        </span>
      </button>

      <div className="ra-diagnostic-card">
        <button className="ra-diagnostic-close" type="button" aria-label="Свернуть" onClick={close}>×</button>
        <div className="ra-diagnostic-card-kicker">Экспресс-диагностика · маркетинг</div>
        <strong>Проверьте маркетинговую логику бизнеса</strong>
        <p>15 ключевых сущностей, 6 связей и понятный результат: где система собрана, где рвётся и что исправлять первым.</p>
        <div className="ra-diagnostic-meta"><span>15 сущностей</span><span>6 связей</span><span>7–10 минут</span></div>
        <a href="/art-direction-2027-lab/express-diagnostic">Начать диагностику</a>
      </div>
    </aside>,
    document.body
  );
}
