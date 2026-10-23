import type { Metadata } from "next";
import PersonalProfile from "../components/PersonalProfile";
export const metadata: Metadata = {
 title:"Владимир Шашков — предприниматель, исследователь, автор",
 description:"Владимир Шашков: 25+ лет в промышленном и инженерном бизнесе, управленческие результаты, исследование маркетинга, PBOS, книги и предпринимательские проекты.",
 alternates:{canonical:"https://shashkov-site.vercel.app/about",languages:{"ru":"https://shashkov-site.vercel.app/about","es":"https://shashkov-site.vercel.app/es/about"}}
};
export default function Page(){return <PersonalProfile locale="ru"/>;}
