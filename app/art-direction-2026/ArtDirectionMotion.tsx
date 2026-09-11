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
    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    const setConstraint = (index: number, immediate = false) => {
      const state = constraintStates[index] ?? constraintStates[0];
      const vars = { duration: immediate || reducedMotion ? 0 : (isMobile ? 0.65 : 0.9), ease: "power2.inOut", overwrite: true };
      if (constraintPath) gsap.to(constraintPath, { ...vars, attr: { d: state.d } });
      if (constraintNodeA) gsap.to(constraintNodeA, { ...vars, attr: { cx: state.a[0], cy: state.a[1] } });
      if (constraintNodeB) gsap.to(constraintNodeB, { ...vars, attr: { cx: state.b[0], cy: state.b[1] } });
    };

    const activateSection = (index: number, label: string) => {
      root?.setAttribute("data-section", label);
      rail.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
      setConstraint(index);
    };

    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    root?.setAttribute("data-section", "00 · Ввод");
    rail[0]?.classList.add("is-active");
    setConstraint(0, true);

    /*
      MOBILE CONTRACT:
      Typography and reading geometry never animate with scroll.
      Only the atmospheric field / constraint graphic may change state.
      IntersectionObserver is deliberately used instead of ScrollTrigger here
      so no GSAP transform can ever be injected into mobile text nodes.
    */
    if (isMobile || reducedMotion) {
      const observed = sectionMap
        .map(([selector, label], index) => {
          const element = document.querySelector<HTMLElement>(selector);
          return element ? { element, label, index } : null;
        })
        .filter(Boolean) as Array<{ element: HTMLElement; label: string; index: number }>;

      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top - window.innerHeight * 0.42) - Math.abs(b.boundingClientRect.top - window.innerHeight * 0.42))[0];
        if (!visible) return;
        const match = observed.find((item) => item.element === visible.target);
        if (match) activateSection(match.index, match.label);
      }, { rootMargin: "-34% 0px -48% 0px", threshold: 0 });

      observed.forEach(({ element }) => observer.observe(element));

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }

    const portrait = document.querySelector<HTMLElement>(".ad26-portrait");
    const lens = document.querySelector<HTMLElement>(".ad26-lens");
    const onPortraitMove = (event: PointerEvent) => {
      if (!portrait || !lens) return;
      const rect = portrait.getBoundingClientRect();
      const x = Math.max(12, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(10, Math.min(90, ((event.clientY - rect.top) / rect.height) * 100));
      gsap.to(lens, { left: `${x}%`, top: `${y}%`, duration: 0.45, ease: "power3.out", overwrite: true });
    };
    const onPortraitLeave = () => lens && gsap.to(lens, { left: "64%", top: "38%", duration: 0.75, ease: "power3.out" });
    portrait?.addEventListener("pointermove", onPortraitMove);
    portrait?.addEventListener("pointerleave", onPortraitLeave);

    const sectionTriggers = sectionMap.map(([selector, label], index) => {
      const element = document.querySelector(selector);
      if (!element) return null;
      return ScrollTrigger.create({
        trigger: element,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => activateSection(index, label),
        onEnterBack: () => activateSection(index, label),
      });
    });

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".ad26-nav", { y: -20, opacity: 0, duration: 0.45 })
        .from(".ad26-hero .ad26-kicker", { y: 12, opacity: 0, duration: 0.36 }, "-=.16")
        .from(".ad26-hero h1", { yPercent: 7, opacity: 0, duration: 0.68 }, "-=.14")
        .from(".ad26-hero-bottom", { y: 14, opacity: 0, duration: 0.5 }, "-=.3")
        .from(".ad26-hero-proof", { y: 10, opacity: 0, duration: 0.4 }, "-=.25")
        .from(".ad26-portrait", { clipPath: "inset(4% 5% 5% 4%)", scale: 1.025, opacity: 0, duration: 0.85 }, 0.1)
        .from(".ad26-lens", { scale: 0.78, opacity: 0, duration: 0.65 }, 0.45);

      gsap.to(".ad26-portrait img", {
        yPercent: 7,
        scale: 1.055,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".ad26-lens", {
        left: "49%", top: "54%",
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.9 },
      });

      gsap.utils.toArray<HTMLElement>(".ad26-situations article").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 67%",
          end: "bottom 38%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        });
      });

      const statement = gsap.timeline({
        scrollTrigger: { trigger: ".ad26-statement", start: "top 76%", end: "bottom 40%", scrub: 0.8 },
      });
      statement
        .fromTo(".ad26-statement-label", { opacity: 0.35 }, { opacity: 1 }, 0)
        .fromTo(".ad26-statement h2", { y: 22, opacity: 0.5 }, { y: 0, opacity: 1 }, 0)
        .fromTo(".ad26-reframe-assumption", { opacity: 0.25 }, { opacity: 0.72 }, 0.08)
        .fromTo(".ad26-reframe-assumption i", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.4 }, 0.2)
        .fromTo(".ad26-reframe-question", { opacity: 0.25 }, { opacity: 1 }, 0.42)
        .fromTo(".ad26-statement-foot", { opacity: 0.25 }, { opacity: 1 }, 0.34);

      gsap.utils.toArray<HTMLElement>(".ad26-signature article").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 62%",
          end: "bottom 40%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        });
      });

      const brief = gsap.timeline({
        scrollTrigger: { trigger: ".ad26-brief", start: "top 82%", toggleActions: "play none none reverse" },
      });
      brief
        .from(".ad26-brief-copy", { y: 18, opacity: 0, duration: 0.55, ease: "power3.out" })
        .from(".ad26-brief-product", { x: 24, opacity: 0, duration: 0.68, ease: "power3.out" }, "-=.34")
        .from(".ad26-brief-row", { opacity: 0, y: 8, stagger: 0.09, duration: 0.36 }, "-=.2");

      const caseSection = document.querySelector<HTMLElement>(".ad26-case");
      const caseItems = gsap.utils.toArray<HTMLElement>(".ad26-case-flow article");
      caseItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 63%",
          end: "bottom 40%",
          onToggle: (self) => {
            item.classList.toggle("is-active", self.isActive);
            if (self.isActive) {
              caseSection?.classList.remove("is-case-1", "is-case-2", "is-case-3");
              caseSection?.classList.add(`is-case-${index + 1}`);
            }
          },
        });
      });

      gsap.from(".ad26-case blockquote", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-case blockquote", start: "top 82%" },
      });

      gsap.from(".ad26-about-portrait", {
        clipPath: "inset(7% 12% 7% 0)",
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-about", start: "top 74%" },
      });

      gsap.to(".ad26-about-portrait img", {
        yPercent: 5,
        scale: 1.04,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-about", start: "top bottom", end: "bottom top", scrub: 0.9 },
      });

      gsap.from(".ad26-contact h2, .ad26-contact>p, .ad26-contact-actions", {
        y: 16,
        opacity: 0,
        stagger: 0.07,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-contact", start: "top 78%" },
      });

      const buttons = gsap.utils.toArray<HTMLElement>(".ad26-primary, .ad26-nav-cta");
      buttons.forEach((button) => {
        const onMove = (event: PointerEvent) => {
          const rect = button.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.055;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.055;
          gsap.to(button, { x, y, duration: 0.22, ease: "power2.out" });
        };
        const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.38, ease: "power2.out" });
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
