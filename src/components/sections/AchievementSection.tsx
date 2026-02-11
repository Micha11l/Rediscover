"use client";

/**
 * Achievement Numbers Section
 * Figma node: 271:7649 "ACHIEVEMENT NUMBERS"
 * Desktop QA baseline: 1440 × 900
 *
 * Layout:
 * - Desktop (>=1024): left heading column + right 2×2 stats grid
 * - <1024: stacks; grid becomes 1-col then 2-col at sm
 *
 * Notes:
 * - Colors use CSS variables from tokens (no raw hex)
 * - Typography uses font-heading / font-body tokens
 */

import { useLanguage } from "@/contexts/LanguageContext";

interface StatItem {
  number: string;
  suffix?: string; // e.g. "/5", "Years"
  label: string;
}

function StatCard({ number, suffix, label }: StatItem) {
  return (
    <div className="w-[260px]">
      {/* Number row */}
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-[60px] font-bold leading-[1.2] text-[color:var(--Primary-Dark)]">
          {number}
        </span>
        {suffix ? (
          <span className="font-heading text-[32px] font-medium leading-[1.1] text-[color:var(--Primary-Dark-20)]">
            {suffix}
          </span>
        ) : null}
      </div>

      {/* Label */}
      <p className="mt-1 font-body text-[20px] font-normal leading-[1.4] text-[color:var(--Secondary)]">
        {label}
      </p>
    </div>
  );
}

export function AchievementSection() {
   const { t } = useLanguage();

   const stats: StatItem[] = t.achievement.stats.map((stat) => {
     // Parse value to extract number and suffix (e.g., "5.0/5" → number: "5.0", suffix: "/5")
     const match = stat.value.match(/^([\d,.]+)(.*)/);
     const number = match ? match[1] : stat.value;
     const suffix = match && match[2] ? match[2] : undefined;

     return {
       number,
       suffix,
       label: stat.label,
     };
   });

   return (
     <section className="w-full" data-testid="achievement">
       {/* Global container rule + Figma paddings */}
       <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px] pt-[100px] pb-[180px]">
         <div className="flex flex-col items-start gap-16 lg:flex-row lg:justify-between lg:gap-[72px]">
           {/* Left column: fixed width on desktop */}
           <div className="w-full lg:w-[381px] lg:min-h-[272px] lg:shrink-0 lg:self-stretch lg:justify-between lg:flex lg:flex-col">
             <h2 className="m-0 font-heading text-[48px] font-medium leading-[1.2] text-text-primary md:text-[60px]">
               {t.achievement.heading}
             </h2>

             {/* Keep desktop readable; do not force nowrap on smaller widths */}
             <p className="mt-6 max-w-[374px] font-body text-[20px] font-normal leading-[1.4] text-[color:var(--Secondary)] lg:mt-0">
               {t.achievement.stats[0].description}
             </p>
           </div>

           {/* Right column: 2×2 grid on desktop; fallback stacking below 1024 */}
           <div className="grid w-full grid-cols-1 gap-y-[72px] sm:grid-cols-2 sm:gap-x-[72px] lg:w-auto">
             {stats.map((s) => (
               <StatCard key={`${s.number}-${s.label}`} {...s} />
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }