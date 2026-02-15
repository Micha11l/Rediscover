"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language, Translations } from "@/i18n/types";
import { en } from "@/i18n/en";
import { zh } from "@/i18n/zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Browser detection and localStorage restoration on mount
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    let lang: Language;
    if (saved) {
      lang = saved;
    } else {
      const browserLang = navigator.language || "en";
      lang = browserLang.startsWith("zh") ? "zh" : "en";
    }
    setLanguageState(lang);
    // Sync cookie for server components
    document.cookie = `lang=${lang};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    setMounted(true);
  }, []);

  // Persist language to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    // Sync cookie for server components
    document.cookie = `lang=${newLanguage};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
  };

  const translations: Translations = language === "zh" ? zh : en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return sensible defaults instead of throwing
    return {
      language: "en",
      setLanguage: () => {},
      t: en,
    };
  }
  return context;
}
