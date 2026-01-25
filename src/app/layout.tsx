import type { Metadata } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauva - Beauty Spa & Wellness",
  description: "Beauva website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${schibstedGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
