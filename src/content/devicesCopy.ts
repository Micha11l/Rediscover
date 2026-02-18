export type TimelineItem = {
  id: string;
  title: string;
  description: string;
};

export type DeviceTechnology = {
  id: string;
  testId: string;
  title: string;
  image: { src: string; alt: string };
  descriptionParagraphs: string[];
  whyTitle: string;
  whyBullets: string[];
  howWeUseTitle: string;
  howWeUseTitleAccent: string;
  timelineItems: TimelineItem[];
};

export type DevicesCopy = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    breadcrumbLabel: string;
    backgroundImage: { src: string; alt: string };
  };
  intro: string;
  technologies: DeviceTechnology[];
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

const devicesCopyEn: DevicesCopy = {
  hero: {
    titleLine1: "Clinical",
    titleLine2: "Aesthetic Technologies",
    breadcrumbLabel: "Devices",
    backgroundImage: {
      src: "/images/devices/banner.png",
      alt: "Clinical aesthetic technologies",
    },
  },

  intro:
    "We use FDA- and Health Canada–approved technologies to deliver safe, precise, and results-driven aesthetic treatments.",

  technologies: [
    {
      id: "inmode",
      testId: "devices-tech-inmode",
      title: "InMode Technology",
      image: {
        src: "/images/devices/inmode.png",
        alt: "InMode device",
      },
      descriptionParagraphs: [
        "Powered by InMode, a globally recognized medical aesthetic technology provider, trusted by clinics and physicians worldwide.",
        "InMode specializes in radiofrequency (RF)–based technologies designed to improve skin quality, firmness, and contours in a safe, non-surgical way.",
      ],
      whyTitle: "Why",
      whyBullets: [
        "Health Canada–approved medical devices",
        "Clinically tested, results-driven technology",
        "Precise energy delivery with temperature monitoring",
        "Suitable for face and body treatments",
        "Minimal downtime, high safety profile",
      ],
      howWeUseTitle: "How We Use",
      howWeUseTitleAccent: "Inmode Technology",
      timelineItems: [
        {
          id: "inmode-ipl",
          title: "IPL",
          description:
            "Improves dullness, redness, and uneven skin tone for overall brightening",
        },
        {
          id: "inmode-forma",
          title: "Forma",
          description:
            "Radiofrequency treatment to stimulate collagen and tighten localized facial areas",
        },
        {
          id: "inmode-bodyfx",
          title: "BodyFX",
          description:
            "Personalized body shaping for smoother, firmer-looking skin",
        },
        {
          id: "inmode-morpheus8",
          title: "Morpheus8",
          description:
            "RF microneedling technology to remodel collagen, improve texture, pores, and skin firmness",
        },
      ],
    },
    {
      id: "thermage",
      testId: "devices-tech-thermage",
      title: "Thermage Technology",
      image: {
        src: "/images/devices/thermage.png",
        alt: "Thermage device",
      },
      descriptionParagraphs: [
        "Powered by Thermage, a clinically trusted monopolar radiofrequency (RF) technology used to improve skin firmness and overall texture.",
        "Thermage delivers controlled heat into deeper dermal layers to support collagen remodeling—helping create a smoother, tighter-looking appearance without surgery.",
      ],
      whyTitle: "Why",
      whyBullets: [
        "Non-surgical skin tightening & contour support",
        "Helps improve firmness, texture, and elasticity",
        "Suitable for face, jawline, neck, and eye area",
        "Minimal downtime, customizable treatment settings",
      ],
      howWeUseTitle: "How We Use",
      howWeUseTitleAccent: "Thermage Technology",
      timelineItems: [
        {
          id: "thermage-900rep",
          title: "900REP",
          description:
            "Comprehensive Thermage treatment for the full face and neck to improve skin firmness, elasticity, and overall contour.",
        },
        {
          id: "thermage-600rep",
          title: "600REP",
          description:
            "Targeted Thermage treatment for localized areas to enhance firmness and definition.",
        },
        {
          id: "thermage-300rep",
          title: "300REP",
          description:
            "Focused treatment for small areas to refine skin texture and address mild skin laxity.",
        },
        {
          id: "thermage-450rep-eye",
          title: "450REP(Eye)",
          description:
            "Specialized Thermage treatment for the eye area to tighten delicate skin and smooth fine lines around the eyes.",
        },
      ],
    },
    {
      id: "sofwave",
      testId: "devices-tech-sofwave",
      title: "Sofwave™ Technology",
      image: {
        src: "/images/devices/sofwave.png",
        alt: "Sofwave device",
      },
      descriptionParagraphs: [
        "We utilize a curated selection of medical-grade aesthetic technologies to support non-surgical skin rejuvenation, contour refinement, and overall skin quality improvement.",
        "Each device is selected based on clinical reliability, safety standards, and proven performance, allowing treatments to target deeper structural concerns while maintaining skin integrity.",
      ],
      whyTitle: "Why",
      whyBullets: [
        "Non-invasive ultrasound-based treatment",
        "Supports collagen regeneration and skin tightening",
        "Suitable for face and neck areas",
        "No needles, no surgery, minimal downtime",
      ],
      howWeUseTitle: "How We Use",
      howWeUseTitleAccent: "Sofwave Technology",
      timelineItems: [
        {
          id: "sofwave-face-neck",
          title: "Face+Neck",
          description:
            "Comprehensive RF treatment designed to tighten and firm both facial and neck skin while supporting long-term collagen renewal.",
        },
        {
          id: "sofwave-full-face",
          title: "Full Face",
          description:
            "A full-face monopolar RF treatment that improves overall skin firmness, elasticity, and facial contour definition.",
        },
        {
          id: "sofwave-one-party",
          title: "One Party",
          description:
            "Targeted RF treatment focused on a single facial area to address localized skin laxity and refine contours.",
        },
      ],
    },
  ],

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Devices consultation banner",
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

const devicesCopyZh: DevicesCopy = {
  hero: {
    titleLine1: "临床级",
    titleLine2: "医美科技",
    breadcrumbLabel: "设备",
    backgroundImage: {
      src: "/images/devices/banner.png",
      alt: "临床级医美科技",
    },
  },

  intro:
    "我们采用经 FDA 及加拿大卫生部认证的先进技术，为您提供安全、精准且效果卓越的医美疗程。",

  technologies: [
    {
      id: "inmode",
      testId: "devices-tech-inmode",
      title: "InMode 技术",
      image: {
        src: "/images/devices/inmode.png",
        alt: "InMode 设备",
      },
      descriptionParagraphs: [
        "InMode 是全球公认的医疗美容技术供应商，受到世界各地诊所和医生的信赖。",
        "InMode 专注于射频（RF）技术，旨在以安全、非手术的方式改善肌肤质量、紧致度和轮廓。",
      ],
      whyTitle: "为什么选择",
      whyBullets: [
        "经加拿大卫生部认证的医疗设备",
        "经临床验证的高效技术",
        "精准的能量传递与温度监控",
        "适用于面部及身体疗程",
        "恢复期短，安全性高",
      ],
      howWeUseTitle: "我们如何使用",
      howWeUseTitleAccent: "InMode 技术",
      timelineItems: [
        {
          id: "inmode-ipl",
          title: "IPL",
          description:
            "改善暗沉、泛红和肤色不均，提亮整体肤色",
        },
        {
          id: "inmode-forma",
          title: "Forma",
          description:
            "射频疗程，刺激胶原蛋白生成，紧致面部局部区域",
        },
        {
          id: "inmode-bodyfx",
          title: "BodyFX",
          description:
            "个性化身体塑形，打造更光滑、更紧致的肌肤",
        },
        {
          id: "inmode-morpheus8",
          title: "Morpheus8",
          description:
            "射频微针技术，重塑胶原蛋白，改善肌肤纹理、毛孔和紧致度",
        },
      ],
    },
    {
      id: "thermage",
      testId: "devices-tech-thermage",
      title: "Thermage 技术",
      image: {
        src: "/images/devices/thermage.png",
        alt: "Thermage 设备",
      },
      descriptionParagraphs: [
        "Thermage 是临床信赖的单极射频（RF）技术，用于改善肌肤紧致度和整体质感。",
        "Thermage 将可控热能传递至深层真皮层，支持胶原蛋白重塑——无需手术即可打造更平滑、更紧致的外观。",
      ],
      whyTitle: "为什么选择",
      whyBullets: [
        "非手术紧肤与轮廓提升",
        "改善紧致度、质感和弹性",
        "适用于面部、下颌线、颈部和眼周",
        "恢复期短，可定制化疗程设置",
      ],
      howWeUseTitle: "我们如何使用",
      howWeUseTitleAccent: "Thermage 技术",
      timelineItems: [
        {
          id: "thermage-900rep",
          title: "900REP",
          description:
            "全面的 Thermage 疗程，针对全脸及颈部，改善肌肤紧致度、弹性和整体轮廓。",
        },
        {
          id: "thermage-600rep",
          title: "600REP",
          description:
            "针对局部区域的精准 Thermage 疗程，增强紧致度和轮廓感。",
        },
        {
          id: "thermage-300rep",
          title: "300REP",
          description:
            "针对小面积的集中疗程，改善肌肤质感，解决轻度松弛问题。",
        },
        {
          id: "thermage-450rep-eye",
          title: "450REP（眼部）",
          description:
            "专为眼周设计的 Thermage 疗程，紧致娇嫩肌肤，抚平眼周细纹。",
        },
      ],
    },
    {
      id: "sofwave",
      testId: "devices-tech-sofwave",
      title: "Sofwave™ 技术",
      image: {
        src: "/images/devices/sofwave.png",
        alt: "Sofwave 设备",
      },
      descriptionParagraphs: [
        "我们精选医疗级医美技术，支持非手术肌肤再生、轮廓优化和整体肌肤质量提升。",
        "每台设备均基于临床可靠性、安全标准和经过验证的性能而选择，使疗程能够针对深层结构问题的同时保持肌肤完整性。",
      ],
      whyTitle: "为什么选择",
      whyBullets: [
        "无创超声波疗程",
        "促进胶原蛋白再生与肌肤紧致",
        "适用于面部和颈部区域",
        "无针头，无手术，恢复期短",
      ],
      howWeUseTitle: "我们如何使用",
      howWeUseTitleAccent: "Sofwave 技术",
      timelineItems: [
        {
          id: "sofwave-face-neck",
          title: "面部+颈部",
          description:
            "全面的射频疗程，旨在紧致和提拉面部及颈部肌肤，同时支持长期胶原蛋白更新。",
        },
        {
          id: "sofwave-full-face",
          title: "全脸",
          description:
            "全脸单极射频疗程，改善整体肌肤紧致度、弹性和面部轮廓。",
        },
        {
          id: "sofwave-one-party",
          title: "单部位",
          description:
            "针对单一面部区域的精准射频疗程，解决局部松弛问题，优化轮廓。",
        },
      ],
    },
  ],

  cta: {
    titleParts: { primary: "重新发现美丽", accent: "从这里开始" },
    body: "用心的医美护理，为您的肌肤和身体量身定制。",
    buttonText: "预约咨询",
    image: {
      src: "/images/banner.png",
      alt: "设备咨询横幅",
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

// Backward-compatible default export for any code still importing devicesCopy directly
export const devicesCopy = devicesCopyEn;

// Bilingual content object for new i18n pattern
export const devicesContent: { en: DevicesCopy; zh: DevicesCopy } = {
  en: devicesCopyEn,
  zh: devicesCopyZh,
};
