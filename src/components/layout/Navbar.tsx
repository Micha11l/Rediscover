"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navigation links configuration
 * Note: `active` is determined dynamically via usePathname, not hardcoded
 */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Devices", href: "/devices" },
  { label: "RMT", href: "/rmt" },
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

  // Determine if a link is active based on current pathname
  // - Home "/" is active on "/" or "/figma-home" (preview route)
  // - Other routes use strict prefix matching with trailing slash
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/figma-home";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Check if on Anti-Aging page for special logo
  const isAntiAgingPage = pathname === "/services/anti-aging" || pathname.startsWith("/services/anti-aging/");

  // Determine logo source: Anti-Aging page uses special logo, others follow variant
  const logoSrc = isAntiAgingPage
    ? "/images/about-logo.png"
    : variant === "dark"
      ? "/images/logo.png"
      : "/images/logo-dark.png";

  // Color classes based on variant
  const textColor = variant === "dark" ? "text-text-inverse" : "text-text-primary";
  const hoverColor = variant === "dark" ? "hover:text-brand-secondary-light" : "hover:text-brand-secondary";

  return (
    <nav className={`flex h-14 w-full shrink-0 items-center justify-between ${className}`}>
      {/* Logo */}
      <Link href="/" className="shrink-0 no-underline hover:no-underline">
        <Image
          src={logoSrc}
          alt="Beauva Logo"
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
              key={link.label}
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
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Language Switcher (Desktop) */}
      <div className={`hidden h-8 w-[53px] shrink-0 items-center justify-center gap-1 ${textColor} lg:flex`}>
      <span className="font-heading text-button leading-none">A</span>
        <span className={variant === "dark" ? "text-text-inverse/50" : "text-text-primary/50"}>|</span>
        <span className="font-heading text-button leading-none opacity-50">文</span>
      </div>

      {/* Mobile Menu Button */}
      <button
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
    </nav>
  );
}
