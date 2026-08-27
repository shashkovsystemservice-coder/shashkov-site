import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./site-config";
import AnalyticsTracker from "./AnalyticsTracker";

export const metadata: Metadata = { title: siteConfig.title, description: siteConfig.description, icons: { icon: "/favicon.svg" }, openGraph: { title: siteConfig.title, description: siteConfig.description, type: "website", locale: "ru_RU", images: [{ url: "/og.png", width: 1920, height: 1024, alt: "Диагностика маркетинга и роста" }] }, twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: ["/og.png"] } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}<AnalyticsTracker /></body></html>;
}
