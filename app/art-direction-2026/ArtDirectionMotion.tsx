"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections: Array<[string, string]> = [
  [".ad26-hero", "00 · Ввод"],
  [".ad26-recognition", "01 · Ситуация"],
  [".ad26-statement", "01 · Диагноз"],
  [".ad26-method", "02 · Логика"],
  [".ad26-brief", "02 · Decision Brief"],
  [".ad26-case", "03 · Кейс"],
  [".ad26-about", "04 · Обо мне"],
  [".ad26-contact", "05 · Следующий шаг"],
];

const progressMap: Array<[string, string]> = [
  [".ad26-hero", "--scene-progress"],
  [".ad26-recognition", "--signal-progress"],
  [".ad26-statement", "--diagnosis-progress"],
  [".ad26-method", "--method-progress"],
  [".ad26-brief", "--brief-progress"],
  [".ad26-case", "--case-progress"],
  [".ad26-about", "--about-progress"],
  [".ad26-contact", "--contact-progress"],
];

export default function ArtDirectionMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>(".ad26");
    const nav = document.querySelector<HTMLElement>(".ad26-nav");
    const rail = gsap.utils.toArray<HTMLElement>(".ad26-progress-rail span");
    const portrait = document.querySelector<HTMLElement>(".ad26-portrait");
    const lens = document.querySelector<HTMLElement>(".ad26-lens");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!root) return;

    const cleanup: Array<() => void> = [];

    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanup.push(() => window.removeEventListener("scroll", onScroll));

    sections.forEach(([selector, label], index) => {
      const el = document.querySelector<HTMLElement>(selector);
      if (!el) return;
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 54%",
        end: "bottom 46%",
        onEnter: () => {
          root.dataset.section = label;
          rail.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
        },
        onEnterBack: () => {
          root.dataset.section = label;
          rail.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
        },
      });
      cleanup.push(() => trigger.kill());
    });

    progressMap.forEach(([selector, variable]) => {
      const el = document.querySelector<HTMLElement>(selector);
      if (!el) return;
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => root.style.setProperty(variable, self.progress.toFixed(4)),
      });
      cleanup.push(() => trigger.kill());
    });

    // Active evidence states change emphasis only; no geometry changes.
    [".ad26-situations article", ".ad26-signature article", ".ad26-case-flow article"].forEach((selector) => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((item) => {
        const trigger = ScrollTrigger.create({
          trigger: item,
          start: "top 68%",
          end: "bottom 34%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        });
        cleanup.push(() => trigger.kill());
      });
    });

    if (!reducedMotion) {
      const mm = gsap.matchMedia();

      // Desktop: restrained editorial motion. Text can breathe, but never snaps between states.
      mm.add("(min-width: 901px)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(".ad26-nav", { y: -16, opacity: 0, duration: 0.45 })
          .from(".ad26-hero .ad26-kicker", { y: 10, opacity: 0, duration: 0.35 }, "-=.14")
          .from(".ad26-hero h1", { y: 18, opacity: 0, duration: 0.62 }, "-=.16")
          .from(".ad26-hero-bottom", { y: 12, opacity: 0, duration: 0.5 }, "-=.28")
          .from(".ad26-hero-proof", { y: 8, opacity: 0, duration: 0.38 }, "-=.23")
          .from(".ad26-portrait", { opacity: 0, clipPath: "polygon(12% 8%,94% 0,100% 88%,5% 96%,0 14%)", duration: 0.85 }, 0.1);

        gsap.from(".ad26-brief-product", {
          opacity: 0,
          x: 22,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ad26-brief", start: "top 78%", toggleActions: "play none none reverse" },
        });

        gsap.from(".ad26-about-portrait", {
          opacity: 0,
          clipPath: "polygon(0 8%,88% 0,100% 100%,8% 94%)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ad26-about", start: "top 74%" },
        });

        const buttons = gsap.utils.toArray<HTMLElement>(".ad26-primary, .ad26-nav-cta");
        buttons.forEach((button) => {
          const onMove = (event: PointerEvent) => {
            const rect = button.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) * 0.05;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.05;
            gsap.to(button, { x, y, duration: 0.22, ease: "power2.out", overwrite: true });
          };
          const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.34, ease: "power2.out", overwrite: true });
          button.addEventListener("pointermove", onMove);
          button.addEventListener("pointerleave", onLeave);
          cleanup.push(() => {
            button.removeEventListener("pointermove", onMove);
            button.removeEventListener("pointerleave", onLeave);
          });
        });
      });

      // Mobile: the page is animated, but the reading geometry is sacred.
      // Motion lives in imagery, the focus lens, field and progress-driven surfaces.
      mm.add("(max-width: 900px)", () => {
        if (portrait && lens) {
          const heroTrigger = ScrollTrigger.create({
            trigger: ".ad26-hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.55,
            onUpdate: (self) => {
              const p = self.progress;
              lens.style.left = `${60 - p * 8}%`;
              lens.style.top = `${35 + p * 15}%`;
            },
          });
          cleanup.push(() => heroTrigger.kill());
        }

        // A single calm reveal on the key conceptual transition.
        gsap.fromTo(".ad26-reframe-assumption i",
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: ".ad26-reframe", start: "top 72%", end: "bottom 42%", scrub: 0.5 },
          }
        );

        // Photos carry motion; text does not.
        gsap.to(".ad26-about-portrait img", {
          scale: 1.04,
          ease: "none",
          scrollTrigger: { trigger: ".ad26-about", start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });

      cleanup.push(() => mm.revert());
    }

    const onPortraitMove = (event: PointerEvent) => {
      if (!portrait || !lens || window.matchMedia("(pointer: coarse)").matches) return;
      const rect = portrait.getBoundingClientRect();
      const x = Math.max(14, Math.min(86, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(12, Math.min(88, ((event.clientY - rect.top) / rect.height) * 100));
      gsap.to(lens, { left: `${x}%`, top: `${y}%`, duration: 0.4, ease: "power3.out", overwrite: true });
    };
    const onPortraitLeave = () => lens && gsap.to(lens, { left: "61%", top: "36%", duration: 0.65, ease: "power3.out" });
    portrait?.addEventListener("pointermove", onPortraitMove);
    portrait?.addEventListener("pointerleave", onPortraitLeave);
    cleanup.push(() => {
      portrait?.removeEventListener("pointermove", onPortraitMove);
      portrait?.removeEventListener("pointerleave", onPortraitLeave);
    });

    root.dataset.section = "00 · Ввод";
    rail[0]?.classList.add("is-active");
    ScrollTrigger.refresh();

    return () => {
      cleanup.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
