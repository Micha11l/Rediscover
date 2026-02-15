/**
 * Shared Content Blocks
 *
 * Bilingual CTA and Care Promise blocks used across multiple pages.
 * These are centralized to maintain consistency and reduce duplication.
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type SharedCta = {
  titleParts: { primary: string; accent: string };
  body: string;
  buttonText: string;
  image: { src: string; alt: string };
};

export type SharedCarePromise = {
  titleParts: { primary: string; accent: string };
  body: string;
  image: { src: string; alt: string };
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

export const sharedCta: { en: SharedCta; zh: SharedCta } = {
  en: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care — personalized for your skin, your body, and your goals.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Rediscover Beauty consultation",
    },
  },
  zh: {
    titleParts: { primary: "Rediscover Beauty", accent: "由此开始" },
    body: "专业细致的医学美容护理——为您的肌肤、身体与个人目标量身定制。",
    buttonText: "预约咨询",
    image: {
      src: "/images/banner.png",
      alt: "Rediscover Beauty 预约咨询",
    },
  },
};

export const sharedCarePromise: { en: SharedCarePromise; zh: SharedCarePromise } = {
  en: {
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care — guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
  zh: {
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们相信用心、个性化的护理——以专业知识、透明度和对您自然之美的尊重为指引。\n\n所有治疗均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺",
    },
  },
};

/* ------------------------------------------------------------------ */
/* UI Strings                                                          */
/* ------------------------------------------------------------------ */

/**
 * Common breadcrumb labels used across hero sections
 */
export type UiStrings = {
  breadcrumbs: {
    home: string;
    services: string;
    faq: string;
    antiAging: string;
    privacyPolicy: string;
    termsConditions: string;
  };
  labels: {
    before: string;
    after: string;
    contact: string;
    openingHours: string;
    address: string;
    yourWords: string;
    ourPride: string;
    effectiveDate: string;
  };
};

export const uiStrings: { en: UiStrings; zh: UiStrings } = {
  en: {
    breadcrumbs: {
      home: "Home",
      services: "Services",
      faq: "FAQ",
      antiAging: "Anti-Aging",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
    },
    labels: {
      before: "Before",
      after: "After",
      contact: "Contact",
      openingHours: "Opening Hours",
      address: "Address",
      yourWords: "Your Words,",
      ourPride: "Our Pride",
      effectiveDate: "Effective Date",
    },
  },
  zh: {
    breadcrumbs: {
      home: "首页",
      services: "服务",
      faq: "常见问题",
      antiAging: "抗衰老",
      privacyPolicy: "隐私政策",
      termsConditions: "条款与条件",
    },
    labels: {
      before: "治疗前",
      after: "治疗后",
      contact: "联系方式",
      openingHours: "营业时间",
      address: "地址",
      yourWords: "你们的心声,",
      ourPride: "我们的骄傲",
      effectiveDate: "生效日期",
    },
  },
};
