"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_LINKS = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "services" as const, href: "/services" },
  { key: "devices" as const, href: "/devices" },
  { key: "rmt" as const, href: "/rmt" },
  { key: "faq" as const, href: "/faq" },
  { key: "promo" as const, href: "/promo" },
];

export interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/figma-home";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`
          fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-xl
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex h-14 items-center justify-end px-4">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-text-primary"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                onClick={onClose}
                className={`
                  border-b border-border-subtle py-4
                  font-heading text-lg no-underline
                  transition-colors hover:text-brand-secondary
                  ${active ? "font-semibold text-brand-secondary" : "text-text-primary"}
                `}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="flex items-center justify-center gap-4 rounded-lg bg-surface-secondary py-3">
            <button
              onClick={() => setLanguage("en")}
              className={`
                font-heading text-lg transition-opacity
                ${language === "en" ? "text-text-primary" : "text-text-primary/50"}
              `}
              aria-label="Switch to English"
            >
              A
            </button>
            <span className="text-text-primary/30">|</span>
            <button
              onClick={() => setLanguage("zh")}
              className={`
                font-heading text-lg transition-opacity
                ${language === "zh" ? "text-text-primary" : "text-text-primary/50"}
              `}
              aria-label="Switch to Chinese"
            >
              文
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
