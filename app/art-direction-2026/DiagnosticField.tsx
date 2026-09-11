"use client";

import { useEffect, useRef } from "react";

const vertex = `
attribute vec2 a_position;
void main(){
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

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
  p = fract(p * vec2(123.34,456.21));
  p += dot(p,p+45.32);
  return fract(p.x*p.y);
}

float band(float v,float width){
  return 1.0-smoothstep(0.0,width,abs(v));
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv - .5;
  p.x *= u_resolution.x/u_resolution.y;

  vec2 pointer = u_pointer - .5;
  pointer.x *= u_resolution.x/u_resolution.y;
  vec2 baseFocus = mix(vec2(.20,.10), vec2(.46,.02), smoothstep(0.0,1.0,u_scroll));
  vec2 focus = mix(baseFocus, pointer, mix(.34,.08,u_mobile));

  float t = u_time*.09;
  float velocity = min(abs(u_velocity),1.0);
  float d = length(p-focus);
  float ang = atan(p.y-focus.y,p.x-focus.x);
  float warp = sin(ang*3.0 + t*2.2 + d*12.0)*(.03 + velocity*.035);
  float contour = band(fract((d+warp+sin(u_scroll*6.2831)*.035)*8.0)-.5,.032);

  vec2 q = p;
  q.y += sin(q.x*5.2+t)*(.036 + velocity*.05);
  q.x += sin(q.y*4.1-t*.75)*(.022 + velocity*.03);
  float flowA = band(sin(q.x*4.4 + q.y*2.25 + t + u_scroll*2.2), .052);
  float flowB = band(sin(q.x*2.0 - q.y*5.0 - t*.8), .04);

  float node = 1.0-smoothstep(.015,.031,length(p-focus));
  float halo = 1.0-smoothstep(.05,.25,d);
  float grain = (hash(gl_FragCoord.xy + u_time)-.5)*.04;

  float focusMask = 1.0-smoothstep(.12,.42,d);
  float energy = contour*.46 + flowA*.16 + flowB*.09 + node*.82 + halo*.10 + focusMask*.08;
  energy *= smoothstep(1.2,.12,length(p));

  float darkScene = step(1.5,u_scene) * (1.0-step(2.5,u_scene)) + step(4.5,u_scene)*(1.0-step(5.5,u_scene)) + step(6.5,u_scene);
  vec3 lightInk = vec3(.10,.18,.25);
  vec3 darkInk = vec3(.72,.81,.86);
  vec3 col = mix(lightInk,darkInk,clamp(darkScene,0.0,1.0));

  float mobileGain = mix(1.0,.78,u_mobile);
  float alpha = clamp(energy + grain,0.0,1.0)*.56*mobileGain;
  gl_FragColor = vec4(col,alpha);
}`;

const sectionToScene: Record<string, number> = {
  "00 · Ввод": 0,
  "01 · Ситуация": 1,
  "01 · Диагноз": 2,
  "02 · Логика": 3,
  "02 · Decision Brief": 4,
  "03 · Кейс": 5,
  "04 · Обо мне": 6,
  "05 · Следующий шаг": 7,
};

export default function DiagnosticField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const root = document.querySelector<HTMLElement>(".ad26");
    if (!canvas || !root) return;

    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "low-power" });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, vertex);
    const fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "u_resolution");
    const pointerU = gl.getUniformLocation(program, "u_pointer");
    const timeU = gl.getUniformLocation(program, "u_time");
    const scrollU = gl.getUniformLocation(program, "u_scroll");
    const sceneU = gl.getUniformLocation(program, "u_scene");
    const velocityU = gl.getUniformLocation(program, "u_velocity");
    const mobileU = gl.getUniformLocation(program, "u_mobile");

    const pointer = { x: .68, y: .38 };
    const target = { ...pointer };
    let scene = 0;
    let raf = 0;
    let lastScroll = window.scrollY;
    let velocity = 0;
    const started = performance.now();

    const resize = () => {
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        gl.viewport(0,0,width,height);
      }
    };

    const onPointer = (e: PointerEvent) => {
      if (isMobile) return;
      target.x = e.clientX / Math.max(1,window.innerWidth);
      target.y = 1 - e.clientY / Math.max(1,window.innerHeight);
    };

    const syncScene = () => { scene = sectionToScene[root.dataset.section || "00 · Ввод"] ?? 0; };
    const observer = new MutationObserver(syncScene);
    observer.observe(root,{attributes:true,attributeFilter:["data-section"]});
    syncScene();

    const render = () => {
      resize();
      pointer.x += (target.x-pointer.x)*(isMobile ? .02 : .045);
      pointer.y += (target.y-pointer.y)*(isMobile ? .02 : .045);
      const doc = document.documentElement;
      const max = Math.max(1,doc.scrollHeight-window.innerHeight);
      const scrollY = window.scrollY;
      const scroll = scrollY/max;
      const rawVelocity = (scrollY-lastScroll)/Math.max(1,window.innerHeight*.085);
      velocity += (rawVelocity-velocity)*.12;
      velocity *= .93;
      lastScroll = scrollY;

      gl.uniform2f(resolution,canvas.width,canvas.height);
      gl.uniform2f(pointerU,pointer.x,pointer.y);
      gl.uniform1f(timeU,(performance.now()-started)/1000);
      gl.uniform1f(scrollU,scroll);
      gl.uniform1f(sceneU,scene);
      gl.uniform1f(velocityU,velocity);
      gl.uniform1f(mobileU,isMobile ? 1 : 0);
      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES,0,6);
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove",onPointer,{passive:true});
    window.addEventListener("resize",resize,{passive:true});
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove",onPointer);
      window.removeEventListener("resize",resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (buffer) gl.deleteBuffer(buffer);
    };
  },[]);

  return <canvas ref={canvasRef} className="ad26-diagnostic-field" aria-hidden="true" />;
}
