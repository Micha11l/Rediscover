/**
 * RMT (Registered Massage Therapy) Page Copy
 *
 * Centralized content module for the RMT page sections.
 */

export type RmtPricingTier = {
  duration: string;
  price: string;
};

export type RmtTreatment = {
  id: string;
  title: string;
  icon: string;
  pricing: RmtPricingTier[];
  note?: string;
};

export type RmtHelpBullet = {
  id: string;
  text: string;
};

export type RmtCopy = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    breadcrumbLabel: string;
    images: Array<{ src: string; alt: string }>;
  };
  welcome: {
    message: string;
    aboutTitle: string;
    aboutParagraphs: string[];
  };
  pricingSection: {
    title: string;
    description: string;
  };
  treatments: RmtTreatment[];
  helpSection: {
    title: string;
    subtitle: string;
    bullets: RmtHelpBullet[];
    closingParagraph: string;
  };
  insuranceSection: {
    title: string;
    subtitle: string;
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

const rmtCopyEn: RmtCopy = {
  hero: {
    titleLine1: "Registered",
    titleLine2: "Massage Therapy",
    subtitle:
      "Professional therapeutic massage in a calm, private setting. Designed to relax the body and restore balance.",
    breadcrumbLabel: "Registered Massage Therapy",
    images: [
      { src: "/images/rmt/hero-1.png", alt: "RMT treatment 1" },
      { src: "/images/rmt/hero-2.png", alt: "RMT treatment 2" },
      { src: "/images/rmt/hero-3.png", alt: "RMT treatment 3" },
    ],
  },

  welcome: {
    message:
      "Registered Massage Therapy services are designed to support both physical recovery and overall well-being.",
    aboutTitle: "About Our RMT Services",
    aboutParagraphs: [
      "Our Registered Massage Therapists (RMTs) provide professional, evidence-based treatments tailored to each client's needs — whether you're managing chronic pain, recovering from injury, or simply in need of deep relaxation.",
      "Sessions take place in a calm, private treatment room within our clinic, ensuring a comfortable and focused experience from start to finish.",
      "We also offer optional enhancements such as aromatherapy and cupping to complement your session, based on your preferences and therapeutic goals.",
    ],
  },

  pricingSection: {
    title: "Treatments & Pricing",
    description:
      "Everything we do is rooted in purpose — to nurture, uplift, and deliver beauty beyond the surface.",
  },

  treatments: [
    {
      id: "rmt-massage",
      title: "RMT",
      icon: "/images/icon/FlowerLotus.svg",
      pricing: [
        { duration: "30 minutes", price: "$60" },
        { duration: "45 minutes", price: "$90" },
        { duration: "60 minutes", price: "$120" },
        { duration: "90 minutes", price: "$170" },
      ],
      note: "All prices are tax included.",
    },
    {
      id: "rmt-aroma",
      title: "Aroma Therapy",
      icon: "/images/icon/FlowerTulip.svg",
      pricing: [
        { duration: "30 minutes", price: "$80" },
        { duration: "45 minutes", price: "$100" },
        { duration: "60 minutes", price: "$120" },
        { duration: "90 minutes", price: "$170" },
      ],
      note: "All prices are tax included.",
    },
    {
      id: "rmt-cupping",
      title: "Cupping",
      icon: "/images/icon/la_hotjar.svg",
      pricing: [{ duration: "", price: "+$30" }],
    },
  ],

  helpSection: {
    title: "What RMT Can Help With?",
    subtitle:
      "Registered Massage Therapy at our clinic may help with a variety of physical concerns, including:",
    bullets: [
      { id: "help-1", text: "Muscle tension and tightness" },
      { id: "help-2", text: "Neck, shoulder, and back discomfort" },
      { id: "help-3", text: "Postural strain from desk work or daily habits" },
      { id: "help-4", text: "Sports-related soreness or recovery" },
      { id: "help-5", text: "Stress relief and relaxation" },
      { id: "help-6", text: "Circulation and mobility support" },
    ],
    closingParagraph:
      "Each session is customized based on your current condition, goals, and comfort level. Your therapist will check in with you throughout to ensure the right level of pressure and focus.",
  },

  insuranceSection: {
    title: "Insurance & Receipts",
    subtitle: "We understand the importance of accessible care.",
    bullets: [
      "RMT treatments may be eligible for insurance coverage under your extended health benefits plan. Please check with your provider for details.",
      "Official receipts are provided after each session for direct submission to your insurance provider.",
    ],
  },

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "RMT consultation banner",
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

const rmtCopyZh: RmtCopy = {
  hero: {
    titleLine1: "注册按摩治疗",
    titleLine2: "RMT",
    subtitle: "远离喧嚣\n沉浸于温暖与放松之中\n唤醒身体的自然修复力",
    breadcrumbLabel: "注册按摩治疗",
    images: [
      { src: "/images/rmt/hero-1.png", alt: "RMT 疗程 1" },
      { src: "/images/rmt/hero-2.png", alt: "RMT 疗程 2" },
      { src: "/images/rmt/hero-3.png", alt: "RMT 疗程 3" },
    ],
  },

  welcome: {
    message:
      "在爱妍舍，我们的注册按摩治疗 (RMT) 服务旨在支持身体康复和整体健康。",
    aboutTitle: "关于我们的 RMT 服务",
    aboutParagraphs: [
      "我们的注册按摩治疗师（RMT）提供基于循证医学的专业治疗方案，量身定制，满足每位客户的独特需求——无论您是在应对慢性疼痛、从损伤中恢复，还是寻求深度的身心放松。",
      "所有疗程均在诊所内安静私密的治疗室中进行，为您营造舒适、专注的疗愈体验。",
      "我们还提供芳香疗法与拔罐等可选增强项目，根据您的偏好与治疗目标，为治疗增添更多个性化元素。",
    ],
  },

  pricingSection: {
    title: "疗程与价格",
    description: "我们所做的一切都源于目标——舒压缓解肌肉酸痛 身心愉悦放松。",
  },

  treatments: [
    {
      id: "rmt-massage",
      title: "注册按摩治疗",
      icon: "/images/icon/FlowerLotus.svg",
      pricing: [
        { duration: "30 分钟", price: "$60" },
        { duration: "45 分钟", price: "$90" },
        { duration: "60 分钟", price: "$120" },
        { duration: "90 分钟", price: "$170" },
      ],
      note: "所有价格均已含税。",
    },
    {
      id: "rmt-aroma",
      title: "芳香疗法",
      icon: "/images/icon/FlowerTulip.svg",
      pricing: [
        { duration: "30 分钟", price: "$80" },
        { duration: "45 分钟", price: "$100" },
        { duration: "60 分钟", price: "$120" },
        { duration: "90 分钟", price: "$170" },
      ],
      note: "所有价格均已含税。",
    },
    {
      id: "rmt-cupping",
      title: "拔罐",
      icon: "/images/icon/la_hotjar.svg",
      pricing: [{ duration: "", price: "+$30" }],
    },
  ],

  helpSection: {
    title: "RMT 可以帮助缓解什么？",
    subtitle: "我们诊所的注册按摩治疗可能有助于缓解多种身体不适，包括：",
    bullets: [
      { id: "help-1", text: "肌肉紧张和僵硬" },
      { id: "help-2", text: "颈部、肩部和背部不适" },
      { id: "help-3", text: "因久坐办公或日常习惯导致的姿势性劳损" },
      { id: "help-4", text: "运动相关的酸痛或恢复" },
      { id: "help-5", text: "压力缓解和放松" },
      { id: "help-6", text: "促进血液循环和活动能力" },
    ],
    closingParagraph:
      "每次疗程都会根据您当前的身体状况、目标和舒适度进行定制。您的治疗师会在整个过程中与您沟通，确保适当的力度和重点。",
  },

  insuranceSection: {
    title: "保险与收据",
    subtitle: "我们深知可及护理的重要性。",
    bullets: [
      "RMT 治疗可能符合您的延伸健康福利计划下的保险报销条件。请向您的保险提供商查询详情。",
      "我们会在每次疗程后提供正式收据，以便您直接提交给保险公司。",
    ],
  },

  cta: {
    titleParts: { primary: "重新发现美丽", accent: "从这里开始" },
    body: "为您的肌肤和身体量身定制的专业美学护理。",
    buttonText: "申请咨询",
    image: {
      src: "/images/banner.png",
      alt: "RMT 咨询横幅",
    },
  },

  carePromise: {
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们相信用心、个性化的护理——以专业知识、透明度和对您自然之美的尊重为指引。\n\n所有疗程均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺",
    },
  },
};

// Backward-compatible default export for any code still importing rmtCopy directly
export const rmtCopy = rmtCopyEn;

// Bilingual content object for new i18n pattern
export const rmtContent: { en: RmtCopy; zh: RmtCopy } = {
  en: rmtCopyEn,
  zh: rmtCopyZh,
};
