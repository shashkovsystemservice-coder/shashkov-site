import type { Metadata } from "next";
import StartupNext from "../../components/StartupNext";
export const metadata: Metadata = {
 title: "Investigación de empresas para decisiones profesionales | SHASHKOV Startup",
 description: "Investigue empresas, competidores, clientes y proveedores para consultoría, dirección, ventas, compras y entrevistas. Concepto en desarrollo."
};
export default function Page(){return <StartupNext locale="es" />;}
