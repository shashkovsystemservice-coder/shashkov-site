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

    const diagnosis = document.querySelector<HTMLElement>(".ad26-statement");
    if (diagnosis) {
      const diagnosisTrigger = ScrollTrigger.create({
        trigger: diagnosis,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => root.style.setProperty("--diagnosis-progress", self.progress.toFixed(4)),
      });
      cleanup.push(() => diagnosisTrigger.kill());
    }

    if (!reducedMotion) {
      /* Shared transition: Decision Brief does not end and Case does not simply begin.
         The decision surface recedes while the graphite case stage opens through a controlled mask. */
      const transitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ad26-case",
          start: "top 96%",
          end: "top 18%",
          scrub: 0.75,
        },
      });
      transitionTl
        .fromTo(".ad26-case",
          { clipPath: "inset(12% 4% 0% 4%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 1 },
          0)
        .to(".ad26-brief-product", {
          scale: 0.975,
          opacity: 0.56,
          filter: "blur(1.5px)",
          transformOrigin: "50% 100%",
          ease: "none",
          duration: 0.9,
        }, 0)
        .fromTo(".ad26-case-title > span",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", ease: "none", duration: 0.55 },
          0.28)
        .fromTo(".ad26-case-title h2",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", ease: "none", duration: 0.72 },
          0.48);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(".ad26-nav", { y: -18, opacity: 0, duration: 0.5 })
          .from(".ad26-hero .ad26-kicker", { clipPath: "inset(0 0 100% 0)", duration: 0.42 }, "-=.12")
          .from(".ad26-hero h1", { clipPath: "inset(0 0 100% 0)", duration: 0.75 }, "-=.18")
          .from(".ad26-hero-bottom", { clipPath: "inset(0 0 100% 0)", duration: 0.62 }, "-=.34")
          .from(".ad26-hero-proof", { opacity: 0, duration: 0.46 }, "-=.2")
          .from(".ad26-portrait", { opacity: 0, clipPath: "inset(9% 13% 13% 9%)", duration: 0.95 }, 0.08);

        gsap.to(".ad26-portrait", {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: ".ad26-hero", start: "35% top", end: "bottom top", scrub: 0.8 },
        });

        gsap.utils.toArray<HTMLElement>(".ad26-situations article").forEach((item) => {
          gsap.fromTo(item,
            { clipPath: "inset(0 0 100% 0)", opacity: 0.22 },
            { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 88%", end: "top 58%", scrub: 0.55 } }
          );
        });

        gsap.utils.toArray<HTMLElement>(".ad26-signature article").forEach((item, i) => {
          gsap.fromTo(item,
            { clipPath: "inset(0 0 100% 0)", opacity: 0.18 },
            { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: `top ${88 - i * 3}%`, end: "top 56%", scrub: 0.6 } }
          );
        });

        gsap.fromTo(".ad26-brief-product",
          { clipPath: "inset(0 0 100% 0)", opacity: 0.28 },
          { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: ".ad26-brief", start: "top 78%", end: "top 30%", scrub: 0.7 } }
        );

        gsap.utils.toArray<HTMLElement>(".ad26-case-flow article").forEach((item, i) => {
          gsap.fromTo(item,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", ease: "none", scrollTrigger: { trigger: item, start: `top ${88 - i * 2}%`, end: "top 56%", scrub: 0.65 } }
          );
        });
        gsap.fromTo(".ad26-case blockquote",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", ease: "none", scrollTrigger: { trigger: ".ad26-case blockquote", start: "top 90%", end: "top 58%", scrub: 0.65 } }
        );

        gsap.fromTo(".ad26-about-portrait",
          { clipPath: "inset(10% 12% 10% 8%)", opacity: 0.35 },
          { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, ease: "none", scrollTrigger: { trigger: ".ad26-about", start: "top 82%", end: "top 36%", scrub: 0.75 } }
        );
      });

      mm.add("(max-width: 900px)", () => {
        /* Native iOS scroll; text geometry never translates. Motion is mask-, image- and scene-based. */
        if (portrait) {
          gsap.fromTo(portrait,
            { clipPath: "inset(8% 5% 10% 5%)", opacity: 0.46 },
            { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, ease: "none", scrollTrigger: { trigger: portrait, start: "top 92%", end: "top 48%", scrub: 0.7 } }
          );
          gsap.fromTo(".ad26-portrait img",
            { scale: 1.10 },
            { scale: 1.015, ease: "none", scrollTrigger: { trigger: portrait, start: "top 92%", end: "bottom 20%", scrub: 0.9 } }
          );
        }

        gsap.utils.toArray<HTMLElement>(".ad26-situations article").forEach((item) => {
          gsap.fromTo(item,
            { clipPath: "inset(0 0 100% 0)", opacity: 0.18 },
            { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 92%", end: "top 62%", scrub: 0.65 } }
          );
        });

        gsap.utils.toArray<HTMLElement>(".ad26-signature article").forEach((item) => {
          gsap.fromTo(item,
            { clipPath: "inset(0 0 100% 0)", opacity: 0.16 },
            { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 92%", end: "top 62%", scrub: 0.65 } }
          );
        });

        gsap.fromTo(".ad26-brief-product",
          { clipPath: "inset(0 0 100% 0)", opacity: 0.2 },
          { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: ".ad26-brief-product", start: "top 92%", end: "top 48%", scrub: 0.75 } }
        );
        gsap.utils.toArray<HTMLElement>(".ad26-brief-row").forEach((row, i) => {
          gsap.fromTo(row,
            { clipPath: "inset(0 0 100% 0)", opacity: 0.08 },
            { clipPath: "inset(0 0 0% 0)", opacity: 1, ease: "none", scrollTrigger: { trigger: row, start: `top ${94 - i}%`, end: "top 66%", scrub: 0.55 } }
          );
        });

        gsap.utils.toArray<HTMLElement>(".ad26-case-flow article").forEach((item) => {
          gsap.fromTo(item,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", ease: "none", scrollTrigger: { trigger: item, start: "top 92%", end: "top 62%", scrub: 0.65 } }
          );
        });
        gsap.fromTo(".ad26-case blockquote",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", ease: "none", scrollTrigger: { trigger: ".ad26-case blockquote", start: "top 92%", end: "top 62%", scrub: 0.65 } }
        );

        gsap.fromTo(".ad26-about-portrait",
          { clipPath: "inset(8% 7% 10% 7%)", opacity: 0.35 },
          { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, ease: "none", scrollTrigger: { trigger: ".ad26-about-portrait", start: "top 92%", end: "top 48%", scrub: 0.8 } }
        );
        gsap.fromTo(".ad26-about-portrait img",
          { scale: 1.10 },
          { scale: 1.02, ease: "none", scrollTrigger: { trigger: ".ad26-about", start: "top bottom", end: "bottom top", scrub: 0.9 } }
        );
      });

      cleanup.push(() => mm.revert());
    }

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
