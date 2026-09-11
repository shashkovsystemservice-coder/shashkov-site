"use client";

import { useEffect, useRef } from "react";

const vertex = `
attribute vec2 a_position;
void main(){ gl_Position = vec4(a_position,0.0,1.0); }
`;

const fragment = `
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_scroll;
uniform float u_scene;
uniform float u_diag;
uniform float u_velocity;
uniform float u_mobile;

float hash(vec2 p){
  p=fract(p*vec2(123.34,456.21));
  p+=dot(p,p+45.32);
  return fract(p.x*p.y);
}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);
  f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);
}
float fbm(vec2 p){
  float v=0.0,a=.5;
  mat2 m=mat2(1.62,1.17,-1.17,1.62);
  for(int i=0;i<4;i++){v+=a*noise(p);p=m*p+0.13;a*=.48;}
  return v;
}
float ridge(float v,float w){return 1.0-smoothstep(w,w*2.2,abs(v));}

void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution.xy;
  vec2 p=uv-.5;
  p.x*=u_resolution.x/u_resolution.y;

  float t=u_time*.10;
  float vel=min(abs(u_velocity),1.0);
  vec2 pointer=u_pointer-.5;
  pointer.x*=u_resolution.x/u_resolution.y;

  float sceneNorm=clamp(u_scene/7.0,0.0,1.0);
  vec2 drift=vec2(sin(t*.7+sceneNorm*2.4),cos(t*.53-sceneNorm*1.7))*.055;
  vec2 q=p+drift;

  float n1=fbm(q*2.15+vec2(t*.22,-t*.14));
  float n2=fbm((q+vec2(n1*.22,-n1*.18))*3.25-vec2(t*.12,t*.16));
  float texture=ridge(n2-.52,.105);

  /* Optical instability: the medium is misregistered, then settles during diagnosis. */
  vec2 center=vec2(0.0,0.015);
  float dc=length(p-center);
  float focusMask=1.0-smoothstep(.16,.58,dc);
  float settle=mix(1.0,.18,u_diag*focusMask);
  float waveA=sin((p.x*4.2+p.y*1.7+n1*.85+t)*3.14159);
  float waveB=sin((p.y*5.1-p.x*1.15+n2*.72-t*.72)*3.14159);
  float interference=ridge(waveA*.62+waveB*.38,.20)*settle;

  float directional=ridge(sin((p.x*.78+p.y*.22+n1*.20+t*.12)*9.0),.22);
  float flow=mix(texture*.48+directional*.18,interference*.54+texture*.26,u_diag);

  /* Hero responds to pointer as a soft refractive pressure, never a literal node. */
  float pointerField=1.0-smoothstep(.08,.52,length(p-pointer));
  flow+=pointerField*(1.0-u_mobile)*.12;

  /* Later scenes change material character, not diagram topology. */
  float methodPhase=smoothstep(2.35,3.05,u_scene)*(1.0-smoothstep(3.35,4.0,u_scene));
  float briefPhase=smoothstep(3.35,4.05,u_scene)*(1.0-smoothstep(4.35,5.0,u_scene));
  float casePhase=smoothstep(4.35,5.05,u_scene)*(1.0-smoothstep(5.35,6.0,u_scene));
  float quietPhase=smoothstep(5.35,6.15,u_scene);

  float lamina=ridge(sin((p.y+n1*.075+t*.08)*22.0),.28)*.18;
  float scan=ridge(p.y-(sin(t*.9+u_scroll*8.0)*.12),.035)*.18;
  flow=mix(flow,flow*.62+lamina,methodPhase*.62);
  flow=mix(flow,flow*.46+scan,briefPhase*.52);
  flow=mix(flow,flow*.74+ridge(sin((p.x-p.y*.38+n2*.08)*11.0+t*.16),.25)*.14,casePhase*.55);
  flow*=mix(1.0,.52,quietPhase);

  /* Scroll velocity adds a fleeting shear, not particles. */
  float shear=ridge(sin((p.x*3.8+p.y*2.1+t+u_scroll*2.0+n1*.3)*4.4),.22)*vel*.16;
  flow+=shear;

  float grain=(hash(gl_FragCoord.xy+u_time)-.5)*.022;
  float vignette=smoothstep(1.18,.12,length(p));
  flow=(flow+grain)*vignette;

  float darkScene = smoothstep(1.35,1.85,u_scene)*(1.0-smoothstep(2.15,2.65,u_scene))
                  + smoothstep(4.35,4.85,u_scene)*(1.0-smoothstep(5.15,5.65,u_scene))
                  + smoothstep(6.35,6.85,u_scene);
  vec3 lightInk=vec3(.11,.19,.27);
  vec3 darkInk=vec3(.72,.80,.90);
  vec3 clarityInk=vec3(.50,.61,.98);
  vec3 col=mix(lightInk,darkInk,clamp(darkScene,0.0,1.0));
  float diagScene=smoothstep(1.50,1.88,u_scene)*(1.0-smoothstep(2.10,2.45,u_scene));
  col=mix(col,clarityInk,diagScene*(.10+.26*u_diag));

  float gain=mix(.46,.38,u_mobile);
  float alpha=clamp(flow,0.0,1.0)*gain;
  gl_FragColor=vec4(col,alpha);
}`;

