# Project Context
You are working inside an existing Next.js + TypeScript + Tailwind v4 project.
Do NOT create a new project. Only modify/add files in this repo.

We are implementing a Figma-designed homepage by sections and composing them in:
- src/app/(preview)/figma-home/page.tsx

The production homepage must NOT be replaced during this phase.

---

# Current Implementation Route (MUST FOLLOW)

## Baseline & QA Mode
- Desktop baseline for pixel QA: **1440 × 900**.
- QA expectation: prioritize matching the 1440 desktop frame first (spacing/typography/layout).
- Responsive is “minimal scaffolding” only during this phase: do not redesign mobile yet.
  - Keep basic stacking rules so the page remains usable when viewport < 1024 (e.g., columns can stack), but do not over-invest in mobile polish.

## Global Container Rule (统一容器规范)
Every section must use the same container padding system and max width:

- max width: max-w-[1440px]
- padding: px-4 md:px-8 lg:px-16 xl:px-[100px]
- vertical padding: follow Figma, typically py-[100px] for major sections

Example:
<div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px] py-[100px]">

## Tailwind & Tokens (STRICT)
- Colors and typography MUST come from the project’s Tailwind tokens / CSS variables.
- Avoid scattering random hex values. If a specific Figma color is needed, map it to an existing token or extend tokens properly.
- Avoid arbitrary fractional pixels and odd sizes (e.g., 13.7px). Spacing/size should align to 4px/8px rhythm.
  - Exception: if Figma uses a hard value critical to layout (rare), use the closest 4/8 value and note the deviation.

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

## Desktop-first Behavior (important)
- Desktop (>= 1024): must match Figma’s desktop layout.
- Tablet/mobile: allow stacking/fallback layout, but do NOT introduce new design decisions unless explicitly requested.

## Stability / Avoid Breaking Other Sections
- Do not change tailwind config / globals unless asked.
- Do not refactor previously completed sections unless the current task requires it.
- Do not introduce new dependencies.

---

# What We’ve Standardized So Far
- We are using the shared container padding rule across sections.
- We are targeting 1440×900 for pixel QA.
- We keep the preview page at /figma-home as the assembly page.

---

# Next Section Queue
Current next target: **Achievement Numbers** section.
The TSX file already exists; update it based on MCP extracted data and wire it into preview page.