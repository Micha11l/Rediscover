import { cookies } from "next/headers";
import type { Language } from "@/i18n/types";

/**
 * Async — call ONLY in page.tsx or layout.tsx (server context with async allowed)
 * Reads the "lang" cookie, defaults to "en"
 */
export async function getLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value;
  return lang === "zh" ? "zh" : "en";
}

/**
 * Sync — call in ANY server component. Selects en/zh content based on lang prop.
 * This is a pure function, no async, no side effects.
 */
export function pickContent<T>(content: { en: T; zh: T }, lang: Language): T {
  return content[lang];
}
