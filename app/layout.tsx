import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./atmosphere.css";
import "./about-contrast.css";
import "./conversion-paths.css";
import "./final-close-polish.css";
import "./about-photo.css";
import "./about-photo-fix.css";
import { siteConfig } from "./site-config";
import AnalyticsTracker from "./AnalyticsTracker";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/api/og?v=4",
        width: 1200,
        height: 630,
        alt: "Владимир Шашков — маркетинг и рост бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/api/og?v=4"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}<AnalyticsTracker /></body></html>;
}
