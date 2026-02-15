"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

/**
 * Navigation links configuration
 * Note: `active` is determined dynamically via usePathname, not hardcoded
 */
const NAV_LINKS = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "services" as const, href: "/services" },
  { key: "devices" as const, href: "/devices" },
  { key: "rmt" as const, href: "/rmt" },
  { key: "faq" as const, href: "/faq" },
  { key: "promo" as const, href: "/promo" },
];

export interface NavbarProps {
  /** Visual variant for different backgrounds */
  variant?: "light" | "dark";
  /** Optional className for additional styling */
  className?: string;
}

/**
 * Reusable Navbar Component
 *
 * Features:
 * - Automatic active state detection via Next.js App Router (usePathname)
 * - Active link indicated by border-bottom (not text-decoration)
 * - Supports light/dark variants for different section backgrounds
 *
 * Usage:
 * ```tsx
 * <Navbar variant="dark" />  // For dark backgrounds (white text)
 * <Navbar variant="light" /> // For light backgrounds (dark text)
 * ```
 */
export function Navbar({ variant = "dark", className = "" }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine if a link is active based on current pathname
  // - Home "/" is active on "/" or "/figma-home" (preview route)
  // - Other routes use strict prefix matching with trailing slash
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/figma-home";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Determine logo source: dark variant uses white logo, light variant uses dark logo
  const logoSrc = variant === "dark"
    ? "/images/2.svg"
    : "/images/1.svg";

  // Color classes based on variant
  const textColor = variant === "dark" ? "text-text-inverse" : "text-text-primary";
  const hoverColor = variant === "dark" ? "hover:text-brand-secondary-light" : "hover:text-brand-secondary";

  return (
    <nav className={`flex h-14 w-full shrink-0 items-center justify-between ${className}`}>
      {/* Logo */}
      <Link href="/" className="shrink-0 no-underline hover:no-underline">
        <Image
          src={logoSrc}
          alt="Rediscover Logo"
          width={64}
          height={56}
          className="h-14 w-16 object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.key}
              href={link.href}
              className={`
                nav-link
                px-0.5 font-heading text-button leading-none
                no-underline hover:no-underline
                transition-colors
                ${textColor}
                ${hoverColor}
                ${active ? "nav-link-active font-semibold" : "font-normal"}
              `}
            >
              {t.nav[link.key]}
            </Link>
          );
        })}
      </div>

       {/* Language Switcher (Desktop) */}
       <div className={`hidden h-8 w-[53px] shrink-0 items-center justify-center gap-1 ${textColor} lg:flex`}>
         <button
           onClick={() => {
             setLanguage("en");
             router.refresh();
           }}
           className={`font-heading text-button leading-none transition-opacity ${language === "en" ? "" : "opacity-50"}`}
           aria-label="Switch to English"
         >
           A
         </button>
         <span className={variant === "dark" ? "text-text-inverse/50" : "text-text-primary/50"}>|</span>
         <button
           onClick={() => {
             setLanguage("zh");
             router.refresh();
           }}
           className={`font-heading text-button leading-none transition-opacity ${language === "zh" ? "" : "opacity-50"}`}
           aria-label="Switch to Chinese"
         >
           文
         </button>
       </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`flex h-10 w-10 items-center justify-center ${textColor} lg:hidden`}
        aria-label="Open menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      <MobileMenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}
