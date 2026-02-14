"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutNewsletterSection() {
  const { newsletter } = aboutCopy;
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section data-testid="about-newsletter" className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src={newsletter.backgroundImage.src}
          alt={newsletter.backgroundImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 xl:px-[100px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <h2 className="m-0 font-heading text-[32px] font-medium leading-[1.1] text-white md:text-[40px] lg:text-[48px]">
              {newsletter.title}
            </h2>
            <p className="m-0 mx-auto max-w-[600px] font-body text-[16px] leading-[1.5] text-white/90 md:text-[18px]">
              {newsletter.subtitle}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[500px] flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              required
              className="grow rounded-full bg-white px-6 py-4 font-body text-[16px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-primary px-8 py-4 font-heading text-[14px] font-medium uppercase leading-none tracking-wider text-text-inverse transition-colors hover:bg-brand-primary/90"
            >
              {newsletter.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
