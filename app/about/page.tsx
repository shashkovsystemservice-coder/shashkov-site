import type { Metadata } from "next";
import PersonalProfile from "../components/PersonalProfile";
export const metadata:Metadata={title:"Владимир Шашков — опыт, проекты и идеи",description:"Личная страница Владимира Шашкова: более 25 лет в управлении и развитии бизнеса, предпринимательские проекты, исследования и цифровые инструменты."};
export default function Page(){return <PersonalProfile locale="ru"/>;}
