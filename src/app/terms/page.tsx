import { FooterSection } from "@/components/sections";
import {
  TermsHeroSection,
  TermsContentSection,
  TermsCarePromiseSection,
} from "@/components/sections/terms";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <TermsHeroSection />
      <TermsContentSection />
      <TermsCarePromiseSection />
      <FooterSection />
    </main>
  );
}
