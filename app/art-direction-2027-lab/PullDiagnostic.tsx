"use client";

import {useEffect,useRef,useState} from "react";
import {createPortal} from "react-dom";

type Pos={x:number;y:number}|null;

export default function PullDiagnostic(){
  const [mounted,setMounted]=useState(false);
  const [open,setOpen]=useState(false);
  const [dismissed,setDismissed]=useState(false);
  const [dismissVisible,setDismissVisible]=useState(false);
  const [hero,setHero]=useState(true);
  const [nudge,setNudge]=useState(false);
  const [pos,setPos]=useState<Pos>(null);
  const [autoPos,setAutoPos]=useState<Pos>(null);
  const [dragging,setDragging]=useState(false);
  const nudgeTimer=useRef<number|null>(null);
  const dragRef=useRef<{id:number;startX:number;startY:number;originX:number;originY:number;moved:boolean}|null>(null);

  useEffect(()=>{
    setMounted(true);
    const dismissTimer=window.setTimeout(()=>setDismissVisible(true),20000);
    const heroLink=document.querySelector<HTMLAnchorElement>(".ra-hero-personal .ra-actions .ra-textlink");
    if(heroLink){
      heroLink.href="/art-direction-2027-lab/express-diagnostic";
      heroLink.setAttribute("aria-label","Экспресс-диагностика маркетинга — 7 минут");
    }

    const scroller=document.querySelector<HTMLElement>(".ad27");

    const pulse=()=>{
      if(!dragRef.current){setNudge(true);window.setTimeout(()=>setNudge(false),1200);}
    };
    const first=window.setTimeout(pulse,1500);
    nudgeTimer.current=window.setInterval(pulse,9000);

    const placeMobileHeroCue=()=>{
      if(window.innerWidth>760){setAutoPos(null);return;}
      const header=document.querySelector<HTMLElement>(".ra-nav-project");
      const eyebrow=document.querySelector<HTMLElement>(".ra-hero-personal .ra-eyebrow");
      const trigger=document.querySelector<HTMLElement>(".ra-stopwatch-trigger");
      if(!header||!eyebrow||!trigger)return;
      const h=header.getBoundingClientRect();
      const e=eyebrow.getBoundingClientRect();
      const t=trigger.getBoundingClientRect();
      const safeTop=h.bottom+12;
      const safeBottom=e.top-14;
      const available=Math.max(0,safeBottom-safeTop);
      const y=Math.max(safeTop,safeTop+(available-t.height)/2);
      setAutoPos({x:20,y});
    };

    const update=()=>{
      const sheet=window.innerHeight-(window.innerWidth<=900?58:64);
      const scrollTop=scroller?.scrollTop??window.scrollY;
      const onHero=scrollTop<sheet*.45;
      setHero(onHero);
      if(onHero)window.requestAnimationFrame(placeMobileHeroCue);
      else{setPos(null);setAutoPos(null);}
    };

    update();
    const settle=window.setTimeout(placeMobileHeroCue,80);
    scroller?.addEventListener("scroll",update,{passive:true});
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return()=>{
      window.clearTimeout(first);window.clearTimeout(settle);window.clearTimeout(dismissTimer);
      if(nudgeTimer.current)window.clearInterval(nudgeTimer.current);
      scroller?.removeEventListener("scroll",update);
      window.removeEventListener("scroll",update);window.removeEventListener("resize",update);
    };
  },[]);

  const beginDrag=(e:React.PointerEvent<HTMLButtonElement>)=>{
    if(open||!hero)return;
    const rect=e.currentTarget.getBoundingClientRect();
    dragRef.current={id:e.pointerId,startX:e.clientX,startY:e.clientY,originX:rect.left,originY:rect.top,moved:false};
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const moveDrag=(e:React.PointerEvent<HTMLButtonElement>)=>{
    const d=dragRef.current;if(!d||d.id!==e.pointerId||!hero)return;
    const dx=e.clientX-d.startX,dy=e.clientY-d.startY;if(Math.hypot(dx,dy)>6)d.moved=true;if(!d.moved)return;
    setDragging(true);const pad=8,rect=e.currentTarget.getBoundingClientRect();
    const vw=window.visualViewport?.width??window.innerWidth,vh=window.visualViewport?.height??window.innerHeight;
    setPos({x:Math.max(pad,Math.min(vw-rect.width-pad,d.originX+dx)),y:Math.max(pad,Math.min(vh-rect.height-pad,d.originY+dy))});
  };
  const endDrag=(e:React.PointerEvent<HTMLButtonElement>)=>{
    const d=dragRef.current;if(!d||d.id!==e.pointerId)return;const moved=d.moved;dragRef.current=null;setDragging(false);if(!moved)setOpen(true);
  };

  if(!mounted||dismissed)return null;
  const activePos=hero?(pos??autoPos):null;
  const style=activePos?({left:activePos.x,top:activePos.y,right:"auto",bottom:"auto"} as React.CSSProperties):undefined;

  return createPortal(
    <aside style={style} className={`ra-diagnostic-assistant ${open?"is-open":""} ${hero?"is-hero":"is-docked"} ${nudge&&!open&&!dragging&&hero?"is-nudge":""} ${dragging?"is-dragging":""}`} aria-label="Экспресс-диагностика">
      {dismissVisible&&hero&&<button className="ra-diagnostic-dismiss" type="button" aria-label="Убрать экспресс-диагностику" onPointerDown={e=>e.stopPropagation()} onClick={()=>setDismissed(true)}>×</button>}
      <button className="ra-stopwatch-trigger" type="button" aria-expanded={open} aria-label={hero?"Открыть экспресс-диагностику, 7 минут. Элемент можно перетащить.":"Открыть экспресс-диагностику, 7 минут."} onPointerDown={beginDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onClick={()=>{if(!hero)setOpen(true)}}>
        <span className="ra-stopwatch" aria-hidden="true"><i className="ra-stopwatch-bell ra-stopwatch-bell-left"/><i className="ra-stopwatch-bell ra-stopwatch-bell-right"/><i className="ra-stopwatch-knob"/><i className="ra-stopwatch-hand"/><b>7</b><small>мин</small></span>
        <span className="ra-stopwatch-copy"><strong>Экспресс-диагностика</strong><small>Проверить маркетинговую логику</small><em>можно двигать</em></span>
      </button>
      <div className="ra-diagnostic-card"><button className="ra-diagnostic-close" type="button" aria-label="Свернуть" onClick={()=>setOpen(false)}>×</button><div className="ra-diagnostic-card-kicker">Экспресс-диагностика · маркетинг</div><strong>Проверьте маркетинговую логику бизнеса</strong><p>15 ключевых сущностей, 6 связей и понятный результат: где система собрана, где рвётся и что исправлять первым.</p><div className="ra-diagnostic-meta"><span>15 сущностей</span><span>6 связей</span><span>7–10 минут</span></div><a href="/art-direction-2027-lab/express-diagnostic">Начать диагностику</a></div>
    </aside>,document.body
  );
}

// stopwatch-v9 internal-scroll docking fix
