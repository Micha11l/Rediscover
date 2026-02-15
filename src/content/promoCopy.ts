export type PromoTreatment = {
  id: string;
  title: string;
  image: { src: string; alt: string };
  vipPrice: string;
  regularPrice: string;
};

export type PromoCopy = {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: { src: string; alt: string };
  };
  welcome: {
    messageParts: { primary: string; accent: string };
    subtitle: string;
  };
  treatments: {
    tag: string;
    title: string;
    subtitle: string;
    items: PromoTreatment[];
  };
  guideline: {
    titleParts: { primary: string; accent: string };
    bullets: string[];
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

const promoCopyEn: PromoCopy = {
  hero: {
    title: "First Visit VIP Experience",
    subtitle:
      "Enjoy exclusive introductory pricing designed for your first visit.",
    buttonText: "Request VIP Consultation",
    backgroundImage: {
      src: "/images/promo/hero.png",
      alt: "VIP spa experience",
    },
  },

  welcome: {
    messageParts: {
      primary: "We believe the first visit should be about ",
      accent: "understanding your skin and goals — not pressure.",
    },
    subtitle:
      "Our VIP introductory pricing is designed to give new clients the opportunity to experience our treatments,\napproach, and care philosophy with confidence.",
  },

  treatments: {
    tag: "Services",
    title: "Our Most Loved Treatments",
    subtitle:
      "Our most requested treatments, specially curated for first-time clients to experience our signature care at VIP pricing.",
    items: [
      {
        id: "lumecca",
        title: "Lumecca Photo Facial",
        image: { src: "/images/promo/lumecca.png", alt: "Lumecca Photo Facial treatment" },
        vipPrice: "$250",
        regularPrice: "$380",
      },
      {
        id: "detoxing",
        title: "Detoxing Facial",
        image: { src: "/images/promo/detoxing.png", alt: "Detoxing Facial treatment" },
        vipPrice: "$98",
        regularPrice: "$158",
      },
      {
        id: "lymphatic",
        title: "Lymphatic Drainage",
        image: { src: "/images/promo/lymphatic.png", alt: "Lymphatic Drainage treatment" },
        vipPrice: "$128",
        regularPrice: "$200",
      },
      {
        id: "forma",
        title: "Forma Lifting",
        image: { src: "/images/promo/forma.png", alt: "Forma Lifting treatment" },
        vipPrice: "$368",
        regularPrice: "$468",
      },
    ],
  },

  guideline: {
    titleParts: { primary: "VIP Experience ", accent: "Guideline" },
    bullets: [
      "Valid for first-time clients only",
      "One VIP experience per person",
      "Cannot be combined with other promotions",
      "Subject to consultation and treatment suitability",
      "All prices are listed before applicable taxes.",
    ],
  },

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Consultation banner",
    },
  },

  carePromise: {
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care — guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};

const promoCopyZh: PromoCopy = {
  hero: {
    title: "首次到访 VIP 尊享体验",
    subtitle:
      "专为新客户设计的专属优惠价格，开启您的美丽之旅。",
    buttonText: "预约 VIP 咨询",
    backgroundImage: {
      src: "/images/promo/hero.png",
      alt: "VIP 水疗体验",
    },
  },

  welcome: {
    messageParts: {
      primary: "我们相信首次到访应该专注于",
      accent: "了解您的肌肤与目标 —— 而非压力。",
    },
    subtitle:
      "我们的 VIP 优惠价格旨在让新客户能够自信地体验我们的疗程、护理方式及护理理念。",
  },

  treatments: {
    tag: "服务项目",
    title: "备受喜爱的明星疗程",
    subtitle:
      "精选最受欢迎的疗程，专为首次到访的客户提供 VIP 优惠价格，让您体验我们的专业护理。",
    items: [
      {
        id: "lumecca",
        title: "Lumecca 光子嫩肤",
        image: { src: "/images/promo/lumecca.png", alt: "Lumecca 光子嫩肤疗程" },
        vipPrice: "$250",
        regularPrice: "$380",
      },
      {
        id: "detoxing",
        title: "面部桃花灸护理",
        image: { src: "/images/promo/detoxing.png", alt: "面部桃花灸护理疗程" },
        vipPrice: "$98",
        regularPrice: "$158",
      },
      {
        id: "lymphatic",
        title: "芳香经络疗法",
        image: { src: "/images/promo/lymphatic.png", alt: "芳香经络疗法疗程" },
        vipPrice: "$128",
        regularPrice: "$200",
      },
      {
        id: "forma",
        title: "Forma 热立塑",
        image: { src: "/images/promo/forma.png", alt: "Forma 热立塑疗程" },
        vipPrice: "$368",
        regularPrice: "$468",
      },
    ],
  },

  guideline: {
    titleParts: { primary: "VIP 体验", accent: "须知" },
    bullets: [
      "仅限首次到访客户",
      "每人限享一次 VIP 体验",
      "不可与其他优惠同时使用",
      "需经咨询评估疗程适用性",
      "所有价格均为税前价格。",
    ],
  },

  cta: {
    titleParts: { primary: "重塑美丽", accent: "由此开始" },
    body: "专业细致的美学护理，为您的肌肤与身体量身定制。",
    buttonText: "预约咨询",
    image: {
      src: "/images/banner.png",
      alt: "咨询横幅",
    },
  },

  carePromise: {
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们倡导细致入微、个性化的护理理念——以专业知识为指引，秉持透明与尊重您自然之美的原则。\n\n所有护理均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺",
    },
  },
};

// Backward-compatible default export for any code still importing promoCopy directly
export const promoCopy = promoCopyEn;

// Bilingual content object for new i18n pattern
export const promoContent: { en: PromoCopy; zh: PromoCopy } = {
  en: promoCopyEn,
  zh: promoCopyZh,
};
