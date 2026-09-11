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
        .from(".ad26-hero h1", { yPercent: 16, opacity: 0, duration: 0.8 }, "-=.18")
        .from(".ad26-hero-bottom", { y: 24, opacity: 0, duration: 0.6 }, "-=.35")
        .from(".ad26-hero-proof", { y: 16, opacity: 0, duration: 0.45 }, "-=.3")
        .from(".ad26-portrait", { clipPath: "inset(7% 8% 8% 7%)", scale: 1.05, opacity: 0, duration: 1.05 }, 0.15)
        .from(".ad26-signal-map", { opacity: 0, scale: 0.82, rotate: -7, duration: 1.2 }, 0.25);

      gsap.to(".ad26-portrait img", {
        yPercent: 8,
        scale: 1.06,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.7 },
      });

      gsap.to(".ad26-signal-map", {
        rotate: 8,
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: ".ad26-hero", start: "top top", end: "bottom top", scrub: 0.7 },
      });

      gsap.utils.toArray<HTMLElement>(".ad26-situations article, .ad26-signature article, .ad26-case-flow article").forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%", toggleActions: "play none none reverse" },
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
          start: "top 78%",
          end: "bottom 35%",
          scrub: 0.65,
        },
      });
      statement
        .fromTo(".ad26-statement-label", { x: -20, opacity: 0.3 }, { x: 0, opacity: 1 }, 0)
        .fromTo(".ad26-statement h2", { y: 68, opacity: 0.35 }, { y: 0, opacity: 1 }, 0)
        .fromTo(".df-points circle:not(.df-point-output)", { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, stagger: 0.05, duration: 0.22 }, 0.04)
        .to(".df-inputs .df-route", { strokeDashoffset: 0, stagger: 0.08, duration: 0.55, ease: "none" }, 0.08)
        .fromTo(".df-focus-halo", { scale: 0.55, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.28 }, 0.33)
        .fromTo(".df-focus-ring", { scale: 0.6, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.25 }, 0.38)
        .fromTo(".df-focus-core", { scale: 0, transformOrigin: "center" }, { scale: 1, duration: 0.2 }, 0.42)
        .to(".df-output .df-route", { strokeDashoffset: 0, stagger: 0.06, duration: 0.52, ease: "none" }, 0.46)
        .fromTo(".df-point-output", { scale: 0, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 0.22 }, 0.66)
        .fromTo(".ad26-statement-foot", { y: 42, opacity: 0.15 }, { y: 0, opacity: 1 }, 0.34);

      gsap.to(".df-scan", {
        rotate: 360,
        transformOrigin: "320px 180px",
        repeat: -1,
        duration: 7,
        ease: "none",
      });

      gsap.to(".df-focus-ring", {
        scale: 1.14,
        opacity: 0.32,
        transformOrigin: "center",
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
      });

      const methodItems = gsap.utils.toArray<HTMLElement>(".ad26-signature article");
      methodItems.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 58%",
          end: "bottom 42%",
          onToggle: (self) => item.classList.toggle("is-active", self.isActive),
        });
      });

      gsap.from(".ad26-brief", {
        clipPath: "inset(7% 4% 7% 4%)",
        scale: 0.975,
        opacity: 0.35,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ad26-brief", start: "top 82%", toggleActions: "play none none reverse" },
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
