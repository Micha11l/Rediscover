import { FooterSection } from "@/components/sections";
import {
  PrivacyHeroSection,
  PrivacyContentSection,
  PrivacyCarePromiseSection,
} from "@/components/sections/privacy";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <PrivacyHeroSection />
      <PrivacyContentSection />
      <PrivacyCarePromiseSection />
      <FooterSection />
    </main>
  );
}
