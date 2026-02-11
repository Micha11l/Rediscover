/**
 * Skin Care & Wellness Treatment Copy
 *
 * Centralized content module for Skin Care & Wellness sections.
 */

import type { TestimonialItem } from "@/components/sections/service-detail";

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type FacialTreatment = {
  id: string;
  title: string;
  effect: string;
  duration: string;
  vipPrice: string;
  regPrice: string;
};

export type WellnessTreatmentDuration = {
  id: string;
  title: string;
  effect: string;
  type: "duration";
  pricing: Array<{ duration: string; price: string }>;
  image?: { src: string; alt: string };
};

export type WellnessTreatmentVipReg = {
  id: string;
  title: string;
  effect: string;
  type: "vip-reg";
  vipPrice: string;
  regPrice: string;
};

export type WellnessTreatment = WellnessTreatmentDuration | WellnessTreatmentVipReg;

export type SkinCareCopy = {
  hero: {
    title: string;
    subtitle: string;
    breadcrumbLabel: string;
    image: { src: string; alt: string };
  };
  aboutSkinCare: {
    titleAccent: string;
    titlePrimary: string;
    paragraphs: Paragraph[];
  };
  aboutWellness: {
    titleAccent: string;
    titlePrimary: string;
    paragraphs: Paragraph[];
  };
  facialTreatments: FacialTreatment[];
  wellnessTreatments: WellnessTreatment[];
  testimonials: TestimonialItem[];
  faq: {
    items: Array<{ id: string; question: string; answer: string }>;
  };
  cta: {
    title: string;
    titleParts: { primary: string; accent: string };
    body: string;
    buttonText: string;
    image: { src: string; alt: string };
  };
  carePromise: {
    title: string;
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

export const skinCareCopy: SkinCareCopy = {
  hero: {
    title: "Skin Care & Wellness",
    subtitle:
      "Personalized skin care and wellness treatments designed to nourish, restore, and maintain healthy skin.",
    breadcrumbLabel: "Skin Care & Wellness",
    image: {
      src: "/images/skincare/hero.png",
      alt: "Skin care and wellness treatment",
    },
  },

  aboutSkinCare: {
    titleAccent: "About",
    titlePrimary: "Skin Care Service",
    paragraphs: [
      {
        text: "Our skin care services focus on restoring skin health through gentle, effective, and personalized facial treatments.",
      },
      {
        text: "From deep hydration and oxygen therapy to calming and detoxifying facials, our treatments combine professional techniques with carefully selected products to address common concerns such as dryness, dullness, congestion, and sensitivity.",
      },
      {
        text: "All skin care services are customized based on individual skin conditions and needs, offering a relaxing experience with visible improvements and no downtime.",
      },
    ],
  },

  aboutWellness: {
    titleAccent: "About",
    titlePrimary: "Wellness",
    paragraphs: [
      {
        text: "Our wellness services focus on relaxation, circulation support, and overall body balance through gentle, hands-on treatments. Designed to relieve tension, reduce fluid buildup, and promote lymphatic flow, these treatments support both physical comfort and skin vitality.",
      },
      {
        text: "Each session is tailored to individual needs, offering a calming experience with visible rejuvenation and no downtime.",
      },
    ],
  },

  facialTreatments: [
    {
      id: "facial-ultra-boosting",
      title: "Ultra Boosting",
      effect:
        "Deeply boosts skin vitality and firmness, helping tired skin look plumper and more refreshed.",
      duration: "90 mins",
      vipPrice: "$128",
      regPrice: "$198",
    },
    {
      id: "facial-hydration",
      title: "Hydration",
      effect:
        "Intensely replenishes moisture to improve dryness, smooth texture, and restore a healthy glow.",
      duration: "90 mins",
      vipPrice: "$98",
      regPrice: "$138",
    },
    {
      id: "facial-oxygen",
      title: "Oxygen",
      effect:
        "Revitalizes dull, stressed skin by improving circulation and enhancing skin brightness and clarity.",
      duration: "90 mins",
      vipPrice: "$138",
      regPrice: "$168",
    },
    {
      id: "facial-dewy-glow",
      title: "Dewy Glow Facial",
      effect:
        "Enhances radiance and skin smoothness for a luminous, dewy complexion.",
      duration: "90 mins",
      vipPrice: "$168",
      regPrice: "$228",
    },
    {
      id: "facial-detoxing",
      title: "Detoxing Facial",
      effect:
        "Reduces puffiness and promotes lymphatic drainage with a deeply relaxing treatment.",
      duration: "90 mins",
      vipPrice: "$98",
      regPrice: "$158",
    },
    {
      id: "facial-cool-down",
      title: "Cool Down Facial",
      effect:
        "Calms sensitive or irritated skin, reducing redness while restoring comfort and hydration.",
      duration: "90 mins",
      vipPrice: "$158",
      regPrice: "$198",
    },
    {
      id: "facial-advanced",
      title: "Advanced Facial",
      effect:
        "A time-efficient essential facial focused on cleansing, hydration, and basic skin maintenance.",
      duration: "60 mins",
      vipPrice: "$80",
      regPrice: "$120",
    },
    {
      id: "facial-ultra-flawness",
      title: "Ultra Flawness Brightening",
      effect:
        "Improves uneven tone and dullness, revealing clearer, brighter, and more even-looking skin.",
      duration: "90 mins",
      vipPrice: "$250",
      regPrice: "$368",
    },
    {
      id: "facial-laser-lifting",
      title: "Laser Lifting",
      effect:
        "Supports skin firmness and contour definition for a tighter, more lifted appearance.",
      duration: "90 mins",
      vipPrice: "$198",
      regPrice: "$268",
    },
  ],

  wellnessTreatments: [
    {
      id: "wellness-body-massage",
      title: "Body Massage",
      effect:
        "Relieves muscle tension, improves circulation, and promotes overall relaxation and skin vitality.",
      type: "duration",
      pricing: [
        { duration: "60 mins", price: "$80" },
        { duration: "90 mins", price: "$120" },
      ],
      image: {
        src: "/images/skincare/body-massage.png",
        alt: "Body massage treatment",
      },
    },
    {
      id: "wellness-lymphatic-drainage",
      title: "Lymphatic Drainage",
      effect:
        "Supports lymphatic flow to reduce fluid retention, puffiness, and promote a lighter, refreshed feeling.",
      type: "vip-reg",
      vipPrice: "$128",
      regPrice: "$200",
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "I noticed a visible lift and firmness after my treatment, especially around my jawline and lower face. The consultation was thorough and professional, and everything felt very precise and safe. I love that the results continued to improve over the following weeks.",
      name: "Emily R.",
      role: "Thermage Client",
    },
    {
      id: "testimonial-2",
      quote:
        "My skin looked brighter, smoother, and more even after just one session. What I appreciated most was how personalized the treatment felt — it wasn't one-size-fits-all. The team really understands skin.",
      name: "Sofia W.",
      role: "Photo Facial Client",
    },
    {
      id: "testimonial-3",
      quote:
        "This was my first time trying a medical aesthetic treatment, and I felt completely at ease. Everything was clearly explained, and the results looked natural and refreshed — exactly what I was hoping for.",
      name: "Jenna L.",
      role: "First-Time Client",
    },
  ],

  faq: {
    items: [
      {
        id: "faq-suitable",
        question: "Are these treatments suitable for everyone?",
        answer:
          "Most treatments are suitable for a wide range of individuals. However, suitability depends on skin condition, medical history, and personal goals. A professional consultation is required to determine the most appropriate treatment plan and ensure safety and optimal results.",
      },
      {
        id: "faq-prepare",
        question: "Do I need to prepare before my appointment?",
        answer:
          "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consulation.",
      },
      {
        id: "faq-downtime",
        question: "Is there any downtime after treatment?",
        answer:
          "Downtime varies depending on the treatment type. Many procedures have little to no downtime, allowing you to return to normal activities quickly. Mild redness, swelling, or sensitivity may occur after certain treatments and typically resolve within a short period.",
      },
    ],
  },

  cta: {
    title: "Rediscover Beauty Begins Here",
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Skin care consultation banner",
    },
  },

  carePromise: {
    title: "Our Care Promise",
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care — guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};
