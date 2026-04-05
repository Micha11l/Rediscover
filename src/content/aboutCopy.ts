export type AboutTeamMember = {
  id: string;
  name: string;
  role: string | string[];
  image: { src: string; alt: string };
};

export type AboutAchievement = {
  id: string;
  value: string;
  suffix?: string;
  label: string;
};

export type AboutCopy = {
  hero: {
    titleAccent: string;
    titleMain: string;
    subtitle: string;
    gallery: Array<{ src: string; alt: string }>;
  };
  welcome: {
    intro: {
      heading: string;
      paragraphs: Array<{
        text: string;
        highlights: string[];
      }>;
    };
    closing: {
      paragraphs: Array<{
        text: string;
        highlights: string[];
      }>;
    };
  };
  approach: {
    titleAccent: string;
    titleMain: string;
    body: string;
    gallery: Array<{ src: string; alt: string }>;
  };
  achievements: {
    title: string;
    subtitle: string;
    items: AboutAchievement[];
  };
  clinic: {
    titleAccent: string;
    titleMain: string;
    subtitle: string;
    gallery: Array<{ src: string; alt: string }>;
  };
  skincare: {
    title: string;
    subtitle: string;
    image: { src: string; alt: string };
    brands: Array<{
      name: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    subtitle: string;
    members: AboutTeamMember[];
  };
  teamDescription: {
    paragraphs: Array<{
      text: string;
      highlights: string[];
    }>;
  };
  contact: {
    phone: string;
    website: string;
    hours: { days: string; time: string };
    address: string;
  };
  social: Array<{
    id: string;
    name: string;
    image: { src: string; alt: string };
  }>;
  cta: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: { src: string; alt: string };
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    backgroundImage: { src: string; alt: string };
  };
};

