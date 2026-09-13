"use client";

import {useEffect,useMemo,useRef,useState} from "react";
import {createPortal} from "react-dom";

const messages = [
  {id:"top",title:"Не уверены, что менять?",text:"Проверьте маркетинговую логику за 7–10 минут."},
  {id:"situations",title:"Проблема может быть не там, где кажется",text:"Диагностика покажет, где начинается разрыв."},
  {id:"work",title:"Проверьте 15 ключевых сущностей",text:"От миссии и ЦКП до оффера и доказательств."},
  {id:"approach",title:"Не набор терминов — связанная система",text:"Проверим, вытекает ли одно решение из другого."},
  {id:"case",title:"Где рвётся ваша логика?",text:"Получите проценты, слабые связи и первый шаг."},
  {id:"about",title:"Результат остаётся у вас",text:"Сохраните PDF или отправьте мне для комментария."},
  {id:"contact",title:"Можно начать без созвона",text:"7–10 минут. Результат — сразу после проверки."},
] as const;

export default function FloatingDiagnostic(){
  const [mounted,setMounted]=useState(false);
  const [active,setActive]=useState(0);
  const [open,setOpen]=useState(false);
  const [hint,setHint]=useState(true);
  const lastActive=useRef(0);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(()=>setMounted(true),[]);

  useEffect(()=>{
    if(!mounted)return;
    let ticking=false;
    const update=()=>{
      ticking=false;
      const center=window.innerHeight*.52;
      let best=0;
      let bestDistance=Infinity;
      messages.forEach((item,index)=>{
        if(item.id==="top"){
          const d=Math.abs(window.scrollY-center);
          if(d<bestDistance){bestDistance=d;best=index;}
          return;
        }
        const el=document.getElementById(item.id);
        if(!el)return;
        const r=el.getBoundingClientRect();
        const d=r.top<=center&&r.bottom>=center?0:Math.min(Math.abs(r.top-center),Math.abs(r.bottom-center));
        if(d<bestDistance){bestDistance=d;best=index;}
      });
      if(best!==lastActive.current){
        lastActive.current=best;
        setActive(best);
        setHint(true);
        if(timer.current)clearTimeout(timer.current);
        timer.current=setTimeout(()=>setHint(false),4200);
      }
    };
    const onScroll=()=>{if(ticking)return;ticking=true;requestAnimationFrame(update);};
    update();
    timer.current=setTimeout(()=>setHint(false),5200);
    window.addEventListener("scroll",onScroll,{passive:true});
    window.addEventListener("resize",onScroll);
    return()=>{window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);if(timer.current)clearTimeout(timer.current);};
  },[mounted]);

  const current=useMemo(()=>messages[active], [active]);
  if(!mounted)return null;

  return createPortal(
    <aside className={`ra-diagnostic-assistant ${open?"is-open":""} ${hint?"is-hinting":""}`} aria-label="Экспресс-диагностика">
      <button className="ra-diagnostic-orb" type="button" aria-expanded={open} aria-label="Открыть экспресс-диагностику" onClick={()=>{setOpen(v=>!v);setHint(false)}}>
        <span className="ra-diagnostic-orb-core">↗</span>
        <i aria-hidden="true"/>
      </button>
      <div className="ra-diagnostic-card">
        <button className="ra-diagnostic-close" type="button" aria-label="Свернуть" onClick={()=>setOpen(false)}>×</button>
        <small>Экспресс-диагностика · маркетинг</small>
        <strong>{current.title}</strong>
        <p>{current.text}</p>
        <div className="ra-diagnostic-meta"><span>15 сущностей</span><span>6 связей</span><span>результат сразу</span></div>
        <a href="/art-direction-2027-lab/express-diagnostic">Начать диагностику <b>→</b></a>
      </div>
      <button className="ra-diagnostic-hint" type="button" onClick={()=>{setOpen(true);setHint(false)}}>{current.title} <b>→</b></button>
    </aside>,
    document.body
  );
}
