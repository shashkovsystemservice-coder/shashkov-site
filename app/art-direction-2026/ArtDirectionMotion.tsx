"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ArtDirectionMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".ad26-nav", { y: -28, opacity: 0, duration: 0.55 })
        .from(".ad26-hero .ad26-kicker", { y: 18, opacity: 0, duration: 0.45 }, "-=.2")
        .from(".ad26-hero h1", { yPercent: 14, opacity: 0, duration: 0.8 }, "-=.18")
        .from(".ad26-hero-bottom", { y: 24, opacity: 0, duration: 0.6 }, "-=.35")
        .from(".ad26-hero-proof", { y: 16, opacity: 0, duration: 0.45 }, "-=.3")
        .from(".ad26-portrait", { clipPath: "inset(6% 7% 7% 6%)", scale: 1.045, opacity: 0, duration: 1.05 }, 0.15);

      gsap.to(".ad26-portrait img", {
        yPercent: 7,
        scale: 1.055,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.7 },
      });

      const recognitionItems = gsap.utils.toArray<HTMLElement>(".ad26-situations article");
      recognitionItems.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 64%",
          end: "bottom 40%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        });
      });

      const routes = gsap.utils.toArray<SVGPathElement>(".df-route");
      routes.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      const statement = gsap.timeline({
        scrollTrigger: {
          trigger: ".ad26-statement",
          start: "top 76%",
          end: "bottom 36%",
          scrub: 0.65,
        },
      });
      statement
        .fromTo(".ad26-statement-label", { x: -18, opacity: 0.3 }, { x: 0, opacity: 1 }, 0)
        .fromTo(".ad26-statement h2", { y: 58, opacity: 0.38 }, { y: 0, opacity: 1 }, 0)
        .fromTo(".df-caption", { opacity: 0, y: 4 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.22 }, 0.02)
        .fromTo(".df-points circle:not(.df-point-output)", { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, stagger: 0.05, duration: 0.22 }, 0.04)
        .to(".df-inputs .df-route", { strokeDashoffset: 0, stagger: 0.08, duration: 0.55, ease: "none" }, 0.08)
        .fromTo(".df-focus-halo", { scale: 0.55, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.28 }, 0.33)
        .fromTo(".df-focus-ring", { scale: 0.6, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.25 }, 0.38)
        .fromTo(".df-focus-core", { scale: 0, transformOrigin: "center" }, { scale: 1, duration: 0.2 }, 0.42)
        .to(".df-output .df-route", { strokeDashoffset: 0, stagger: 0.06, duration: 0.52, ease: "none" }, 0.46)
        .fromTo(".df-point-output", { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.22 }, 0.66)
        .fromTo(".ad26-statement-foot", { y: 36, opacity: 0.15 }, { y: 0, opacity: 1 }, 0.34);

      gsap.to(".df-focus-ring", {
        scale: 1.11,
        opacity: 0.34,
        transformOrigin: "center",
        repeat: -1,
        yoyo: true,
        duration: 1.9,
        ease: "sine.inOut",
      });

      const methodItems = gsap.utils.toArray<HTMLElement>(".ad26-signature article");
      methodItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 42%",
          onToggle: (self) => {
            item.classList.toggle("is-active", self.isActive);
            if (self.isActive) {
              const progress = ((index + 1) / methodItems.length) * 100;
              const parent = item.parentElement;
              parent?.style.setProperty("--method-progress", `${progress}%`);
            }
          },
        });
      });

      const brief = gsap.timeline({
        scrollTrigger: { trigger: ".ad26-brief", start: "top 80%", toggleActions: "play none none reverse" },
      });
      brief
        .from(".ad26-brief-copy", { y: 28, opacity: 0, duration: 0.65, ease: "power3.out" })
        .from(".ad26-brief-product", { x: 36, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=.42")
        .to(".ad26-brief-row", { opacity: 1, y: 0, stagger: 0.11, duration: 0.34, ease: "power2.out" }, "-=.24");

      const caseItems = gsap.utils.toArray<HTMLElement>(".ad26-case-flow article");
      caseItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 62%",
          end: "bottom 42%",
          onToggle: (self) => {
            item.classList.toggle("is-active", self.isActive);
            if (self.isActive) {
              const progress = ((index + 1) / caseItems.length) * 100;
              item.parentElement?.style.setProperty("--case-progress", `${progress}%`);
            }
          },
        });
      });

      gsap.from(".ad26-case blockquote", {
        y: 32,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-case blockquote", start: "top 82%" },
      });

      gsap.from(".ad26-about-portrait", {
        clipPath: "inset(10% 18% 10% 0)",
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-about", start: "top 72%" },
      });

      gsap.to(".ad26-about-portrait img", {
        yPercent: 6,
        scale: 1.04,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-about", start: "top bottom", end: "bottom top", scrub: 0.8 },
      });

      gsap.from(".ad26-contact h2, .ad26-contact>p, .ad26-contact-actions", {
        y: 34,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-contact", start: "top 76%" },
      });

      const buttons = gsap.utils.toArray<HTMLElement>(".ad26-primary, .ad26-nav-cta");
      buttons.forEach((button) => {
        const onMove = (event: PointerEvent) => {
          if (window.matchMedia("(pointer: coarse)").matches) return;
          const rect = button.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
          gsap.to(button, { x, y, duration: 0.25, ease: "power2.out" });
        };
        const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, .35)" });
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
