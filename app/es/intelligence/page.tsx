import type { Metadata } from "next";
import Link from "next/link";
import ResearchConceptForm from "../research/ResearchConceptForm";

export const metadata: Metadata = {
  title: "Business & Competitive Intelligence — investigación empresarial",
  description: "Estudios de empresas, competidores, compradores, proveedores y socios para decisiones comerciales.",
};

export default function IntelligencePage() {
  return (
    <main className="rp">
      <style>{`
        .rp{--n:#112038;--i:#15233b;--m:#53637a;--l:#dce5ef;--a:#1758b5;background:#f7f9fc;color:var(--i);font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.55}
        .rp *{box-sizing:border-box}.rp a{text-decoration:none}.rp .wrap{width:min(1160px,calc(100% - 48px));margin:auto}.rp .nav{display:flex;justify-content:space-between;align-items:center;gap:18px;padding:25px 0}.rp .nav a{color:inherit;font-size:14px}.rp .nav .brand{font-weight:800;letter-spacing:-.02em}.rp .nav .back{border-bottom:1px solid #97a9bc}.rp .hero{background:var(--n);color:white;padding:85px 0 93px}.rp .kicker{text-transform:uppercase;font-size:12px;font-weight:800;letter-spacing:.15em;color:#86b9f5;margin-bottom:20px}.rp h1{font-size:clamp(43px,6vw,78px);line-height:1.02;letter-spacing:-.055em;max-width:950px;margin:0 0 27px}.rp .lead{font-size:clamp(18px,2.2vw,24px);max-width:820px;color:#d6e1ef}.rp .hero-note{color:#a9c2da;font-size:15px;max-width:850px;margin-top:25px}.rp .cta{display:inline-block;background:#d6e9ff;color:#122d52;padding:14px 20px;font-weight:800;margin-top:24px;border-radius:3px}.rp section.content{padding:83px 0;border-bottom:1px solid var(--l)}.rp h2{font-size:clamp(32px,3.6vw,49px);letter-spacing:-.04em;line-height:1.12;margin:0 0 24px;max-width:850px}.rp p{margin:0 0 16px}.rp .intro{max-width:850px;color:var(--m);font-size:19px}.rp .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.rp .step,.rp .app,.rp .case{padding:27px;background:white;border:1px solid var(--l)}.rp .step small,.rp .app small{color:var(--a);font-weight:800;font-size:13px}.rp h3{font-size:23px;line-height:1.2;letter-spacing:-.025em;margin:14px 0}.rp .step p,.rp .app p,.rp .case p{font-size:16px;color:var(--m)}.rp .apps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}.rp .app{min-height:282px}.rp .app strong{font-size:13px;color:var(--a)}.rp .evidence{background:#eaf0f7}.rp .cases{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:30px}.rp .case .tag{font-size:11px;letter-spacing:.11em;text-transform:uppercase;font-weight:800;color:var(--a)}.rp .case h3{font-size:25px}.rp .case ul{padding-left:20px;color:var(--m);font-size:15px}.rp .phase{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:28px}.rp .phase>div{border-top:2px solid var(--i);padding-top:18px}.rp .pilot{background:var(--n);color:white}.rp .pilot p{max-width:830px;color:#d1dded}.rp .pilot h2{color:#fff}.rp .pilot .cta{margin-top:15px}.rp footer{padding:32px 0;color:var(--m);font-size:13px}.rp footer a{color:var(--a)}
        @media(max-width:750px){.rp .hero{padding:60px 0 70px}.rp section.content{padding:60px 0}.rp .steps,.rp .apps,.rp .cases,.rp .phase{grid-template-columns:1fr}.rp .app{min-height:0}.rp .nav{flex-wrap:wrap}}

        .rp .rp-invite{background:#fff3cf;border-top:1px solid #e9cb73;border-bottom:1px solid #e9cb73;color:#352b11}
        .rp .rp-invite-inner{display:flex;align-items:center;gap:15px;flex-wrap:wrap;padding:14px 0}
        .rp .rp-invite-label{font-size:11px;letter-spacing:.06em;color:#8b6205;font-weight:800}
        .rp .rp-invite strong{font-size:15px;flex:1;min-width:220px}
        .rp .rp-invite a{font-size:14px;font-weight:800;color:#725000;text-decoration:underline;text-underline-offset:3px;white-space:normal}
        @media(max-width:750px){.rp .rp-invite-inner{gap:6px;padding:13px 0;align-items:flex-start;flex-direction:column}.rp .rp-invite strong{min-width:0;font-size:15px}}
 
.rp .rp-example-steps{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:30px}
.rp .rp-example-item{padding:25px;border:1px solid #dce5ef;background:#fff}
.rp .rp-example-primary{border:2px solid #1758b5;background:#eef5ff}
.rp .rp-example-item small{color:#1758b5;font-weight:800;font-size:12px}
.rp .rp-example-item h3{margin:10px 0}.rp .rp-example-item p{font-size:16px;color:#53637a}
.rp .rp-details{border:1px solid #dce5ef;background:#fff;padding:24px}
.rp .rp-details summary{font-weight:800;font-size:22px;cursor:pointer;line-height:1.3}
.rp .rp-details .apps{margin-top:20px}
@media(max-width:750px){.rp .rp-example-steps{grid-template-columns:1fr}.rp .rp-details{padding:18px}}

.rp .rp-hero-new{background:radial-gradient(ellipse at 82% 24%,#213e66 0%,#112038 53%);overflow:hidden}
.rp .rp-hero-layout{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(340px,.85fr);align-items:center;gap:56px}
.rp .rp-hero-new h1{font-size:clamp(42px,5.2vw,67px);line-height:1.04;max-width:750px}
.rp .rp-hero-new .lead{font-size:clamp(18px,2vw,22px)}
.rp .rp-hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:18px;margin-top:25px}
.rp .rp-hero-actions .cta{margin-top:0}.rp .rp-ghost-cta{color:#e4efff;font-size:15px;font-weight:700;border-bottom:1px solid #7797bd}
.rp .rp-hero-visual{background:#f8faff;color:#15233b;border:1px solid #6482ab;box-shadow:0 30px 85px rgba(0,0,0,.3);padding:23px;border-radius:15px;transform:rotate(1deg)}
.rp .rp-visual-head{display:flex;justify-content:space-between;gap:10px;font-size:10px;letter-spacing:.08em;font-weight:800;color:#64748b}
.rp .rp-visual-title{font-size:19px;font-weight:800;margin:20px 0 15px;letter-spacing:-.02em}
.rp .rp-visual-core,.rp .rp-visual-grid>div,.rp .rp-visual-final{display:flex;flex-direction:column;gap:5px;border:1px solid #dce5ef;padding:17px 18px;border-radius:7px;background:#fff}
.rp .rp-visual-core{border-left:5px solid #1758b5;background:#edf4ff}.rp .rp-visual-core strong{font-size:20px}
.rp .rp-visual-core span{font-size:12px;color:#53637a}
.rp .rp-visual-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0}
.rp .rp-visual-head span:last-child{color:#26856b}
.rp .rp-hero-visual small{font-size:11px;color:#1758b5;font-weight:800;letter-spacing:.04em}
.rp .rp-visual-final{background:#f1f5f9}
.rp .rp-visual-evidence{margin-top:13px;border:1px solid #e3bd52;background:#fff5d9;border-radius:7px;padding:12px 15px;display:flex;flex-direction:column;gap:4px}
.rp .rp-visual-evidence span{font-size:11px;letter-spacing:.06em;font-weight:800;color:#8c640b}
.rp .rp-visual-evidence small{color:#70551d;font-weight:500;letter-spacing:0}
.rp .rp-invite{position:relative}.rp .rp-invite a{border-radius:5px;background:#8b6205;color:white!important;padding:10px 14px;text-decoration:none!important}
.rp .rp-example-item{border-radius:9px;transition:transform .2s,box-shadow .2s}.rp .rp-example-item:hover{transform:translateY(-3px);box-shadow:0 12px 25px rgba(17,32,56,.07)}
.rp .rp-status{border-radius:9px}.rp section.content:nth-of-type(even){background-color:#f7f9fc}
@media(max-width:950px){.rp .rp-hero-layout{grid-template-columns:1fr}.rp .rp-hero-visual{transform:none;max-width:640px}.rp .rp-hero-new h1{max-width:850px}}
@media(max-width:550px){.rp .rp-hero-layout{gap:33px}.rp .rp-hero-visual{padding:15px}.rp .rp-hero-actions{align-items:flex-start;flex-direction:column}.rp .rp-visual-grid{gap:6px}.rp .rp-visual-grid>div{padding:12px}.rp .rp-invite a{margin-top:7px}}
      
.rp .rp-hero-new{padding:96px 0 110px;background:radial-gradient(circle at 80% 25%,#244572,#0a1830 63%)}.rp .rp-hero-new h1{letter-spacing:-.065em}
.rp .rp-hero-visual{border-radius:18px;border:1px solid #97b6e2;box-shadow:0 33px 80px rgba(0,0,0,.35);background:#f8fbff}
.rp .rp-hero-actions .cta{background:#d8f6ad;border-radius:7px;color:#19352a;box-shadow:0 8px 24px rgba(0,0,0,.14)}
.rp .rp-value-section{padding:88px 0;background:#fff}.rp .rp-section-intro{max-width:820px}
.rp .rp-section-intro .kicker{color:#245bd5}.rp .rp-section-intro h2{font-size:clamp(35px,4.5vw,57px);letter-spacing:-.055em}
.rp .rp-section-intro>p:last-child{font-size:19px;max-width:730px;color:#52637a}
.rp .rp-value-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px;margin-top:37px}
.rp .rp-value-grid article{border-radius:12px;border:1px solid #dfe8f5;background:#f7faff;padding:30px;min-height:205px}
.rp .rp-value-grid small{color:#245bd5;font-weight:800;font-size:13px}
.rp .rp-value-grid h3{font-size:25px;margin:15px 0 11px}.rp .rp-value-grid p{font-size:16px;color:#53637a}
.rp .rp-pilot-feature{background:#edf4ff;border-top:1px solid #dbe6f7;padding:85px 0}
.rp .rp-pilot-layout{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center}
.rp .rp-pilot-feature .kicker{color:#245bd5}.rp .rp-pilot-feature h2{font-size:clamp(32px,3.7vw,49px);letter-spacing:-.05em}
.rp .rp-pilot-feature p{font-size:18px;color:#53637a;max-width:620px}
.rp .rp-pilot-button{display:inline-block;background:#245bd5;color:white;text-decoration:none;padding:15px 22px;border-radius:7px;font-weight:800;margin-top:17px}
.rp .rp-pilot-card{background:white;border:1px solid #d9e4f3;border-radius:15px;padding:30px;box-shadow:0 23px 48px rgba(17,32,56,.08)}
.rp .rp-pilot-card>small{font-size:12px;letter-spacing:.09em;font-weight:800;color:#245bd5}
.rp .rp-pilot-card>div{padding:18px 0;border-bottom:1px solid #e2e8f0;display:flex;gap:20px}
.rp .rp-pilot-card b{color:#245bd5;font-size:14px}.rp .rp-pilot-card strong{font-size:19px}
.rp .rp-pilot-card p{margin:20px 0 0;font-size:14px;color:#53637a}
@media(max-width:850px){.rp .rp-pilot-layout{grid-template-columns:1fr}.rp .rp-value-grid{grid-template-columns:1fr}.rp .rp-value-grid article{min-height:0}}

.rp .rp-hero-new{background:radial-gradient(ellipse at 80% 25%,#254776,#09182f 65%)} 
.rp .rp-hero-new h1{font-size:clamp(41px,4.7vw,67px)} 
.rp .rp-hero-visual{transform:none;border-radius:18px}
.rp .rp-value-grid.rp-four-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.rp .rp-four-grid article{padding:24px;min-height:276px}
.rp .rp-four-grid article strong{font-size:14px;color:#245bd5;line-height:1.4;display:block}
.rp .rp-four-grid article h3{font-size:21px}
.rp .rp-platform-future{background:#eaf0f8!important}
.rp .rp-platform-future .rp-details{margin-top:24px;max-width:880px}
.rp .rp-platform-future .rp-details summary{font-size:18px}
@media(max-width:1050px){.rp .rp-value-grid.rp-four-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rp .rp-four-grid article{min-height:0}}
@media(max-width:620px){.rp .rp-value-grid.rp-four-grid{grid-template-columns:1fr}}

.rp .rp-visual-audiences{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin:13px 0}
.rp .rp-visual-audience{display:flex;gap:10px;align-items:flex-start;background:white;border:1px solid #d9e4f3;border-radius:11px;padding:15px 12px;min-width:0}
.rp .rp-audience-icon{display:flex;justify-content:center;align-items:center;flex:none;width:34px;height:34px;background:#e8f0ff;color:#245bd5;font-size:23px;border-radius:9px}
.rp .rp-audience-text{min-width:0;display:flex;flex-direction:column;gap:3px}
.rp .rp-audience-text small{font-size:9px;letter-spacing:.06em;color:#5d83bf}
.rp .rp-audience-text strong{font-size:16px;line-height:1.25;overflow-wrap:anywhere}
.rp .rp-audience-text>span{font-size:12px;font-weight:700;color:#315784;line-height:1.3}
.rp .rp-audience-text p{font-size:11px;line-height:1.45;margin:5px 0 0;color:#64748b}
@media(max-width:650px){.rp .rp-visual-audiences{grid-template-columns:1fr}.rp .rp-visual-audience{padding:15px;gap:14px}.rp .rp-audience-icon{width:42px;height:42px}.rp .rp-audience-text strong{font-size:18px}.rp .rp-audience-text>span{font-size:13px}.rp .rp-audience-text p{font-size:12px}}

@media(max-width:650px){.rp .rp-hero-new{padding:48px 0 55px}.rp .rp-hero-new h1{font-size:clamp(37px,9.3vw,49px);line-height:1.08}.rp .rp-hero-new .lead{font-size:17px;line-height:1.5}.rp .rp-hero-layout{gap:25px}.rp .rp-hero-visual{padding:15px;border-radius:12px;box-shadow:0 17px 35px rgba(0,0,0,.2)}.rp .rp-visual-title{font-size:17px;margin:13px 0}.rp .rp-visual-core{padding:14px 12px}.rp .rp-visual-core strong{font-size:18px}.rp .rp-visual-audiences{gap:8px}.rp .rp-visual-audience{padding:11px}.rp .rp-visual-evidence{padding:11px}.rp .rp-visual-evidence span{font-size:10px}.rp .rp-hero-new .hero-note{font-size:13px}.rp .rp-invite-inner strong{font-size:14px}.rp .cases{grid-template-columns:1fr}}
.rp .rp-visual-audiences.rp-five-objects{grid-template-columns:repeat(2,minmax(0,1fr))}.rp .rp-five-objects .rp-visual-audience{min-height:56px;align-items:center;padding:10px}.rp .rp-five-objects .rp-audience-text strong{font-size:14px}@media(max-width:650px){.rp .rp-visual-audiences.rp-five-objects{grid-template-columns:1fr}.rp .rp-five-objects .rp-visual-audience{min-height:44px}}.rp .rp-six-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.rp .rp-roles-section{background:#edf3fa}@media(max-width:850px){.rp .rp-six-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.rp .rp-six-grid{grid-template-columns:1fr}}.rp #aplicaciones .rp-four-grid{grid-template-columns:repeat(5,minmax(0,1fr))}@media(max-width:1100px){.rp #aplicaciones .rp-four-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:680px){.rp #aplicaciones .rp-four-grid{grid-template-columns:1fr}}.rp .rp-management-visual{background:#f8fbff}.rp .rp-management-steps{display:grid;gap:9px;margin-top:16px}.rp .rp-management-step{display:flex;gap:13px;align-items:center;padding:13px;background:white;border:1px solid #dce7f7;border-radius:10px}.rp .rp-management-step small{background:#e9f0fc;padding:10px;border-radius:7px;color:#2354a8}.rp .rp-management-step div{display:flex;flex-direction:column;gap:3px}.rp .rp-management-step strong{font-size:17px;color:#142b4c}.rp .rp-management-step span{font-size:12px;color:#62758f}.rp .rp-management-loop{margin-top:12px;padding:12px;background:#e7f1ff;border-radius:9px;color:#2450a0;font-size:12px;font-weight:700}@media(max-width:650px){.rp .rp-management-step{padding:10px}}.rp .rp-system-section{background:#fff}.rp .rp-system-details{display:grid;grid-template-columns:1fr 1fr;gap:16px}.rp .rp-system-details>div{border:1px solid #d8e5f5;border-radius:13px;padding:24px;background:#f5f9ff}.rp .rp-system-details strong{color:#183f7e;font-size:19px}.rp .rp-system-details p{line-height:1.6;color:#52657c}.rp .rp-research-transition{background:#eaf1fb!important;padding-bottom:40px}@media(max-width:650px){.rp .rp-system-details{grid-template-columns:1fr}.rp .rp-system-details>div{padding:18px}}.rp .rp-navlinks{display:flex;align-items:center;gap:19px;flex-wrap:wrap}.rp .rp-navlinks a{font-weight:650;color:#315078;font-size:13px}.rp .rp-hero-new{border-radius:0}.rp .rp-section-intro h2{letter-spacing:-.04em}.rp .rp-pilot-feature{scroll-margin-top:30px}@media(max-width:700px){.rp .nav{align-items:flex-start;gap:12px;flex-direction:column}.rp .rp-navlinks{gap:14px}.rp .rp-navlinks a{font-size:12px}}`}
.rp .rp-pilot-hero{padding:82px 0 88px;background:radial-gradient(ellipse at 84% 16%,#294d7b,#0b1b34 66%)}
.rp .rp-pilot-hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(340px,.82fr);gap:54px;align-items:center}
.rp .rp-pilot-copy h1{font-size:clamp(42px,5vw,66px);max-width:760px;letter-spacing:-.06em}
.rp .rp-pilot-copy .lead{font-size:clamp(18px,2vw,22px);max-width:740px}
.rp .rp-proof-panel{background:#f8fbff;color:#172a45;border:1px solid #9bb7db;border-radius:17px;padding:25px;box-shadow:0 28px 70px rgba(0,0,0,.28)}
.rp .rp-proof-top{display:flex;justify-content:space-between;gap:12px;font-size:10px;font-weight:800;letter-spacing:.06em;color:#60738d}
.rp .rp-proof-top span:last-child{color:#25815d}
.rp .rp-proof-kicker{font-size:11px;font-weight:800;letter-spacing:.09em;color:#245bd5;margin:25px 0 7px}
.rp .rp-proof-panel h2{font-size:clamp(24px,2.5vw,31px);line-height:1.15;margin:0 0 16px}
.rp .rp-proof-row{padding:15px 0;border-top:1px solid #dce5ef;display:flex;flex-direction:column;gap:4px}
.rp .rp-proof-row b{font-size:13px;color:#1e4e91}.rp .rp-proof-row span{font-size:14px;color:#586b83}
.rp .rp-proof-caption{font-size:12px;color:#74849a;border-top:1px solid #dce5ef;padding-top:13px;margin:10px 0 0}
.rp .rp-pilot-feature-new{background:#edf4ff}
.rp .rp-pilot-feature-new h2{font-size:clamp(32px,3.6vw,47px)}
.rp .rp-pilot-feature-new .rp-pilot-foot{font-size:13px;margin-top:16px;color:#61738b}
.rp .rp-pilot-step{align-items:flex-start!important;gap:14px!important}
.rp .rp-pilot-step b{display:flex;align-items:center;justify-content:center;min-width:34px;height:34px;border-radius:50%;background:#eaf1ff}
.rp .rp-pilot-step section{display:flex;flex-direction:column;gap:4px}
.rp .rp-pilot-step p{font-size:13px;margin:0;color:#61738b}
.rp .rp-invite-inner{padding:12px 0}
.rp .rp-invite a{white-space:nowrap}
@media(max-width:900px){.rp .rp-pilot-hero-grid{grid-template-columns:1fr;gap:32px}.rp .rp-proof-panel{max-width:650px}}
@media(max-width:560px){.rp .rp-pilot-hero{padding:55px 0 62px}.rp .rp-proof-panel{padding:19px}.rp .rp-pilot-copy h1{font-size:clamp(38px,10vw,52px)}}
</style>
      
<div className="rp-invite"><div className="wrap rp-invite-inner"><span className="rp-invite-label">● INVITAMOS A EMPRESAS ESPAÑOLAS</span><strong>Invitamos a empresas españolas a evaluar la utilidad de nuestra investigación.</strong><a href="#piloto">Ver condiciones →</a></div></div>
<div className="wrap nav"><Link className="brand" href="/es/startup">SHASHKOV / STARTUP</Link><div className="rp-navlinks"><Link href="/es/startup">Todo el proyecto</Link><Link href="/es/research">Plataforma de marketing</Link><Link href="/ru/intelligence">RU</Link></div></div>
<header className="hero rp-hero-new rp-pilot-hero"><div className="wrap rp-pilot-hero-grid"><div className="rp-pilot-copy"><p className="kicker">INVITACIÓN A EMPRESAS INDUSTRIALES · ESPAÑA</p><h1>Una mirada externa a su empresa. Con fuentes, no con suposiciones.</h1><p className="lead">Estamos validando una metodología de inteligencia competitiva aplicada a empresas reales. Invitamos a directivos de empresas B2B españolas a revisar un estudio y valorar su precisión, profundidad y utilidad para decisiones comerciales o estratégicas.</p><div className="rp-hero-actions"><a className="cta" href="#piloto">Valorar un estudio piloto →</a><a className="rp-ghost-cta" href="#entregable">Ver qué incluye el informe ↓</a></div><p className="hero-note">METODOLOGÍA EN VALIDACIÓN · SOFTWARE AUTÓNOMO AÚN EN DESARROLLO</p></div><aside className="rp-proof-panel"><div className="rp-proof-top"><span>BUSINESS &amp; COMPETITIVE INTELLIGENCE</span><span>● MÉTODO</span></div><p className="rp-proof-kicker">ASÍ SE PRESENTA LA EVIDENCIA</p><h2>Cada hallazgo debe poder examinarse</h2><div className="rp-proof-row"><b>HECHO DOCUMENTADO</b><span>Información respaldada por una fuente identificable.</span></div><div className="rp-proof-row"><b>INDICIO</b><span>Señal relevante que requiere confirmación adicional.</span></div><div className="rp-proof-row"><b>HIPÓTESIS</b><span>Interpretación que se mantiene separada de los hechos.</span></div><p className="rp-proof-caption">Ejemplo de criterio metodológico; no es un hallazgo sobre una empresa concreta.</p></aside></div></header><section className="rp-value-section" id="entregable"><div className="wrap"><div className="rp-section-intro"><p className="kicker">OBJETOS DE INVESTIGACIÓN</p><h2>Qué podemos investigar</h2><p>Empresas, mercados y relaciones comerciales a partir de fuentes públicas disponibles.</p></div><div className="rp-value-grid rp-four-grid"><article><small>01</small><h3>Empresa propia</h3><p>Modelo de negocio, productos y posición</p></article><article><small>02</small><h3>Competidores</h3><p>Ofertas, tecnologías y diferencias</p></article><article><small>03</small><h3>Compradores</h3><p>Empresas, proyectos y señales de compra</p></article><article><small>04</small><h3>Proveedores</h3><p>Componentes, alternativas y dependencias</p></article><article><small>05</small><h3>Socios</h3><p>Distribuidores, integradores y relaciones</p></article></div></div></section><section className="rp-value-section rp-roles-section" id="roles"><div className="wrap"><div className="rp-section-intro"><p className="kicker">DECISIONES QUE APOYA</p><h2>Para quién son útiles los resultados</h2><p>Una misma evidencia puede respaldar decisiones de distintos responsables.</p></div><div className="rp-value-grid rp-six-grid"><article><small>01</small><h3>Dirección</h3><p>Mercados, crecimiento, dependencias y riesgos</p></article><article><small>02</small><h3>Ventas</h3><p>Empresas objetivo, proyectos y argumentos comerciales</p></article><article><small>03</small><h3>Marketing</h3><p>Segmentos, posicionamiento y canales</p></article><article><small>04</small><h3>Producto e ingeniería</h3><p>Productos, comparaciones, requisitos y alternativas</p></article><article><small>05</small><h3>Compras</h3><p>Proveedores, componentes críticos y sustitutos</p></article><article><small>06</small><h3>Consultoría</h3><p>Evidencias para diagnosticar empresas clientes</p></article></div></div></section><section className="rp-pilot-feature rp-pilot-feature-new" id="piloto"><div className="wrap rp-pilot-layout"><div><p className="kicker">INVITACIÓN AL PILOTO</p><h2>Qué recibe la empresa participante</h2><p>Un informe estructurado sobre el objeto acordado, referencias a las fuentes consultadas, identificación de lagunas y preguntas para valorar si los hallazgos son útiles en la práctica.</p><a className="rp-pilot-button" href="https://t.me/ShashkovVlad" target="_blank" rel="noreferrer">Hablar sobre la participación ↗</a><p className="rp-pilot-foot">Participación voluntaria · Sin obligación de compra · No se requieren datos confidenciales</p></div><div className="rp-pilot-card"><small>CÓMO FUNCIONA</small><div className="rp-pilot-step"><b>01</b><section><strong>Acordamos el foco</strong><p>Su empresa, competidores o compradores potenciales.</p></section></div><div className="rp-pilot-step"><b>02</b><section><strong>Revisa el informe</strong><p>Examina los hallazgos y las fuentes a su ritmo.</p></section></div><div className="rp-pilot-step"><b>03</b><section><strong>Comparte su criterio</strong><p>Señala errores, omisiones y utilidad real.</p></section></div></div></div></section>
<section className="content evidence"><div className="wrap">
        <p className="kicker" style={{color:"#1758b5"}}>EJEMPLOS DE INVESTIGACIÓN</p>
        <h2>Ejemplo de resultados de investigación</h2>
        <p className="intro">Se han realizado investigaciones independientes de CURVASER, FAYMASA, SEHER y FERBESOL con fuentes públicas. Son ejemplos de aplicación de la metodología; no son clientes ni participantes confirmados del piloto.</p>
        <div className="cases">
          <article className="case"><span className="tag">Caso de investigación · España</span><h3>CURVASER</h3><p>Actividad y tecnologías industriales, alternativas competitivas, compradores, proyectos y señales de demanda. Las relaciones documentadas se contrastan con sus fuentes; indicios y compras confirmadas se mantienen separados.</p></article>
          <article className="case"><span className="tag">Pruebas sectoriales · España</span><h3>FAYMASA · SEHER · FERBESOL</h3><p>Investigaciones de negocios industriales españoles para contrastar productos, posición competitiva y oportunidades sin confundir declaraciones, hechos e hipótesis.</p></article>
        </div>
      </div></section>



<ResearchConceptForm />
      <section className="content" style={{background:"#fff"}}><div className="wrap"><details className="rp-details"><summary>Metodología de inteligencia competitiva: 7 ámbitos</summary><p className="intro" style={{marginTop:20}}>Se estudian la empresa, el mercado, los competidores y los compradores. Se registran las fuentes, las copias no se consideran confirmaciones independientes y las cifras se comparan con su período y contexto. Las hipótesis no se presentan como hechos y la ausencia de datos públicos no demuestra que una actividad no exista.</p></details></div></section>
      
      
      
      <footer><div className="wrap">Vladimir Shashkov · Estrategia, marketing y desarrollo de negocio · <Link href="/es">Sitio principal</Link></div></footer>
    </main>
  );
}
