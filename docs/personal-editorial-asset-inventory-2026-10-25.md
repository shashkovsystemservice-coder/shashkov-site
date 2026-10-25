# Personal editorial — verified visual-source inventory (2026-10-25)

Scope: experimental branch `design/personal-editorial-v2`; source of truth for asset readiness, **not** a declaration that files are approved for publishing.

## Audit outcome
A successful Vercel deployment / HTML output is not evidence of visual quality or that all source assets exist. The current portfolio still includes rendered textual representations and should not be called real screenshots.

| Page zone | Source verified | Status / production action |
|---|---|---|
| Founder portrait | Repository static image `/about-photo.webp` used by `app/components/PersonalProfile.tsx` on both locales | Already live in preview; image is real, single available portrait confirmed. Other founder photographs not found via Drive title search for “Шашков” or “portrait”. Do not manufacture portraits. |
| Marketing Studio | Existing live routes `/ru/startup-next`, `/es/startup-next` confirmed HTTP 200 in preview | Public-facing live project; use an explicitly captured approved screenshot or curated extract instead of the iframe currently nested into founder page. |
| Research System / competitive intelligence | CURVASER independent research `https://drive.google.com/file/d/1mdHg4b7RmP2fipKupODPrRbYWBZdQpJF/view` | Actual raw research exists, but this is not verified as an approved published report or a client case. Prepare sanitized, fact-checked excerpt before using an image. Do not copy a confidential internal page directly. |
| Research Harness | `https://docs.google.com/document/d/1Hjgh_i3C2yJUQlvBkwnz_ipGbPCQJ8hcIYku2MZna68/edit` | Real methodology navigator; internal document. Prepare a separately curated non-confidential visual sample, with no false production-status claim. |
| PERSONA / PBOS | `https://docs.google.com/document/d/1LA-gHHH8NaeROWs62sQgKdPd3lMsxwwXnKI6M3NH6mI/edit` | Personal brand methodology master document known; need a specific approved excerpt and publication review. |
| Marketing manuscripts / Igor Mann | `https://docs.google.com/document/d/1FSpo0FmP_a93WbmngEInGKePu2E5q7tKNKRM4uZt5H8/edit` | Real knowledge collection; not automatically a published book, and not suitable to show as a finished book cover. |
| Marketing knowledge map | Search revealed navigation and working research documents, but no verified publishable full-resolution map visual | Asset missing; locate the actual visual or produce an explicitly labeled excerpt based on approved data. |
| SEO examples | Real reports exist across projects; no single public-approved visual selected | Select a real screenshot and remove identifiers as necessary. |

## Artistic direction — guardrails
- Real portrait, real screenshots, approved document excerpts; no fabricated proof, invented client status, or stock portraits of the founder.
- Preserve page section order and three venture order **Marketing Studio → Research System → PERSONA**.
- Avoid new generic cards or decorative pseudo-documents. The next implementation should use actual source visuals, not more CSS illustrations.
- Keep `main` untouched; the source proof library and future visual changes stay on this branch.
- The independent CURVASER study must not be presented as a paid customer project.
- Do not expose internal Google Drive documents to anonymous site visitors merely by embedding a private file URL.

## Next implementation checklist
1. Confirm a public-use image set (one founder portrait available; additional photos not verified).
2. Capture an approved static screenshot of the startup page; eliminate its nested iframe for better visual quality.
3. Prepare visual crops of non-confidential Research System / PERSONA / CI excerpts.
4. Replace placeholders only when assets are ready and check actual phone/desktop render, not merely HTML response.
