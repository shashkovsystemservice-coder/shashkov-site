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
uniform float u_velocity;
uniform float u_mobile;

float hash(vec2 p){
  p=fract(p*vec2(123.34,456.21));
  p+=dot(p,p+45.32);
  return fract(p.x*p.y);
}
float band(float v,float w){return 1.0-smoothstep(0.0,w,abs(v));}
float ring(vec2 p,vec2 c,float r,float w){return band(length(p-c)-r,w);}
float dotf(vec2 p,vec2 c,float r){return 1.0-smoothstep(r,r*1.55,length(p-c));}
float lineSeg(vec2 p,vec2 a,vec2 b,float w){
  vec2 pa=p-a,ba=b-a;
  float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);
  return 1.0-smoothstep(w,w*1.8,length(pa-ba*h));
}

void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution.xy;
  vec2 p=uv-.5;
  p.x*=u_resolution.x/u_resolution.y;

  vec2 pointer=u_pointer-.5;
  pointer.x*=u_resolution.x/u_resolution.y;
  vec2 baseFocus=mix(vec2(.20,.10),vec2(.46,.02),smoothstep(0.0,1.0,u_scroll));
  vec2 focus=mix(baseFocus,pointer,mix(.34,.08,u_mobile));

  float t=u_time*.09;
  float vel=min(abs(u_velocity),1.0);
  float d=length(p-focus);
  float ang=atan(p.y-focus.y,p.x-focus.x);
  float warp=sin(ang*3.0+t*2.2+d*12.0)*(.028+vel*.038);

  float hero = ring(p,focus,.12+warp,.018)
             + ring(p,focus,.23+warp,.012)*.62
             + ring(p,focus,.36+warp,.009)*.30
             + dotf(p,focus,.020)*1.1;

  vec2 s1=vec2(-.42,.24),s2=vec2(-.18,-.18),s3=vec2(.16,.16),s4=vec2(.40,-.16);
  float situations = dotf(p,s1,.018)+dotf(p,s2,.018)+dotf(p,s3,.018)+dotf(p,s4,.018)
                   + lineSeg(p,s1,focus,.008)*.42+lineSeg(p,s2,focus,.008)*.42
                   + lineSeg(p,s3,focus,.008)*.42+lineSeg(p,s4,focus,.008)*.42;

  float converge = lineSeg(p,vec2(-.58,.28),vec2(.00,.02),.009)
                 + lineSeg(p,vec2(-.55,.02),vec2(.00,.02),.009)
                 + lineSeg(p,vec2(-.52,-.25),vec2(.00,.02),.009)
                 + lineSeg(p,vec2(.00,.02),vec2(.58,.02),.012)*1.35
                 + dotf(p,vec2(.00,.02),.026)*1.2;

  float x1=band(p.x+.32,.012),x2=band(p.x,.012),x3=band(p.x-.32,.012);
  float method=(x1+x2+x3)*.34
             + dotf(p,vec2(-.32,.18),.019)+dotf(p,vec2(.0,.0),.019)+dotf(p,vec2(.32,-.18),.019)
             + lineSeg(p,vec2(-.32,.18),vec2(.0,.0),.009)*.7
             + lineSeg(p,vec2(.0,.0),vec2(.32,-.18),.009)*.7;

  vec2 gp=(p+vec2(.8))/vec2(.12,.10);
  float grid=(band(fract(gp.x)-.5,.035)+band(fract(gp.y)-.5,.035))*.18;
  float scan=band(p.y-sin(t+u_scroll*7.0)*.18,.016)*.60;
  float brief=grid+scan+dotf(p,vec2(.30,.12),.024)+ring(p,vec2(.30,.12),.16,.010)*.48;

  vec2 cA=vec2(-.48,.24),cB=vec2(-.05,.03),cC=vec2(.46,-.19);
  float caseField=lineSeg(p,cA,cB,.012)+lineSeg(p,cB,cC,.012)
                 +dotf(p,cA,.022)+dotf(p,cB,.026)*1.25+dotf(p,cC,.022)
                 +ring(p,cB,.16+sin(t)*.01,.010)*.55;

  float aboutField=ring(p,vec2(.18,.02),.34,.006)*.28+dotf(p,vec2(.18,.02),.014)*.35;
  float cta=lineSeg(p,vec2(-.56,.0),vec2(.40,.0),.012)+dotf(p,vec2(.40,.0),.032)*1.4+ring(p,vec2(.40,.0),.18,.010)*.55;

  float s=u_scene;
  float field=hero;
  field=mix(field,situations,smoothstep(.35,1.0,s));
  field=mix(field,converge,smoothstep(1.35,2.0,s));
  field=mix(field,method,smoothstep(2.35,3.0,s));
  field=mix(field,brief,smoothstep(3.35,4.0,s));
  field=mix(field,caseField,smoothstep(4.35,5.0,s));
  field=mix(field,aboutField,smoothstep(5.35,6.0,s));
  field=mix(field,cta,smoothstep(6.35,7.0,s));

  vec2 q=p;
  q.y+=sin(q.x*5.2+t)*(.028+vel*.055);
  q.x+=sin(q.y*4.1-t*.75)*(.018+vel*.035);
  float velocityTrace=band(sin(q.x*4.1+q.y*2.1+t+u_scroll*2.2),.050)*vel*.42;
  float grain=(hash(gl_FragCoord.xy+u_time)-.5)*.032;
  field += velocityTrace;
  field *= smoothstep(1.20,.10,length(p));

  float darkScene = smoothstep(1.35,1.85,s)*(1.0-smoothstep(2.15,2.65,s))
                  + smoothstep(4.35,4.85,s)*(1.0-smoothstep(5.15,5.65,s))
                  + smoothstep(6.35,6.85,s);
  vec3 lightInk=vec3(.08,.17,.24);
  vec3 darkInk=vec3(.74,.83,.88);
  vec3 col=mix(lightInk,darkInk,clamp(darkScene,0.0,1.0));

  float gain=mix(.62,.48,u_mobile);
  float alpha=clamp(field+grain,0.0,1.0)*gain;
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
    const resolution=U("u_resolution"),pointerU=U("u_pointer"),timeU=U("u_time"),scrollU=U("u_scroll"),sceneU=U("u_scene"),velocityU=U("u_velocity"),mobileU=U("u_mobile");
    const pointer={x:.68,y:.38},target={...pointer};
    let scene=0,targetScene=0,raf=0,lastScroll=window.scrollY,velocity=0;
    const started=performance.now();
    const resize=()=>{const dpr=isMobile?1:Math.min(window.devicePixelRatio||1,1.5);const w=Math.floor(window.innerWidth*dpr),h=Math.floor(window.innerHeight*dpr);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;canvas.style.width=`${window.innerWidth}px`;canvas.style.height=`${window.innerHeight}px`;gl.viewport(0,0,w,h);}};
    const onPointer=(e:PointerEvent)=>{if(isMobile)return;target.x=e.clientX/Math.max(1,window.innerWidth);target.y=1-e.clientY/Math.max(1,window.innerHeight);};
    const syncScene=()=>{targetScene=sectionToScene[root.dataset.section||"00 · Ввод"]??0;};
    const observer=new MutationObserver(syncScene);observer.observe(root,{attributes:true,attributeFilter:["data-section"]});syncScene();
    const render=()=>{
      resize();
      pointer.x+=(target.x-pointer.x)*(isMobile?.02:.045);
      pointer.y+=(target.y-pointer.y)*(isMobile?.02:.045);
      scene+=(targetScene-scene)*(isMobile?.045:.06);
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
      gl.uniform1f(velocityU,velocity);
      gl.uniform1f(mobileU,isMobile?1:0);
      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES,0,6);
      raf=requestAnimationFrame(render);
    };
    window.addEventListener("pointermove",onPointer,{passive:true});window.addEventListener("resize",resize,{passive:true});raf=requestAnimationFrame(render);
    return()=>{cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener("pointermove",onPointer);window.removeEventListener("resize",resize);gl.deleteProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(buffer)gl.deleteBuffer(buffer);};
  },[]);
  return <canvas ref={canvasRef} className="ad26-diagnostic-field" aria-hidden="true"/>;
}
