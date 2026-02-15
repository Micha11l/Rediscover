import { FooterSection } from "@/components/sections";
import {
  PrivacyHeroSection,
  PrivacyContentSection,
  PrivacyCarePromiseSection,
} from "@/components/sections/privacy";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { getLanguage } from "@/lib/i18n";

export default async function PrivacyPolicyPage() {
  const lang = await getLanguage();
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <PrivacyHeroSection lang={lang} />
      <PrivacyContentSection lang={lang} />
      <PrivacyCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
