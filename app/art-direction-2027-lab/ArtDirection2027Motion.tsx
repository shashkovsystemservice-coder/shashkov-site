"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./production-map.css";

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

  return null;
}
