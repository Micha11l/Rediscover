import { FooterSection } from "@/components/sections";
import {
  DevicesHeroSection,
  DeviceTechnologySection,
  DevicesCtaSection,
  DevicesCarePromiseSection,
} from "@/components/sections/devices";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { devicesContent } from "@/content/devicesCopy";
import { getLanguage, pickContent } from "@/lib/i18n";

export default async function DevicesPage() {
  const lang = await getLanguage();
  const copy = pickContent(devicesContent, lang);

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <DevicesHeroSection lang={lang} />

      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <p className="m-0 text-center font-body text-body leading-[1.6] text-brand-secondary">
          {copy.intro}
        </p>
      </div>

      {copy.technologies.map((tech, i) => (
        <DeviceTechnologySection
          key={tech.id}
          technology={tech}
          lang={lang}
          showDivider={i < copy.technologies.length - 1}
        />
      ))}

      <DevicesCtaSection lang={lang} />
      <DevicesCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
