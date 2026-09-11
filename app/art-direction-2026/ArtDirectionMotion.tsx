"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const constraintStates = [
  { d: "M70 180 C250 150 340 280 470 300 C610 322 735 230 930 270", a:[470,300], b:[930,270] },
  { d: "M120 110 C180 260 210 420 300 520 C410 640 620 650 900 720", a:[300,520], b:[900,720] },
  { d: "M80 500 C250 500 310 500 420 500 C590 500 700 350 930 300", a:[420,500], b:[930,300] },
  { d: "M100 190 C260 190 260 360 430 360 C620 360 620 560 900 560", a:[430,360], b:[900,560] },
  { d: "M140 180 C240 120 420 140 480 250 C550 380 720 280 880 340", a:[480,250], b:[880,340] },
  { d: "M100 160 C250 260 250 410 430 470 C610 530 650 680 900 760", a:[430,470], b:[900,760] },
  { d: "M120 300 C300 250 410 350 520 430 C630 510 720 460 900 390", a:[520,430], b:[900,390] },
  { d: "M80 550 C300 520 450 500 600 500 C760 500 850 500 930 500", a:[600,500], b:[930,500] },
] as const;

export default function ArtDirectionMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>(".ad26");
    const nav = document.querySelector<HTMLElement>(".ad26-nav");
    const rail = gsap.utils.toArray<HTMLElement>(".ad26-progress-rail span");
    const constraintPath = document.querySelector<SVGPathElement>(".ad26-constraint-path");
    const constraintNodeA = document.querySelector<SVGCircleElement>(".ad26-constraint-node-a");
    const constraintNodeB = document.querySelector<SVGCircleElement>(".ad26-constraint-node-b");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setConstraint = (index: number, immediate = false) => {
      const state = constraintStates[index] ?? constraintStates[0];
      const vars = { duration: immediate ? 0 : 0.9, ease: "power3.inOut", overwrite: true };
      if (constraintPath) gsap.to(constraintPath, { ...vars, attr: { d: state.d } });
      if (constraintNodeA) gsap.to(constraintNodeA, { ...vars, attr: { cx: state.a[0], cy: state.a[1] } });
      if (constraintNodeB) gsap.to(constraintNodeB, { ...vars, attr: { cx: state.b[0], cy: state.b[1] } });
    };

    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionMap: Array<[string, string]> = [
      [".ad26-hero", "00 · Ввод"],
      [".ad26-recognition", "01 · Ситуация"],
      [".ad26-statement", "01 · Диагноз"],
      [".ad26-method", "02 · Логика"],
      [".ad26-brief", "02 · Decision Brief"],
      [".ad26-case", "03 · Кейс"],
      [".ad26-about", "04 · Обо мне"],
      [".ad26-contact", "05 · Следующий шаг"],
    ];

    const sectionTriggers = sectionMap.map(([selector, label], index) => {
      const element = document.querySelector(selector);
      if (!element) return null;
      const activate = () => {
        root?.setAttribute("data-section", label);
        rail.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
        setConstraint(index);
      };
      return ScrollTrigger.create({
        trigger: element,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: activate,
        onEnterBack: activate,
      });
    });
    root?.setAttribute("data-section", "00 · Ввод");
    rail[0]?.classList.add("is-active");
    setConstraint(0, true);

    const portrait = document.querySelector<HTMLElement>(".ad26-portrait");
    const lens = document.querySelector<HTMLElement>(".ad26-lens");
    const onPortraitMove = (event: PointerEvent) => {
      if (!portrait || !lens || window.matchMedia("(pointer: coarse)").matches) return;
      const rect = portrait.getBoundingClientRect();
      const x = Math.max(12, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(10, Math.min(90, ((event.clientY - rect.top) / rect.height) * 100));
      gsap.to(lens, { left: `${x}%`, top: `${y}%`, duration: 0.45, ease: "power3.out", overwrite: true });
    };
    const onPortraitLeave = () => lens && gsap.to(lens, { left: "64%", top: "38%", duration: 0.75, ease: "power3.out" });
    portrait?.addEventListener("pointermove", onPortraitMove);
    portrait?.addEventListener("pointerleave", onPortraitLeave);

    if (reducedMotion) {
      return () => {
        window.removeEventListener("scroll", onScroll);
        portrait?.removeEventListener("pointermove", onPortraitMove);
        portrait?.removeEventListener("pointerleave", onPortraitLeave);
        sectionTriggers.forEach((trigger) => trigger?.kill());
      };
    }

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".ad26-nav", { y: -24, opacity: 0, duration: 0.5 })
        .from(".ad26-hero .ad26-kicker", { y: 16, opacity: 0, duration: 0.4 }, "-=.18")
        .from(".ad26-hero h1", { yPercent: 12, opacity: 0, duration: 0.78 }, "-=.16")
        .from(".ad26-hero-bottom", { y: 20, opacity: 0, duration: 0.55 }, "-=.34")
        .from(".ad26-hero-proof", { y: 14, opacity: 0, duration: 0.42 }, "-=.28")
        .from(".ad26-portrait", { clipPath: "inset(5% 6% 6% 5%)", scale: 1.035, opacity: 0, duration: 0.95 }, 0.12)
        .from(".ad26-lens", { scale: 0.72, opacity: 0, duration: 0.7 }, 0.5);

      gsap.to(".ad26-portrait img", {
        yPercent: 9,
        scale: 1.07,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.75 },
      });

      gsap.to(".ad26-lens", {
        left: "49%", top: "54%",
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".ad26-hero-copy", {
        yPercent: -7,
        opacity: 0.78,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "45% 45%", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray<HTMLElement>(".ad26-situations article").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 66%",
          end: "bottom 40%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        });
      });

      gsap.fromTo(".ad26-statement", { clipPath: "inset(7% 0 0 0)" }, {
        clipPath: "inset(0% 0 0 0)",
        ease: "none",
        scrollTrigger: { trigger: ".ad26-statement", start: "top 96%", end: "top 55%", scrub: 0.7 },
      });

      const statement = gsap.timeline({
        scrollTrigger: { trigger: ".ad26-statement", start: "top 75%", end: "bottom 38%", scrub: 0.65 },
      });
      statement
        .fromTo(".ad26-statement-label", { x: -16, opacity: 0.3 }, { x: 0, opacity: 1 }, 0)
        .fromTo(".ad26-statement h2", { y: 54, opacity: 0.38 }, { y: 0, opacity: 1 }, 0)
        .fromTo(".ad26-reframe-assumption", { y: 24, opacity: 0, "--reframe-strike": 0 }, { y: 0, opacity: 0.72, "--reframe-strike": 1, duration: 0.42 }, 0.08)
        .fromTo(".ad26-reframe-assumption i", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.32, ease: "power2.out" }, 0.22)
        .fromTo(".ad26-reframe-shift", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.2 }, 0.36)
        .fromTo(".ad26-reframe-question", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32 }, 0.43)
        .fromTo(".ad26-statement-foot", { y: 34, opacity: 0.15 }, { y: 0, opacity: 1 }, 0.33);

      const methodItems = gsap.utils.toArray<HTMLElement>(".ad26-signature article");
      methodItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 42%",
          onToggle: (self) => {
            item.classList.toggle("is-active", self.isActive);
            if (self.isActive) item.parentElement?.style.setProperty("--method-progress", `${((index + 1) / methodItems.length) * 100}%`);
          },
        });
      });

      const brief = gsap.timeline({
        scrollTrigger: { trigger: ".ad26-brief", start: "top 80%", toggleActions: "play none none reverse" },
      });
      brief
        .from(".ad26-brief-copy", { y: 26, opacity: 0, duration: 0.62, ease: "power3.out" })
        .from(".ad26-brief-product", { x: 42, rotate: 2, opacity: 0, duration: 0.76, ease: "power3.out" }, "-=.4")
        .to(".ad26-brief-row", { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)", stagger: 0.12, duration: 0.46, ease: "power2.out" }, "-=.22");

      gsap.to(".ad26-brief-product", {
        yPercent: -4,
        rotate: 0,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-brief", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      const caseSection = document.querySelector<HTMLElement>(".ad26-case");
      const caseItems = gsap.utils.toArray<HTMLElement>(".ad26-case-flow article");
      caseItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 62%",
          end: "bottom 42%",
          onToggle: (self) => {
            item.classList.toggle("is-active", self.isActive);
            if (self.isActive) {
              item.parentElement?.style.setProperty("--case-progress", `${((index + 1) / caseItems.length) * 100}%`);
              caseSection?.classList.remove("is-case-1", "is-case-2", "is-case-3");
              caseSection?.classList.add(`is-case-${index + 1}`);
            }
          },
        });
      });

      gsap.from(".ad26-case blockquote", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-case blockquote", start: "top 82%" },
      });

      gsap.from(".ad26-about-portrait", {
        clipPath: "inset(9% 16% 9% 0)",
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-about", start: "top 72%" },
      });

      gsap.to(".ad26-about-portrait img", {
        yPercent: 7,
        scale: 1.055,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-about", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      gsap.from(".ad26-contact h2, .ad26-contact>p, .ad26-contact-actions", {
        y: 30,
        opacity: 0,
        stagger: 0.09,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-contact", start: "top 76%" },
      });

      const buttons = gsap.utils.toArray<HTMLElement>(".ad26-primary, .ad26-nav-cta");
      buttons.forEach((button) => {
        const onMove = (event: PointerEvent) => {
          if (window.matchMedia("(pointer: coarse)").matches) return;
          const rect = button.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.065;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.065;
          gsap.to(button, { x, y, duration: 0.24, ease: "power2.out" });
        };
        const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.42, ease: "elastic.out(1, .35)" });
        button.addEventListener("pointermove", onMove);
        button.addEventListener("pointerleave", onLeave);
        button.__motionCleanup = () => {
          button.removeEventListener("pointermove", onMove);
          button.removeEventListener("pointerleave", onLeave);
        };
      });

      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      portrait?.removeEventListener("pointermove", onPortraitMove);
      portrait?.removeEventListener("pointerleave", onPortraitLeave);
      sectionTriggers.forEach((trigger) => trigger?.kill());
      document.querySelectorAll<HTMLElement>(".ad26-primary, .ad26-nav-cta").forEach((el) => el.__motionCleanup?.());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

declare global {
  interface HTMLElement {
    __motionCleanup?: () => void;
  }
}
