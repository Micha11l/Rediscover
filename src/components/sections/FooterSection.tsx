"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const ICON_SIZE = 20; // 20px = size-5

/**
 * Footer Section
 * Figma node: 350:3334 "FOOTER"
 * Desktop QA: 1440 × 493px
 * Composition: Body + Copyright bar
 *
 * Icons source:
 * public/images/icon/Phone.svg
 * public/images/icon/EnvelopeOpen.svg
 * public/images/icon/MapPinLine.svg
 * public/images/icon/InstagramLogo.svg
 * public/images/icon/ic_baseline-tiktok.svg
 */
export function FooterSection() {
  const { t } = useLanguage();
  return (
    <footer className="w-full bg-surface-base" data-testid="footer">
      {/* Global container */}
       <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-20 px-4 pb-8 pt-10 md:pt-12 lg:pt-[60px] md:px-8 lg:px-16 xl:px-[100px]">
        {/* Body */}
        <div className="flex flex-col gap-12 lg:min-h-[284px] lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {/* LEFT BLOCK */}
          <div className="flex flex-col gap-6 lg:h-full lg:w-[387px] lg:justify-between">
            {/* Logo + Brand */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/1.svg"
                alt="Rediscover Beauty"
                width={68}
                height={60}
                priority
              />
              <h2 className="m-0 font-heading text-[24px] font-medium leading-[1.1] text-text-primary">
                {t.footer.brandName}
              </h2>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col gap-6">
               <h3 className="m-0 font-heading text-[16px] font-medium leading-none text-brand-secondary">
                 {t.footer.sections.businessHours}
               </h3>
              <p className="m-0 font-body text-[16px] font-normal leading-[1.6] text-brand-secondary">
                Monday - Sunday: 10.00am - 8.00pm
              </p>
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-[108px]">
            {/* Menu */}
            <div className="flex flex-col gap-[32px]">
               <h3 className="m-0 font-heading text-[16px] font-medium leading-none text-brand-secondary">
                 {t.footer.sections.menu}
               </h3>

               <nav className="flex flex-col gap-[12px]">
                 {[
                   { href: "/", idx: 0 },
                   { href: "/about", idx: 1 },
                   { href: "/services", idx: 2 },
                   { href: "/devices", idx: 3 },
                   { href: "/rmt", idx: 4 },
                   { href: "/faq", idx: 5 },
                   { href: "/promo", idx: 6 },
                 ].map(({ href, idx }) => (
                   <Link
                     key={href}
                     href={href}
                     className="py-[4px] font-heading text-[16px] font-normal leading-none text-text-primary transition-colors hover:text-brand-secondary"
                   >
                     {t.footer.menuLinks[idx]}
                   </Link>
                 ))}
               </nav>
            </div>

            {/* Contact */}
            <div className="flex w-full flex-col gap-8 lg:w-[209px]">
               <h3 className="m-0 font-heading text-[16px] font-medium leading-none text-brand-secondary">
                 {t.footer.sections.contactUs}
               </h3>

              <div className="flex flex-col gap-5">
                {/* Phone */}
                <a
                  href="tel:+16475233988"
                  className="flex items-center gap-2 font-body text-[16px] font-normal leading-none text-text-primary transition-colors hover:text-brand-secondary"
                >
                  <Image
                    src="/images/icon/Phone.svg"
                    alt=""
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="shrink-0"
                    aria-hidden={true}
                  />
                  <span>+1 (647) 523-3988</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@rediscoverbeauty.ca"
                  className="flex items-center gap-2 font-body text-[16px] font-normal leading-none text-text-primary transition-colors hover:text-brand-secondary"
                >
                  <Image
                    src="/images/icon/EnvelopeOpen.svg"
                    alt=""
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="shrink-0"
                    aria-hidden={true}
                  />
                  <span className="break-all">info@rediscoverbeauty.ca</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-2">
                  <Image
                    src="/images/icon/MapPinLine.svg"
                    alt=""
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="mt-[2px] shrink-0"
                    aria-hidden={true}
                  />
                  <address className="m-0 not-italic font-body text-[16px] font-normal leading-[1.6] text-text-primary">
                    9425 Leslie St Unit14, 2F,
                    <br />
                    Richmond Hill, ON L4B 3N7
                  </address>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-2 pt-2">
                <a
                  href="https://www.instagram.com/rediscoverbeauty99?igsh=MXZ1NmluZG9tcDg4Yg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-surface-muted p-3 transition-colors hover:bg-brand-secondary-light"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/icon/InstagramLogo.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden={true}
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@rediscoverbeauty?_r=1&_t=ZS-93OobkntZmG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-surface-muted p-3 transition-colors hover:bg-brand-secondary-light"
                  aria-label="TikTok"
                >
                  <Image
                    src="/images/icon/ic_baseline-tiktok.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden={true}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="flex w-full flex-wrap items-end justify-between gap-6 border-t-[0.5px] border-brand-secondary-light pt-6"
          data-testid="footer-copyright"
        >
           <p className="m-0 font-body text-[14px] font-normal leading-none text-text-primary">
             {t.footer.copyright}
           </p>

           <div className="flex items-center gap-10">
             <Link
               href="/privacy-policy"
               className="font-body text-[14px] font-normal leading-none text-text-primary transition-colors hover:text-brand-secondary"
             >
               {t.footer.legalLinks[0]}
             </Link>
             <Link
               href="/terms"
               className="font-body text-[14px] font-normal leading-none text-text-primary transition-colors hover:text-brand-secondary"
             >
               {t.footer.legalLinks[1]}
             </Link>
           </div>
        </div>
      </div>
    </footer>
  );
}