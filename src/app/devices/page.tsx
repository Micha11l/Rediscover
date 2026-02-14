import { FooterSection } from "@/components/sections";
import {
  DevicesHeroSection,
  DeviceTechnologySection,
  DevicesCtaSection,
  DevicesCarePromiseSection,
} from "@/components/sections/devices";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { devicesCopy } from "@/content/devicesCopy";

export default function DevicesPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <DevicesHeroSection />

      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <p className="m-0 text-center font-body text-body leading-[1.6] text-brand-secondary">
          We use FDA- and Health Canada–approved technologies to deliver safe, precise,
          <br />
          and results-driven aesthetic treatments.
        </p>
      </div>

      {devicesCopy.technologies.map((tech, i) => (
        <DeviceTechnologySection
          key={tech.id}
          technology={tech}
          showDivider={i < devicesCopy.technologies.length - 1}
        />
      ))}

      <DevicesCtaSection />
      <DevicesCarePromiseSection />
      <FooterSection />
    </main>
  );
}
