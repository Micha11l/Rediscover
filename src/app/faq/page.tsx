import { FooterSection } from "@/components/sections";
import {
  FaqPageHeroSection,
  FaqPageListSection,
  FaqPageCarePromiseSection,
} from "@/components/sections/faq";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default function FaqPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <FaqPageHeroSection />
      <FaqPageListSection />
      <FaqPageCarePromiseSection />
      <FooterSection />
    </main>
  );
}
