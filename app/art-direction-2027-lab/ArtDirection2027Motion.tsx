"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./production-map.css";
import "./top-case-reel.css";
import "./accent-switcher.css";

const topCases = [
  { label: "Промышленность", title: "От станков — к линиям", href: "/cases/integrator-model", image: "/technograv-preview.png", mark: "П" },
  { label: "Свет", title: "Инженерное партнёрство", href: null, image: null, mark: "С", tone: "light" },
  { label: "Ресторан", title: "Рост и модель выбора", href: null, image: null, mark: "Р", tone: "warm" },
  { label: "Event", title: "Система для команды", href: "/cases/prime-event", image: "/marketing-system-11.png", mark: "E", tone: "event" },
  { label: "Wellness", title: "Новый продукт / рынок", href: "/cases/iba-wellness", image: "/fitness-report-cover.png", mark: "W" },
  { label: "B2B рост", title: "Как попадать в выбор", href: "/cases/market-choice-system", image: null, mark: "B" },
] as const;

const accentOrder = ["blue", "red", "green"] as const;
type Accent = (typeof accentOrder)[number];

function TopCaseReel() {
  return (
    <section className="ad27-topcase-reel" aria-label="Избранные кейсы">
      <div className="ad27-topcase-head"><strong>Кейсы</strong><span>Листайте · нажмите, чтобы открыть</span><a href="/art-direction-2027-lab/analytics">Аналитика →</a></div>
      <div className="ad27-topcase-track">
        {topCases.map((item) => {
          const className = [
            "ad27-topcase-card",
            !item.image ? "ad27-topcase-card--type" : "",
            item.tone ? `ad27-topcase-card--${item.tone}` : "",
            !item.href ? "ad27-topcase-card--disabled" : "",
          ].filter(Boolean).join(" ");
          const inner = <>
            {item.image ? <Image src={item.image} alt="" fill sizes="(max-width: 900px) 96px, 154px" /> : null}
            <div className="ad27-topcase-meta"><small>{item.label}</small><strong>{item.title}</strong></div>
          </>;
          return item.href ? <a key={item.label} className={className} href={item.href} data-mark={item.mark}>{inner}</a> : <div key={item.label} className={className} data-mark={item.mark}>{inner}</div>;
        })}
      </div>
    </section>
  );
}

function AccentSwitcher() {
  const [accent, setAccent] = useState<Accent>("blue");

  useEffect(() => {
    const saved = window.localStorage.getItem("ad27-accent") as Accent | null;
    if (saved && accentOrder.includes(saved)) setAccent(saved);
  }, []);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ad27");
    if (root) root.dataset.accent = accent;
    window.localStorage.setItem("ad27-accent", accent);
  }, [accent]);

  const nextAccent = () => {
    const index = accentOrder.indexOf(accent);
    setAccent(accentOrder[(index + 1) % accentOrder.length]);
  };

  return (
    <button
      type="button"
      className="ad27-accent-switcher"
      onClick={nextAccent}
      aria-label="Сменить акцентный цвет сайта"
      title="Сменить акцентный цвет"
    >
      <span aria-hidden="true" />
    </button>
  );
}

export default function ArtDirection2027Motion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".ad27-hero-image", { clipPath: "inset(12% 0 0 16%)", duration: 1.15 })
        .from(".ad27-hero h1", { y: 28, opacity: 0, duration: .9 }, .08)
        .from(".ad27-hero-lead,.ad27-hero-actions", { y: 18, opacity: 0, stagger: .08, duration: .65 }, .28);

      gsap.to(".ad27-hero-image img", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: ".ad27-hero", start: "top top", end: "bottom top", scrub: true },
      });

      const diagnosis = document.querySelector<HTMLElement>(".ad27-diagnosis");
      if (diagnosis) {
        ScrollTrigger.create({
          trigger: diagnosis,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: self => diagnosis.style.setProperty("--diagnosis", self.progress.toFixed(4)),
        });
      }

      gsap.utils.toArray<HTMLElement>(".ad27-situation-list article").forEach((el, i) => {
        gsap.from(el, { y: 18, opacity: 0, duration: .65, delay: i * .02, scrollTrigger: { trigger: el, start: "top 84%" } });
      });

      gsap.from(".ad27-brief-lines", {
        y: 28,
        clipPath: "inset(10% 0 0 0)",
        duration: .9,
        scrollTrigger: { trigger: ".ad27-brief", start: "top 68%" },
      });

      gsap.from(".ad27-case-lead h2", {
        clipPath: "inset(0 0 100% 0)",
        y: 18,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad27-case-lead", start: "top 74%" },
      });

      gsap.from(".ad27-about-image", {
        clipPath: "inset(12% 0 0 10%)",
        duration: 1,
        scrollTrigger: { trigger: ".ad27-about", start: "top 72%" },
      });
    });

    mm.add("(max-width: 900px)", () => {
      gsap.from(".ad27-hero h1", { opacity: 0, y: 16, duration: .65, ease: "power2.out" });
      gsap.utils.toArray<HTMLElement>(".ad27-situation-list article,.ad27-approach-steps article").forEach(el => {
        gsap.from(el, { opacity: 0, y: 12, duration: .45, scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.from(".ad27-case-lead h2", {
        clipPath: "inset(0 0 100% 0)",
        duration: .7,
        scrollTrigger: { trigger: ".ad27-case-lead", start: "top 86%" },
      });
    });

    return () => mm.revert();
  }, []);

  return <><AccentSwitcher /><TopCaseReel /></>;
}
