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

float hash(vec2 p){
  p = fract(p * vec2(123.34,456.21));
  p += dot(p,p+45.32);
  return fract(p.x*p.y);
}

float line(float v,float width){
  return 1.0-smoothstep(0.0,width,abs(v));
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv - .5;
  p.x *= u_resolution.x/u_resolution.y;

  vec2 pointer = u_pointer - .5;
  pointer.x *= u_resolution.x/u_resolution.y;
  vec2 focus = mix(vec2(.28,.08), pointer, .46);

  float t = u_time*.08;
  float scrollWave = sin(u_scroll*6.2831)*.04;

  float d = length(p-focus);
  float ang = atan(p.y-focus.y,p.x-focus.x);
  float warp = sin(ang*3.0 + t*2.0 + d*11.0)*.035;
  float contour = line(fract((d+warp+scrollWave)*8.0)-.5,.035);

  vec2 q = p;
  q.y += sin(q.x*5.0+t)*.045;
  q.x += sin(q.y*4.0-t*.7)*.025;
  float flowA = line(sin(q.x*4.2 + q.y*2.3 + t + u_scroll*2.0), .055);
  float flowB = line(sin(q.x*2.1 - q.y*5.1 - t*.8), .045);

  float node = 1.0-smoothstep(.018,.03,length(p-focus));
  float halo = 1.0-smoothstep(.04,.23,d);
  float grain = (hash(gl_FragCoord.xy + u_time)-.5)*.055;

  float energy = contour*.42 + flowA*.14 + flowB*.08 + node*.75 + halo*.08;
  energy *= smoothstep(1.15,.15,length(p));

  float darkScene = step(1.5,u_scene) * (1.0-step(2.5,u_scene)) + step(4.5,u_scene)*(1.0-step(5.5,u_scene)) + step(6.5,u_scene);
  vec3 lightInk = vec3(.16,.23,.30);
  vec3 darkInk = vec3(.67,.76,.82);
  vec3 col = mix(lightInk,darkInk,clamp(darkScene,0.0,1.0));

  float alpha = clamp(energy + grain,0.0,1.0)*.42;
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
    if (window.matchMedia("(max-width: 900px)").matches) return;

    const canvas = canvasRef.current;
    const root = document.querySelector<HTMLElement>(".ad26");
    if (!canvas || !root) return;

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

    const pointer = { x: .68, y: .38 };
    const target = { ...pointer };
    let scene = 0;
    let raf = 0;
    const started = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
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
      target.x = e.clientX / Math.max(1,window.innerWidth);
      target.y = 1 - e.clientY / Math.max(1,window.innerHeight);
    };

    const syncScene = () => { scene = sectionToScene[root.dataset.section || "00 · Ввод"] ?? 0; };
    const observer = new MutationObserver(syncScene);
    observer.observe(root,{attributes:true,attributeFilter:["data-section"]});
    syncScene();

    const render = () => {
      resize();
      pointer.x += (target.x-pointer.x)*.045;
      pointer.y += (target.y-pointer.y)*.045;
      const doc = document.documentElement;
      const max = Math.max(1,doc.scrollHeight-window.innerHeight);
      const scroll = window.scrollY/max;

      gl.uniform2f(resolution,canvas.width,canvas.height);
      gl.uniform2f(pointerU,pointer.x,pointer.y);
      gl.uniform1f(timeU,(performance.now()-started)/1000);
      gl.uniform1f(scrollU,scroll);
      gl.uniform1f(sceneU,scene);
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
