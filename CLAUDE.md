# Project Context
You are working inside an existing Next.js + TypeScript + Tailwind v4 project.
Do NOT create a new project. Only modify/add files in this repo.

We are implementing a Figma-designed homepage by sections and composing them in:
- src/app/(preview)/figma-home/page.tsx

The production homepage must NOT be replaced during this phase.

---

# Current Implementation Route (MUST FOLLOW)

## Baseline & QA Mode
- Pixel-perfect 1440 is NOT required. Prioritize production-grade responsiveness (mobile → ultra-wide).
- Validate at widths: 375, 414, 768, 1024, 1280, 1440, 1536, 1920, and split-view 700–900.
- Mobile-first layout with progressive enhancement at sm/md/lg/xl/2xl.
- Ensure no horizontal scroll on mobile.

## Global Container Rule (统一容器规范)
Every section must use the same responsive container contract:

- outer: section.w-full
- inner: mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12
- vertical spacing: responsive scale (e.g., py-12 sm:py-16 lg:py-24), avoid fixed py-[100px]

Example:
<div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12 py-12 sm:py-16 lg:py-24">

## Tailwind & Tokens (STRICT)
- Colors and typography MUST come from the project’s Tailwind tokens / CSS variables.
- Avoid scattering random hex values. If a specific Figma color is needed, map it to an existing token or extend tokens properly.
- Avoid arbitrary fractional pixels and odd sizes (e.g., 13.7px). Spacing/size should align to 4px/8px rhythm.
  - Exception: if Figma uses a hard value critical to layout (rare), use the closest 4/8 value and note the deviation.
- Typography must scale with breakpoints; avoid fixed px sizes that break flow on small screens.

## Responsive Rules (Authoritative)
- Grid: mobile-first stacking (grid-cols-1) → sm:grid-cols-2 → lg:grid-cols-3/4 as needed.
- Avoid layout-locking fixed sizes: no max-w-[1440px] or container w-[NNNpx] for layout.
- If fixed sizes are necessary (decorative or media), provide breakpoint fallbacks (e.g., w-full max-w-* or aspect-*).
- Media: use responsive containers and `sizes` for next/image; avoid fixed display widths without fallbacks.

## Layout Constraints
- Prefer flex/grid. Avoid absolute positioning except for:
  - background images/overlays
  - small decorative elements
- For Next/Image with `fill`, the parent wrapper MUST have an explicit height and `position: relative`.
  - Goal: no “height value of 0” warnings.

## Section Workflow (One section per change)
For each step:
1) Use MCP to extract the Figma section’s key data.
2) Implement the section component in src/components/sections/<SectionName>.tsx
3) Export it in src/components/sections/index.ts
4) Mount it in src/app/(preview)/figma-home/page.tsx
5) Provide a small DevTools verification script (optional but helpful)

Output format required in every response:
- “Changed files list”
- Full content of each changed file (no diffs only)

## Naming / Wiring Rules
- Each section root should include a stable hook:
  - data-testid="<section-id>"
- Keep filenames and exports consistent:
  - component file name matches export name
  - index.ts re-exports the correct symbol

## Responsive Behavior (important)
- Preserve design intent, but prioritize real-world responsiveness over pixel-perfect matching.
- Use progressive enhancement from mobile to desktop/ultra-wide.
- Avoid introducing new visual concepts unless requested.

## Stability / Avoid Breaking Other Sections
- Do not change tailwind config / globals unless asked.
- Do not refactor previously completed sections unless the current task requires it.
- Do not introduce new dependencies.

---

# What We’ve Standardized So Far
- Shared responsive container contract across sections.
- Preview page remains at /figma-home as the assembly page.

---

# Next Section Queue
Current next target: **Achievement Numbers** section.
The TSX file already exists; update it based on MCP extracted data and wire it into preview page.
