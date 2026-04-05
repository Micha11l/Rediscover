export type ServiceCard = {
  id: number;
  title: string;
  image: string;
  href: string;
};

export type ServicesCopy = {
  hero: {
    titleLines: string[];
    breadcrumbs: { home: string; services: string };
  };
  headline: {
    titleParts: { restore: string; refine: string; reveal: string };
    description: string;
  };
  cards: ServiceCard[];
};

const servicesCopyEn: ServicesCopy = {
  hero: {
    titleLines: ["Personalized Aesthetic", "&", "Wellness Treatments"],
    breadcrumbs: { home: "Home", services: "Services" },
  },
  headline: {
    titleParts: { restore: "Restore.", refine: "Refine.", reveal: "Reveal." },
    description:
      "From advanced device treatments to personalized skin care solutions, we offer aesthetic and wellness services designed to deliver visible, long-term results.",
  },
  cards: [
    {
      id: 1,
      title: "Anti-Aging",
      image: "/images/services/anti-aging.png",
      href: "/services/anti-aging",
    },
    {
      id: 2,
      title: "Laser & Light Therapy",
      image: "/images/services/laser-therapy.png",
      href: "/services/laser-light-therapy",
    },
    {
      id: 3,
      title: "Skin Care & Wellness",
      image: "/images/services/skin-care.png",
      href: "/services/skin-care-wellness",
    },
    {
      id: 4,
      title: "Body Contouring & Weight Loss",
      image: "/images/services/body-contouring.png",
      href: "/services/body-contouring-weight-loss",
    },
    {
      id: 5,
      title: "Injectables",
      image: "/images/services/injectables.png",
      href: "/services/injectables",
    },
    {
      id: 6,
      title: "Continuously Expanding Treatments",
      image: "/images/services/expanding-treatments.png",
      href: "/services/expanding-treatments",
    },
  ],
};

const servicesCopyZh: ServicesCopy = {
  hero: {
    titleLines: ["个性化医学美容", "&", "健康养生服务"],
    breadcrumbs: { home: "首页", services: "服务项目" },
  },
  headline: {
    titleParts: { restore: "修复.", refine: "精粹.", reveal: "焕新." },
    description:
      "从前沿仪器治疗到个性化肌肤护理方案，我们提供专业的医学美容与健康养生服务，助您实现持久可见的效果。",
  },
  cards: [
    {
      id: 1,
      title: "抗衰老项目",
      image: "/images/services/anti-aging.png",
      href: "/services/anti-aging",
    },
    {
      id: 2,
      title: "激光与光疗",
      image: "/images/services/laser-therapy.png",
      href: "/services/laser-light-therapy",
    },
    {
      id: 3,
      title: "肌肤护理与养生",
      image: "/images/services/skin-care.png",
      href: "/services/skin-care-wellness",
    },
    {
      id: 4,
      title: "身体塑形与减重",
      image: "/images/services/body-contouring.png",
      href: "/services/body-contouring-weight-loss",
    },
    {
      id: 5,
      title: "注射类项目",
      image: "/images/services/injectables.png",
      href: "/services/injectables",
    },
    {
      id: 6,
      title: "持续拓展中的项目",
      image: "/images/services/expanding-treatments.png",
      href: "/services/expanding-treatments",
    },
  ],
};

// Backward-compatible default export for any code still importing servicesCopy directly
export const servicesCopy = servicesCopyEn;

// Bilingual content object for new i18n pattern
export const servicesContent: { en: ServicesCopy; zh: ServicesCopy } = {
  en: servicesCopyEn,
  zh: servicesCopyZh,
};