const aboutCopyEn: AboutCopy = {
  hero: {
    titleAccent: "About",
    titleMain: "Rediscover Beauty Clinic",
    subtitle:
      "Thoughtfully designed care, combining medical aesthetics, therapeutic wellness, and a sense of quiet luxury.",
    gallery: [
      { src: "/images/about/hero-1.jpg", alt: "Clinic interior 1" },
      { src: "/images/about/hero-2.jpg", alt: "Clinic interior 2" },
      { src: "/images/about/hero-3.svg", alt: "Clinic interior 3" },
    ],
  },

  welcome: {
    intro: {
      heading: "Rediscover Your Best Self",
      paragraphs: [
        {
          text: "At Rediscover Beauty Clinic, we believe beauty and wellness reach their full potential when rooted in intention, professionalism, and respect for the individual.",
          highlights: ["intention, professionalism, and respect"],
        },
        {
          text: "Our clinic is designed as a calm, private environment for you to slow down and feel supported. Whether you are here for advanced aesthetic treatments or Registered Massage Therapy, every service is delivered with thoughtful attention to detail and long-term health in mind.",
          highlights: ["calm, private environment"],
        },
      ],
    },
    closing: {
      paragraphs: [
        {
          text: "We value transparency and comfort. Our team takes the time to truly understand your goals, ensuring every treatment plan is:",
          highlights: ["transparency and comfort"],
        },
        {
          text: "Clinically Guided: Backed by expertise and integrity. Tailor-Made: Specifically designed for your needs. Experience-Focused: Prioritizing your comfort at every step.",
          highlights: [],
        },
      ],
    },
  },

  approach: {
    titleAccent: "Our",
    titleMain: "Approach",
    body:
      "Professional Analysis. Personalized Care. Every treatment begins with a detailed skin consultation to better understand your skin and goals.",
    gallery: [
      { src: "/images/about/approach-1.svg", alt: "Treatment consultation environment 1" },
      { src: "/images/about/approach-2.svg", alt: "Treatment consultation environment 2" },
      { src: "/images/about/approach-3.svg", alt: "Treatment consultation environment 3" },
    ],
  },

  achievements: {
    title: "We are really\nproud of",
    subtitle:
      "Every number reflects our commitment\nto safe treatments, trusted results, and\nlong-term client relationships.",
    items: [
      {
        id: "clients",
        value: "5,2K+",
        label: "Clients Treated with Care",
      },
      {
        id: "satisfaction",
        value: "5.0",
        suffix: "/5",
        label: "Verified Client Satisfaction",
      },
      {
        id: "experience",
        value: "8+",
        suffix: "Years",
        label: "Aesthetic Experience",
      },
      {
        id: "experts",
        value: "6+",
        label: "Certified Wellness Experts",
      },
    ],
  },

  clinic: {
    titleAccent: "Our Clinic",
    titleMain: "Environment",
    subtitle:
      "A serene and thoughtfully designed space where comfort, privacy, and care come first.",
    gallery: [
      { src: "/images/about/clinic-1.svg", alt: "Clinic environment 1" },
      { src: "/images/about/hero-3.jpg", alt: "Clinic environment 2" },
      { src: "/images/about/clinic-3.svg", alt: "Clinic environment 3" },
    ],
  },

  skincare: {
    title: "Medical-Grade Skincare We Trust",
    subtitle:
      "Carefully selected to meet our standards for clinical performance, safety, and patient experience.",
    image: {
      src: "/images/about/skincare-products.jpg",
      alt: "Professional skincare products",
    },
    brands: [
      {
        name: "ZO Skin Health",
        description:
          "A medical-grade skincare system developed in the United States, designed to improve overall skin health by addressing concerns such as acne, pigmentation, aging, and sensitivity through clinically backed formulations and treatment-driven protocols.",
      },
      {
        name: "Maria Galland Paris",
        description:
          "A prestigious French professional skincare brand with decades of expertise, combining advanced active ingredients with refined textures to support customized treatments, skin balance, radiance, and long-term comfort.",
      },
    ],
  },

  team: {
    title: "Meet the Experts Behind the Glow",
    subtitle:
      "A team of certified aesthetic professionals, united by expertise, care, and attention to detail.",
    members: [
      {
        id: "kristen",
        name: "Kristen",
        role: ["Founder", "Lead Aesthetic Practitioner"],
        image: { src: "/images/about/team-kristen.jpg", alt: "Kristen" },
      },
      {
        id: "rain",
        name: "Rain",
        role: "Aesthetic Practitioner",
        image: { src: "/images/about/team-rain.jpg", alt: "Rain" },
      },
      {
        id: "cammi",
        name: "Cammi",
        role: "Aesthetic Practitioner",
        image: { src: "/images/about/team-cammi.jpg", alt: "Cammi" },
      },
      {
        id: "sandy",
        name: "Sandy",
        role: "Aesthetic Practitioner",
        image: { src: "/images/about/team-sandy.jpg", alt: "Sandy" },
      },
      {
        id: "zoe",
        name: "Zoe",
        role: "Aesthetic Practitioner",
        image: { src: "", alt: "Zoe" },
      },
    ],
  },

  teamDescription: {
    paragraphs: [
      {
        text: "Our practitioners are professionally trained and certified, with experience across medical aesthetics, skin health, and wellness services. Each treatment is guided by professional standards, safety protocols, and individualized assessment.",
        highlights: ["professionally trained and certified"],
      },
      {
        text: "We take time to understand each client's goals and concerns, ensuring every treatment plan is personalized, appropriate, and results-focused, while maintaining comfort and discretion throughout the experience.",
        highlights: ["personalized, appropriate, and results-focused"],
      },
    ],
  },

  contact: {
    phone: "+1 (647) 523-3988",
    website: "rediscoverbeauty99@gmail.com",
    hours: { days: "Mon – Sun", time: "10:00AM-8:00PM" },
    address: "9425 Leslie St Unit14, 2F, Richmond Hill, ON L4B 3N7",
  },

  social: [
    {
      id: "instagram",
      name: "Instagram",
      image: { src: "/images/about/social-instagram.jpg", alt: "Instagram" },
    },
    {
      id: "wechat",
      name: "WeChat",
      image: { src: "/images/about/social-wechat.jpg", alt: "WeChat" },
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      image: { src: "/images/about/social-whatsapp.jpg", alt: "WhatsApp" },
    },
    {
      id: "tiktok",
      name: "Tiktok",
      image: { src: "/images/about/social-tiktok.jpg", alt: "Tiktok" },
    },
  ],

  cta: {
    titleLine1: "Rediscover Beauty",
    titleLine2: "Begins Here",
    subtitle: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    backgroundImage: {
      src: "/images/about/cta-banner.jpg",
      alt: "CTA banner",
    },
  },

  newsletter: {
    title: "Newsletter Sign-Up",
    subtitle: "Subscribe to receive updates on promotions, new treatments, and skincare tips.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    backgroundImage: {
      src: "/images/about/newsletter-bg.jpg",
      alt: "Newsletter background",
    },
  },
};