const sectionToScene: Record<string, number> = {
  "00 · Ввод":0,"01 · Ситуация":1,"01 · Диагноз":2,"02 · Логика":3,
  "02 · Decision Brief":4,"03 · Кейс":5,"04 · Обо мне":6,"05 · Следующий шаг":7,
};

export default function DiagnosticField(){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    if(typeof window==="undefined") return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas=canvasRef.current;
    const root=document.querySelector<HTMLElement>(".ad26");
    const diagnosis=document.querySelector<HTMLElement>(".ad26-statement");
    if(!canvas||!root) return;
    const isMobile=window.matchMedia("(max-width: 900px)").matches;
    const gl=canvas.getContext("webgl",{alpha:true,antialias:false,powerPreference:"low-power"});
    if(!gl) return;
    const compile=(type:number,source:string)=>{const sh=gl.createShader(type);if(!sh)return null;gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS)){gl.deleteShader(sh);return null;}return sh;};
    const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);if(!vs||!fs)return;
    const program=gl.createProgram();if(!program)return;gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const position=gl.getAttribLocation(program,"a_position");gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    const U=(name:string)=>gl.getUniformLocation(program,name);
    const resolution=U("u_resolution"),pointerU=U("u_pointer"),timeU=U("u_time"),scrollU=U("u_scroll"),sceneU=U("u_scene"),diagU=U("u_diag"),velocityU=U("u_velocity"),mobileU=U("u_mobile");
    const pointer={x:.68,y:.38},target={...pointer};
    let scene=0,targetScene=0,raf=0,lastScroll=window.scrollY,velocity=0;
    let active=!document.hidden;
    const started=performance.now();
    const resize=()=>{const dpr=isMobile?1:Math.min(window.devicePixelRatio||1,1.5);const w=Math.floor(window.innerWidth*dpr),h=Math.floor(window.innerHeight*dpr);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;canvas.style.width=`${window.innerWidth}px`;canvas.style.height=`${window.innerHeight}px`;gl.viewport(0,0,w,h);}};
    const onPointer=(e:PointerEvent)=>{if(isMobile)return;target.x=e.clientX/Math.max(1,window.innerWidth);target.y=1-e.clientY/Math.max(1,window.innerHeight);};
    const syncScene=()=>{targetScene=sectionToScene[root.dataset.section||"00 · Ввод"]??0;};
    const observer=new MutationObserver(syncScene);observer.observe(root,{attributes:true,attributeFilter:["data-section"]});syncScene();
    const onVisibility=()=>{active=!document.hidden;};
    const diagnosisProgress=()=>{
      if(!diagnosis) return 0;
      const rect=diagnosis.getBoundingClientRect();
      const span=Math.max(1,rect.height-window.innerHeight);
      return Math.max(0,Math.min(1,-rect.top/span));
    };
    const render=()=>{
      if(!active){raf=requestAnimationFrame(render);return;}
      resize();
      pointer.x+=(target.x-pointer.x)*(isMobile ? .02 : .045);
      pointer.y+=(target.y-pointer.y)*(isMobile ? .02 : .045);
      scene+=(targetScene-scene)*(isMobile ? .045 : .06);
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      const sy=window.scrollY,scroll=sy/max;
      const rv=(sy-lastScroll)/Math.max(1,window.innerHeight*.085);
      velocity+=(rv-velocity)*.12;
      velocity*=.93;
      lastScroll=sy;
      gl.uniform2f(resolution,canvas.width,canvas.height);
      gl.uniform2f(pointerU,pointer.x,pointer.y);
      gl.uniform1f(timeU,(performance.now()-started)/1000);
      gl.uniform1f(scrollU,scroll);
      gl.uniform1f(sceneU,scene);
      gl.uniform1f(diagU,diagnosisProgress());
      gl.uniform1f(velocityU,velocity);
      gl.uniform1f(mobileU,isMobile?1:0);
      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES,0,6);
      raf=requestAnimationFrame(render);
    };
    window.addEventListener("pointermove",onPointer,{passive:true});
    window.addEventListener("resize",resize,{passive:true});
    document.addEventListener("visibilitychange",onVisibility);
    raf=requestAnimationFrame(render);
    return()=>{cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener("pointermove",onPointer);window.removeEventListener("resize",resize);document.removeEventListener("visibilitychange",onVisibility);gl.deleteProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(buffer)gl.deleteBuffer(buffer);};
  },[]);
  return <canvas ref={canvasRef} className="ad26-diagnostic-field" aria-hidden="true"/>;
}
