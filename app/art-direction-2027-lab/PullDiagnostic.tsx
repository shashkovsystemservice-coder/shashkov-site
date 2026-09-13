"use client";

import {useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";

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
  const [hero,setHero]=useState(true);
  const [contextLabel,setContextLabel]=useState("Экспресс-диагностика");
  const [nudge,setNudge]=useState(false);
  const nudgeTimer=useRef<number|null>(null);

  useEffect(()=>{
    setMounted(true);
    const heroLink=document.querySelector<HTMLAnchorElement>(".ra-hero-personal .ra-actions .ra-textlink");
    if(heroLink){
      heroLink.href="/art-direction-2027-lab/express-diagnostic";
      heroLink.setAttribute("aria-label","Экспресс-диагностика маркетинга — 7 минут");
    }

    const pulse=()=>{
      setNudge(true);
      window.setTimeout(()=>setNudge(false),1200);
    };
    const first=window.setTimeout(pulse,1500);
    nudgeTimer.current=window.setInterval(pulse,9000);

    const update=()=>{
      const onHero=window.scrollY < window.innerHeight*.72;
      setHero(onHero);
      if(onHero){
        setContextLabel("Экспресс-диагностика");
        return;
      }
      const y=window.innerHeight*.5;
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
      window.clearTimeout(first);
      if(nudgeTimer.current)window.clearInterval(nudgeTimer.current);
      window.removeEventListener("scroll",update);
      window.removeEventListener("resize",update);
    };
  },[]);

  if(!mounted)return null;

  return createPortal(
    <aside className={`ra-diagnostic-assistant ${open?"is-open":""} ${hero?"is-hero":"is-browsing"} ${nudge&&!open?"is-nudge":""}`} aria-label="Экспресс-диагностика">
      <button className="ra-stopwatch-trigger" type="button" aria-expanded={open} aria-label="Открыть экспресс-диагностику, 7 минут" onClick={()=>setOpen(true)}>
        <span className="ra-stopwatch" aria-hidden="true">
          <i className="ra-stopwatch-knob" />
          <i className="ra-stopwatch-hand" />
          <b>7</b>
          <small>мин</small>
        </span>
        <span className="ra-stopwatch-copy">
          <strong>{contextLabel}</strong>
          <small>{hero?"Проверить маркетинговую логику":"7 минут · результат сразу"}</small>
        </span>
      </button>

      <div className="ra-diagnostic-card">
        <button className="ra-diagnostic-close" type="button" aria-label="Свернуть" onClick={()=>setOpen(false)}>×</button>
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
