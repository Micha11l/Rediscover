import { getLanguage } from "@/lib/i18n";
import { FooterSection } from "@/components/sections";
import {
  FaqPageHeroSection,
  FaqPageListSection,
  FaqPageCarePromiseSection,
} from "@/components/sections/faq";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default async function FaqPage() {
  const lang = await getLanguage();

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <FaqPageHeroSection lang={lang} />
      <FaqPageListSection lang={lang} />
      <FaqPageCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
