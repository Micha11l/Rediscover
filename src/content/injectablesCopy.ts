import type { TestimonialItem } from "@/components/sections/service-detail";
import type { Paragraph } from "@/content/skinCareCopy";

export type InjectableTreatment = {
  id: string;
  title: string;
  subtitle?: string;
  effect: string;
  recommendedFor: string;
  expectedDowntime: string;
};

export type InjectablesCopy = {
  hero: {
    title: string;
    subtitle: string;
    breadcrumbLabel: string;
    image: { src: string; alt: string };
  };
  about: {
    titleAccent: string;
    titlePrimary: string;
    paragraphs: Paragraph[];
  };
  treatments: InjectableTreatment[];
  testimonials: TestimonialItem[];
  faq: {
    items: Array<{ id: string; question: string; answer: string }>;
  };
  cta: {
    titleParts: { primary: string; accent: string };
    body: string;
    buttonText: string;
    image: { src: string; alt: string };
  };
  carePromise: {
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

export const injectablesCopy: InjectablesCopy = {
  hero: {
    title: "Injectables",
    subtitle:
      "Precision injectable treatments designed to restore volume, improve skin quality, and enhance facial balance with natural-looking results.",
    breadcrumbLabel: "Injectables",
    image: {
      src: "/images/injectables/hero.png",
      alt: "Injectable treatment",
    },
  },

  about: {
    titleAccent: "About",
    titlePrimary: "Injectables",
    paragraphs: [
      {
        text: "Our injectable treatments are performed by trained medical professionals and begin with a thorough consultation to assess facial structure, skin condition, and individual concerns.",
      },
      {
        text: "Each treatment plan is carefully customized to address specific needs, restore balance, and enhance natural features with precision, safety, and subtle, natural-looking results.",
      },
    ],
  },

  treatments: [
    {
      id: "injectable-radiesse",
      title: "Radiesse",
      effect:
        "Provides immediate structural support while stimulating the body\u2019s natural collagen production to improve firmness, contour, and overall skin quality.",
      recommendedFor:
        "Individuals experiencing volume loss, skin laxity, or reduced facial definition, particularly in the lower face and jawline, who prefer natural-looking results without overfilling.",
      expectedDowntime:
        "Mild swelling or bruising may occur for 1\u20133 days.",
    },
    {
      id: "injectable-sculptra",
      title: "Sculptra",
      effect:
        "Gradually restores facial volume and improves skin texture by stimulating long-term collagen regeneration, delivering subtle and natural-looking rejuvenation over time.",
      recommendedFor:
        "Those with collagen depletion, facial thinning, or early signs of aging who seek progressive, long-lasting improvement rather than instant volume.",
      expectedDowntime:
        "Minimal downtime with mild swelling for 2\u20133 days.",
    },
    {
      id: "injectable-dermal-filler",
      title: "Dermal Filler",
      effect:
        "Restores lost volume, enhances facial contours, and smooths wrinkles using hyaluronic acid\u2013based fillers for immediate, natural-looking results.",
      recommendedFor:
        "Those looking to improve facial balance, enhance lips or chin, define jawline or cheeks, or soften deep lines such as nasolabial folds and marionette lines.",
      expectedDowntime:
        "Mild swelling, redness, or bruising may occur and typically resolves within 3\u20137 days.",
    },
    {
      id: "injectable-prp",
      title: "PRP",
      subtitle: "Platelet-Rich Plasma",
      effect:
        "Uses the body\u2019s own growth factors to stimulate skin repair, enhance collagen production, and improve overall skin tone and texture.",
      recommendedFor:
        "Clients seeking natural skin rejuvenation, improved skin vitality, or enhancement of other aesthetic treatments.",
      expectedDowntime:
        "Mild redness or swelling for 1\u20132 days.",
    },
    {
      id: "injectable-mesotherapy",
      title: "Mesotherapy",
      effect:
        "Delivers customized nutrients directly into the skin to deeply hydrate, revitalize, and improve overall skin quality and radiance.",
      recommendedFor:
        "Those with dehydrated, dull, or tired-looking skin who desire a refreshed and glowing appearance.",
      expectedDowntime:
        "Minor redness or pinpoint marks may appear for 1\u20132 days.",
    },
    {
      id: "injectable-botox",
      title: "Botox",
      effect:
        "Relaxes targeted facial muscles to smooth dynamic wrinkles and prevent the formation of deeper expression lines.",
      recommendedFor:
        "Individuals with dynamic facial lines such as forehead lines, frown lines, or crow\u2019s feet, or those seeking preventative anti-aging treatment.",
      expectedDowntime:
        "No downtime; minor redness or injection marks may resolve within a few hours.",
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
        "My skin looked brighter, smoother, and more even after just one session. What I appreciated most was how personalized the treatment felt \u2014 it wasn\u2019t one-size-fits-all. The team really understands skin.",
      name: "Sofia W.",
      role: "Photo Facial Client",
    },
    {
      id: "testimonial-3",
      quote:
        "This was my first time trying a medical aesthetic treatment, and I felt completely at ease. Everything was clearly explained, and the results looked natural and refreshed \u2014 exactly what I was hoping for.",
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
          "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consultation.",
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
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Injectables consultation banner",
    },
  },

  carePromise: {
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care \u2014 guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};
