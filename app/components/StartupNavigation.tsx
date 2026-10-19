import Link from "next/link";
type Props = { lang: "es" | "ru"; section: "startup" | "research" | "intelligence" };
export default function StartupNavigation({lang, section}: Props) {
 const ru=lang==="ru";
 const items=[
 {key:"startup",label:ru?"Проект":"Proyecto",desc:ru?"Главная":"Inicio"},
 {key:"research",label:ru?"Маркетинговая система":"Sistema de marketing",desc:ru?"Платформа":"Plataforma"},
 {key:"intelligence",label:ru?"Конкурентная разведка":"Inteligencia competitiva",desc:ru?"Пилот":"Piloto"},
 ] as const;
 const alternate=ru?"es":"ru";
 return <nav className="unav" aria-label={ru?"Навигация по проекту":"Navegación del proyecto"}>
 <div className="unav-inner">
 <Link className="unav-brand" href={`/${lang}/startup`}>SHASHKOV<span> / STARTUP</span></Link>
 <div className="unav-pages">
 {items.map(item=><Link key={item.key} href={`/${lang}/${item.key}`} aria-current={section===item.key?"page":undefined} className={section===item.key?"unav-active":""}>{item.label}</Link>)}
 </div>
 <Link className="unav-lang" href={`/${alternate}/${section}`} aria-label={ru?"Испанская версия":"Versión en ruso"}>{ru?"ES":"RU"} ↗</Link>
 </div>
 <style>{`
 .unav{background:#fff;color:#173050;font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid #dce5ef;position:relative;z-index:5}
 .unav *{box-sizing:border-box}.unav a{text-decoration:none;color:inherit}
 .unav-inner{max-width:1160px;width:calc(100% - 48px);margin:auto;display:flex;gap:20px;align-items:center;justify-content:space-between;min-height:76px}
 .unav-brand{font-size:15px;font-weight:900;letter-spacing:-.025em;white-space:nowrap}.unav-brand span{font-weight:500;color:#6c7f95}
 .unav-pages{display:flex;gap:4px;align-items:center;justify-content:center;flex-wrap:wrap}
 .unav-pages a{font-size:13px;font-weight:750;padding:12px 13px;border-radius:8px;line-height:1.3}
 .unav-pages a:hover,.unav-pages a.unav-active{background:#eaf2ff;color:#174eaa}
 .unav-pages a.unav-active{box-shadow:inset 0 -2px 0 #245bd5}
 .unav-lang{border:1px solid #ccdaea;border-radius:8px;padding:9px 13px;font-size:13px;font-weight:800;white-space:nowrap}
 .unav a:focus-visible{outline:3px solid #5388dc;outline-offset:2px}
 @media(max-width:800px){.unav-inner{width:calc(100% - 32px);flex-wrap:wrap;gap:4px;min-height:0;padding:13px 0}.unav-brand{flex:1}.unav-pages{order:3;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;width:100%;padding-top:8px}.unav-pages a{font-size:12px;white-space:nowrap;padding:9px 10px}.unav-lang{padding:7px 10px}}
 `}</style>
 </nav>;
}
