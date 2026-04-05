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
  whyTitleAccent?: string | null;
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
      title: "Thermage 热玛吉",
      image: {
        src: "/images/devices/thermage.png",
        alt: "Thermage 设备",
      },
      descriptionParagraphs: [
        "热玛吉FLX (第五代) | 智能全层紧致系统",
        "Thermage®FLX：定义非侵入式抗衰新标准",
        "热玛吉FLX 是全球公认的抗衰标杆。它利用单极射频 (Monopolar RF) 技术，跨越表皮，直接作用于真皮层及皮下组织，实现从内而外的深度紧致与轮廓重塑。",
        "核心技术原理",
        "三维立体加热 · 胶原再生工程",
        "1. 即刻收缩：射频能量产生 65°C-75°C 的热效应，促使胶原纤维瞬时收缩，术后即刻紧致。",
        "2. 深度修复：热能直达 4.3mm 皮肤深层，激活成纤维细胞大量增生。",
        "3. 长效重塑：术后 3-6 个月进入胶原生长高峰期，皮肤弹性、厚度及光泽度显著提升。",
      ],
      whyTitle: "FLX 三大核心优势",
      whyTitleAccent: null,
      whyBullets: [
        "AccuREP™ 智能调节：每一发能量输出前，系统自动检测局部阻抗，实现“私人定制”般的精准能量分布。",
        "全方位震动减痛：采用改良版多方向震动模式，有效干扰痛觉信号，治疗过程更舒适。",
        "4.0 智能探头：治疗面积增加 33%，覆盖更广、速度更快，显著缩短治疗时长。",
      ],
      howWeUseTitle: "我们如何使用",
      howWeUseTitleAccent: "Thermage 热玛吉",
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
      title: "Sofwave 索芙波",
      image: {
        src: "/images/devices/sofwave.png",
        alt: "Sofwave 设备",
      },
      descriptionParagraphs: [
        "索芙波核心原理：同步平行超声束（SUPERB™）。",
        "能量形态：索芙波会同时发射 7 条圆柱形超声束，在皮下约 1.5mm 的真皮层产生高热量。这些圆柱形能量块可将局部组织加热至 60°C-70°C，是胶原蛋白变性、收缩及再生的黄金温度。",
        "相比点状加热，这种圆柱状立体加热覆盖面积更大，更全面地刺激真皮层。搭载 Sofcool™ 智能冷却系统，在发射能量的同时实时保护表皮，实现深层紧致而不伤表皮，恢复期极短。",
      ],
      whyTitle: "为什么选择",
      whyBullets: [
        "无创超声波 · 深层紧致不伤表皮。",
        "促进胶原新生 · 肌肤弹性与质感焕新。",
        "适用部位：面部、颈部、下颌线。",
        "无针头、无手术，几乎无恢复期。",
      ],
      howWeUseTitle: "我们如何使用",
      howWeUseTitleAccent: "Sofwave 索芙波",
      timelineItems: [
        {
          id: "sofwave-face-neck",
          title: "面部+颈部",
          description:
            "面部与颈部综合超声紧致疗程，帮助提升轮廓、改善松弛，并持续促进胶原更新。",
        },
        {
          id: "sofwave-full-face",
          title: "全脸",
          description:
            "针对全脸真皮层的超声胶原激活疗程，帮助改善整体紧致度、弹性与面部轮廓。",
        },
        {
          id: "sofwave-one-party",
          title: "单部位",
          description:
            "聚焦单一部位的精准超声疗程，适合改善局部松弛并细致优化轮廓线条。",
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
