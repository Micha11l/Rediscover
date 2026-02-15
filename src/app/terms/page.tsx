import { FooterSection } from "@/components/sections";
import {
  TermsHeroSection,
  TermsContentSection,
  TermsCarePromiseSection,
} from "@/components/sections/terms";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { getLanguage } from "@/lib/i18n";

export default async function TermsPage() {
  const lang = await getLanguage();
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <TermsHeroSection lang={lang} />
      <TermsContentSection lang={lang} />
      <TermsCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
