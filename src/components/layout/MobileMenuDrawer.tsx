"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`
          fixed right-0 top-0 z-50 flex h-full w-[85vw] max-w-[360px]
          flex-col border-l border-surface-muted bg-surface-base shadow-2xl
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between px-8 pb-2 pt-6">
          <Image
            src="/images/1.svg"
            alt="Beauva"
            width={100}
            height={28}
            style={{ width: "auto", height: "28px" }}
          />
          <button
            onClick={onClose}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border-none bg-transparent text-brand-secondary outline-none"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-8 pt-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                onClick={onClose}
                className={`
                  rounded-lg px-4 py-3 font-heading text-xl no-underline
                  transition-colors
                  ${
                    active
                      ? "bg-surface-muted font-semibold text-brand-secondary"
                      : "text-text-primary hover:bg-surface-muted/60"
                  }
                `}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="px-8 pb-10 pt-6">
          <div className="flex rounded-full bg-surface-muted p-1">
            <button
              onClick={() => {
                setLanguage("en");
                router.refresh();
              }}
              className={`
                flex-1 cursor-pointer rounded-full border-none py-2.5 text-sm font-medium
                outline-none transition-all duration-200
                ${
                  language === "en"
                    ? "bg-brand-secondary text-text-inverse shadow-sm"
                    : "bg-transparent text-text-primary"
                }
              `}
              aria-label="Switch to English"
            >
              English
            </button>
            <button
              onClick={() => {
                setLanguage("zh");
                router.refresh();
              }}
              className={`
                flex-1 cursor-pointer rounded-full border-none py-2.5 text-sm font-medium
                outline-none transition-all duration-200
                ${
                  language === "zh"
                    ? "bg-brand-secondary text-text-inverse shadow-sm"
                    : "bg-transparent text-text-primary"
                }
              `}
              aria-label="Switch to Chinese"
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