const aboutCopyZh: AboutCopy = {
  hero: {
    titleAccent: "关于",
    titleMain: "爱妍舍",
    subtitle:
      "精心设计的专业护理，融合医学美容、疗愈养生与低调奢华的品质体验。",
    gallery: [
      { src: "/images/about/hero-1.jpg", alt: "诊所内景 1" },
      { src: "/images/about/hero-2.jpg", alt: "诊所内景 2" },
      { src: "/images/about/hero-3.svg", alt: "诊所内景 3" },
    ],
  },

  welcome: {
    intro: {
      heading: "遇见爱妍舍",
      paragraphs: [
        {
          text: "以初心、专业与尊重，重塑身心之美。",
          highlights: ["初心、专业与尊重"],
        },
        {
          text: "我们致力于打造一个宁静私密的避风港。在这里，您可以放慢脚步，在专业的支持下重焕活力。从前沿美学疗程到专业注册按摩治疗（RMT），每一项服务都融合了严谨的临床诚信与对长远健康的极致追求。",
          highlights: ["宁静私密的避风港"],
        },
      ],
    },
    closing: {
      paragraphs: [
        {
          text: "透明化：诚实沟通，让您全程安心。舒适感：在优雅的环境中享受蜕变。个性化：每一份方案，都为您量身定制。",
          highlights: ["透明化", "舒适感", "个性化"],
        },
        {
          text: "在这里，临床的精准与感官的愉悦同等重要。",
          highlights: [],
        },
      ],
    },
  },

  approach: {
    titleAccent: "我们的",
    titleMain: "护理方式",
    body:
      "每一次疗程都始于专业的肌肤分析与咨询，深入了解您的肌肤状态与护理目标，定制更适合您的护理方案。",
    gallery: [
      { src: "/images/about/approach-1.svg", alt: "疗程咨询环境 1" },
      { src: "/images/about/approach-2.svg", alt: "疗程咨询环境 2" },
      { src: "/images/about/approach-3.svg", alt: "疗程咨询环境 3" },
    ],
  },

  achievements: {
    title: "我们真正\n引以为傲的是",
    subtitle:
      "每一个数字都体现了我们对\n安全护理、可信赖效果\n以及长期客户关系的承诺。",
    items: [
      {
        id: "clients",
        value: "5,2K+",
        label: "悉心服务的客户",
      },
      {
        id: "satisfaction",
        value: "5.0",
        suffix: "/5",
        label: "真实客户满意度评分",
      },
      {
        id: "experience",
        value: "8+",
        suffix: "年",
        label: "医美行业经验",
      },
      {
        id: "experts",
        value: "6+",
        label: "认证健康专家",
      },
    ],
  },

  clinic: {
    titleAccent: "我们的诊所",
    titleMain: "环境",
    subtitle:
      "一个优雅而宁静的空间，为美丽与身心疗愈而打造。",
    gallery: [
      { src: "/images/about/clinic-1.svg", alt: "诊所环境 1" },
      { src: "/images/about/hero-3.jpg", alt: "诊所环境 2" },
      { src: "/images/about/clinic-3.svg", alt: "诊所环境 3" },
    ],
  },

  skincare: {
    title: "我们严选的医学级护肤产品",
    subtitle:
      "经过精心挑选，符合我们在临床表现、安全性和客户体验方面的标准。",
    image: {
      src: "/images/about/skincare-products.jpg",
      alt: "专业护肤产品",
    },
    brands: [
      {
        name: "ZO Skin Health",
        description:
          "来自美国的医学级护肤系统，旨在通过经临床验证的配方和以治疗为导向的方案，改善整体肌肤健康，解决痤疮、色素沉着、老化和敏感等问题。",
      },
      {
        name: "Maria Galland Paris",
        description:
          "拥有数十年专业经验的法国高端护肤品牌，融合先进活性成分与精致质地，支持定制化疗程、平衡肌肤、提升光彩并带来长期舒适感。",
      },
    ],
  },

  team: {
    title: "Meet the Experts Behind the Glow",
    subtitle:
      "一支由经认证的医美专家组成的团队，以专业知识、用心服务与细节把控为核心。",
    members: [
      {
        id: "kristen",
        name: "Kristen",
        role: ["创始人", "首席美容师"],
        image: { src: "/images/about/team-kristen.jpg", alt: "Kristen" },
      },
      {
        id: "rain",
        name: "Rain",
        role: "美容师",
        image: { src: "/images/about/team-rain.jpg", alt: "Rain" },
      },
      {
        id: "cammi",
        name: "Cammi",
        role: "美容师",
        image: { src: "/images/about/team-cammi.jpg", alt: "Cammi" },
      },
      {
        id: "sandy",
        name: "Sandy",
        role: "美容师",
        image: { src: "/images/about/team-sandy.jpg", alt: "Sandy" },
      },
      {
        id: "zoe",
        name: "Zoe",
        role: "美容师",
        image: { src: "", alt: "Zoe" },
      },
    ],
  },

  teamDescription: {
    paragraphs: [
      {
        text: "我们的护理师均受过专业培训并持有相关资质，在医学美容、肌肤健康和养生服务方面拥有丰富经验。每一项疗程都遵循专业标准、安全规范和个性化评估的指导。",
        highlights: ["专业培训并持有相关资质"],
      },
      {
        text: "我们会用心了解每位客户的目标与需求,确保每一份疗程计划都是个性化、恰当且注重效果的,同时在整个护理过程中保持舒适与隐私。",
        highlights: ["个性化、恰当且注重效果"],
      },
    ],
  },

  contact: {
    phone: "+1 (647) 523-3988",
    website: "rediscoverbeauty99@gmail.com",
    hours: { days: "周一至周日", time: "10:00AM-8:00PM" },
    address: "9425 Leslie St Unit14, 2F, Richmond Hill, ON L4B 3N7",
  },

  social: [
    {
      id: "instagram",
      name: "Instagram",
      image: { src: "/images/about/social-instagram.jpg", alt: "Instagram" },
    },
    {
      id: "wechat",
      name: "WeChat",
      image: { src: "/images/about/social-wechat.jpg", alt: "WeChat" },
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      image: { src: "/images/about/social-whatsapp.jpg", alt: "WhatsApp" },
    },
    {
      id: "tiktok",
      name: "Tiktok",
      image: { src: "/images/about/social-tiktok.jpg", alt: "Tiktok" },
    },
  ],

  cta: {
    titleLine1: "爱妍舍",
    titleLine2: "由此开始",
    subtitle: "专业细致的美学护理，为您的肌肤与身体量身定制。",
    buttonText: "预约咨询",
    backgroundImage: {
      src: "/images/about/cta-banner.jpg",
      alt: "咨询预约横幅",
    },
  },

  newsletter: {
    title: "订阅我们的资讯",
    subtitle: "订阅以接收最新优惠活动、新疗程推荐及护肤小贴士。",
    placeholder: "请输入您的邮箱",
    buttonText: "订阅",
    backgroundImage: {
      src: "/images/about/newsletter-bg.jpg",
      alt: "资讯订阅背景",
    },
  },
};

// Backward-compatible default export for any code still importing aboutCopy directly
export const aboutCopy = aboutCopyEn;

// Bilingual content object for new i18n pattern
export const aboutContent: { en: AboutCopy; zh: AboutCopy } = {
  en: aboutCopyEn,
  zh: aboutCopyZh,
};
