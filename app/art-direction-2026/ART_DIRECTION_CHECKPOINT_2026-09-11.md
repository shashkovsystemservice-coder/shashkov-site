# Art Direction 2026 — checkpoint 2026-09-11

## Production safety
- Do not touch `vshashkov.ru` / main production.
- Work only on branch `art-direction-2026-editorial-intelligence`.
- Route: `/art-direction-2026`.
- Stable branch preview: `https://shashkov-site-git-378c9b-shashkovsystemservice-coders-projects.vercel.app/art-direction-2026`.

## Content architecture — keep
`Hero → Узнали себя? → Симптом ≠ причина → Рабочая логика → Decision Brief → Кейс → Обо мне → Следующий шаг.`

This sequence is methodologically validated. Do not casually rewrite or reorder it.

## Current strategic diagnosis
The current site is professionally readable but still behaves too much like a presentation: one section after another, with limited transformation of the environment. The previous iterations overused section-state switches and text movement; mobile text motion was especially damaging.

### What is now non-negotiable
- Mobile reading geometry is stable. Main text must not jump, slide sideways, scale, or change layout because of scroll state.
- Motion must live primarily in the environment: imagery, masks, field, light, depth, causal lines, shader state, shared-object transitions.
- One memorable interaction is worth more than many fades.
- No generic 3D objects, particles, spheres, tech-grid, glassmorphism, random parallax, purple/blue AI gradients, or decorative Awwwards gimmicks.
- About should be a quiet reset.
- Content clarity and conversion remain primary.

## Governing concept
**SIGNAL → CONSTRAINT → DECISION**

The site should physically perform the consulting method:
1. Noise / uncertainty.
2. Signals appear.
3. Weak explanations lose authority.
4. A real constraint emerges.
5. A test / decision path is formed.
6. Case proves the reframing.
7. Final scene resolves into clarity and action.

## Desired experience architecture
The final site should feel like one continuous digital environment, not eight slides.

- One persistent WebGL / shader world across the whole page.
- DOM text remains real HTML and readable.
- DOM and WebGL share the same scene state.
- Desktop and mobile have separate choreography.
- Desktop may use smooth orchestration; mobile keeps native scroll.
- Three signature moments only:
  1. Hero focus / uncertainty field.
  2. Diagnosis: symptom → constraint.
  3. Case: old question → new question.

## Next technical direction
Move from section toggles to a shared progress model.

Target stack / pattern:
- React / Next.js.
- GSAP ScrollTrigger for scene progress and pinning.
- Optional Lenis later on desktop only, synchronized to GSAP ticker.
- Persistent WebGL layer (raw WebGL now; OGL/Three only if it clearly improves the scene).
- Shader uniforms driven by continuous scene progress.
- Pinned cinematic sequences for Diagnosis, Method/Decision, Case.
- Stable typography, shared transitions, masks, depth and image treatment.

## First prototype to build now
**Diagnosis as a pinned cinematic scene.**

Expected sequence during one pinned scroll span:
- Noise / multiple plausible signals are visible.
- `Мало заявок = нужна реклама` is initially legible.
- The assumption loses authority through strike / blur / contrast, without moving its layout.
- Background signal paths converge into one constraint node.
- `Где находится реальное ограничение?` becomes the dominant stable question.
- The persistent field visually changes from noise to focus.

If this scene does not feel like a different class of website, do not propagate the architecture to the rest of the page.

## Current files after V2 consolidation
The page should rely on a minimal system, not stacked V3/V4/V5/V6/V7/V8 override files.
Core direction:
- `page.tsx`
- `art-direction.css`
- `experience-v2.css`
- `ArtDirectionMotion.tsx`
- `DiagnosticField.tsx`

## Current qualitative benchmark
Approximate current level before the cinematic rebuild:
- Ordinary professional: ~8/10.
- Premium consulting: ~6.5/10.
- Strong creative site: ~5.5/10.
- CSSDA/Awwwards contender: ~5/10.
- World-class winner: ~3.5–4/10.

The gap is not “more animation”. The gap is ownable identity, continuous spatial narrative, semantic motion, and a genuinely crafted interaction system.
