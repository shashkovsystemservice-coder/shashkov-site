import type { Metadata } from "next";
import PersonalProfile from "../../components/PersonalProfile";
export const metadata: Metadata = {
 title:"Vladimir Shashkov — emprendedor, investigador y autor",
 description:"Vladimir Shashkov: más de 25 años en empresas industriales y de ingeniería, experiencia directiva, investigación de marketing, PBOS, publicaciones y proyectos emprendedores.",
 alternates:{canonical:"https://shashkov-site.vercel.app/es/about",languages:{"ru":"https://shashkov-site.vercel.app/about","es":"https://shashkov-site.vercel.app/es/about"}}
};
export default function Page(){return <PersonalProfile locale="es"/>;}
