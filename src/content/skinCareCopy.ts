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
  extraTopSpace?: boolean;
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

const skinCareCopyEn: SkinCareCopy = {
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
      {
        text: "Skin Care Service Process: Relaxation Back Massage → Cleansing → Peeling → Steaming → Extraction → Eyebrow Shaping → Customized Facial Treatment → Serum Infusion → Double Layer Masks → Shoulder, Head & Hand Massage (Included)",
        extraTopSpace: true,
      },
      {
        text: "The treatment process for Advanced Facial may vary depending on the session duration.",
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
      title: "Ultra Boosting Facial",
      effect:
        "Deeply boosts skin vitality and firmness, helping tired skin look plumper and more refreshed.",
      duration: "90 mins",
      vipPrice: "$128",
      regPrice: "$198",
    },
    {
      id: "facial-hydration",
      title: "Hydration Facial",
      effect:
        "Intensely replenishes moisture to improve dryness, smooth texture, and restore a healthy glow.",
      duration: "80 mins",
      vipPrice: "$98",
      regPrice: "$138",
    },
    {
      id: "facial-oxygen",
      title: "Oxygen Facial",
      effect:
        "Deep Cleansing & Exfoliation. Hydration & Glow. Revitalizes dull, tired skin by deep cleansing excess oil from pores, reducing clogging, blackheads, and blemishes while delivering hydration and moisture replenishment.",
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
        "A synergistic blend of essential oils, traditional moxibustion, and expert gua sha techniques designed to revitalize the body and soul by stimulating lymphatic drainage to reduce puffiness, enhancing circulation for a healthy, vibrant complexion, and restoring your natural radiance through deep relaxation.",
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
        "Improves dullness and dryness, brightens skin tone, and restores a clearer, more luminous, even-looking complexion.",
      duration: "90 mins",
      vipPrice: "$250",
      regPrice: "$368",
    },
    {
      id: "facial-laser-lifting",
      title: "Laser Lifting",
      effect:
        "Deep cleanses pores, reduces dark spots, acne marks, and breakouts while firming the skin and brightening the overall complexion.",
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

const skinCareCopyZh: SkinCareCopy = {
  hero: {
    title: "护肤与养生",
    subtitle:
      "个性化护肤与养生疗程，致力于滋养、修复与维持肌肤健康。",
    breadcrumbLabel: "护肤与养生",
    image: {
      src: "/images/skincare/hero.png",
      alt: "护肤与养生疗程",
    },
  },

  aboutSkinCare: {
    titleAccent: "关于",
    titlePrimary: "护肤服务",
    paragraphs: [
      {
        text: "我们的护肤服务专注于通过温和、有效且个性化的面部护理来恢复肌肤健康。",
      },
      {
        text: "从深层补水、氧气疗法到舒缓排毒面部护理，我们的疗程结合专业技术与精选产品，针对干燥、暗沉、堵塞和敏感等常见问题。",
      },
      {
        text: "所有护肤服务均根据个人肌肤状况和需求定制，提供放松体验与可见改善，且无需恢复期。",
      },
      {
        text: "护肤服务流程：放松背部按摩 → 洁面 → 去角质 → 蒸脸 → 清洁毛孔 → 修眉 → 定制面部护理 → 精华导入 → 双层面膜 → 肩部、头部及手部按摩（含）",
        extraTopSpace: true,
      },
      {
        text: "Advanced Facial 的治疗流程会根据护理时长有所不同。",
      },
    ],
  },

  aboutWellness: {
    titleAccent: "关于",
    titlePrimary: "养生",
    paragraphs: [
      {
        text: "我们的养生服务专注于放松、促进循环和整体身心平衡，采用温和的手法疗程。旨在缓解紧张、减少体液积聚并促进淋巴流动，这些疗程支持身体舒适与肌肤活力。",
      },
      {
        text: "每次疗程均根据个人需求定制，提供舒缓体验与可见焕新，且无需恢复期。",
      },
    ],
  },

  facialTreatments: [
    {
      id: "facial-ultra-boosting",
      title: "美拉提水光肌 Facial",
      effect:
        "深层提升肌肤活力与紧致度，帮助疲惫肌肤看起来更饱满、更焕发。",
      duration: "90 分钟",
      vipPrice: "$128",
      regPrice: "$198",
    },
    {
      id: "facial-hydration",
      title: "保湿嫩白 Facial",
      effect:
        "强效补充水分，改善干燥，平滑肌肤纹理，恢复健康光泽。",
      duration: "80 分钟",
      vipPrice: "$98",
      regPrice: "$138",
    },
    {
      id: "facial-oxygen",
      title: "小气泡深度清洁 Facial",
      effect:
        "深层清洁去角质，补水焕亮。深层清洁毛孔的油脂，改善毛孔堵塞，黑头闭口等问题，改善肌肤的同时还可以保湿补水。",
      duration: "90 分钟",
      vipPrice: "$138",
      regPrice: "$168",
    },
    {
      id: "facial-dewy-glow",
      title: "深海活氧焕颜水疗",
      effect:
        "提升肌肤光泽与平滑度，打造水润透亮的光泽肌。",
      duration: "90 分钟",
      vipPrice: "$168",
      regPrice: "$228",
    },
    {
      id: "facial-detoxing",
      title: "面部桃花灸护理",
      effect:
        "融合植物精油、传统艾灸与专业刮痧技法，旨在由内而外焕活身心。通过促进淋巴循环帮助减轻浮肿，增强血液流动以呈现健康透亮气色，并在深度放松中重现肌肤自然光采。",
      duration: "90 分钟",
      vipPrice: "$98",
      regPrice: "$158",
    },
    {
      id: "facial-cool-down",
      title: "舒敏肌肤新生管理",
      effect:
        "舒缓敏感或受刺激的肌肤，减少红肿，恢复舒适与水分。",
      duration: "90 分钟",
      vipPrice: "$158",
      regPrice: "$198",
    },
    {
      id: "facial-advanced",
      title: "面部基础护理",
      effect:
        "高效基础面部护理，专注于清洁、补水与基础肌肤维护。",
      duration: "60 分钟",
      vipPrice: "$80",
      regPrice: "$120",
    },
    {
      id: "facial-ultra-flawness",
      title: "焕白无暇灯泡肌",
      effect:
        "针对暗沉发黄与肤色不均，改善干燥粗糙与光泽不足，焕发更清透、匀净、明亮的灯泡肌光采。",
      duration: "90 分钟",
      vipPrice: "$250",
      regPrice: "$368",
    },
    {
      id: "facial-laser-lifting",
      title: "黑瓷娃娃",
      effect:
        "深层清洁毛孔，改善暗黑，痘印和痘肌，紧致肌肤，提亮肤色。",
      duration: "90 分钟",
      vipPrice: "$198",
      regPrice: "$268",
    },
  ],

  wellnessTreatments: [
    {
      id: "wellness-body-massage",
      title: "专业身体按摩",
      effect:
        "缓解肌肉紧张，改善循环，促进整体放松与肌肤活力。",
      type: "duration",
      pricing: [
        { duration: "60 分钟", price: "$80" },
        { duration: "90 分钟", price: "$120" },
      ],
      image: {
        src: "/images/skincare/body-massage.png",
        alt: "身体按摩疗程",
      },
    },
    {
      id: "wellness-lymphatic-drainage",
      title: "芳香经络疗法",
      effect:
        "支持淋巴流动，减少体液滞留与浮肿，促进轻盈焕新的感觉。",
      type: "vip-reg",
      vipPrice: "$128",
      regPrice: "$200",
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "疗程后我注意到明显的提拉和紧致效果，特别是在下颌线和下面部区域。咨询非常全面且专业，整个过程感觉非常精准和安全。我很喜欢效果在接下来的几周内持续改善。",
      name: "Emily R.",
      role: "热玛吉客户",
    },
    {
      id: "testimonial-2",
      quote:
        "仅一次疗程后，我的肌肤看起来更明亮、更平滑、更均匀。我最欣赏的是疗程的个性化——这不是千篇一律的方案。团队真正懂得如何护肤。",
      name: "Sofia W.",
      role: "光子嫩肤客户",
    },
    {
      id: "testimonial-3",
      quote:
        "这是我第一次尝试医美疗程，我感到非常放心。所有细节都解释得很清楚，效果看起来自然焕新——正是我所期待的。",
      name: "Jenna L.",
      role: "初次客户",
    },
  ],

  faq: {
    items: [
      {
        id: "faq-suitable",
        question: "这些疗程适合所有人吗？",
        answer:
          "大多数疗程适合广泛人群。然而，适用性取决于肌肤状况、病史和个人目标。需要进行专业咨询以确定最合适的疗程方案，并确保安全与最佳效果。",
      },
      {
        id: "faq-prepare",
        question: "预约前我需要做什么准备吗？",
        answer:
          "通常需要最少的准备。我们可能会建议在某些疗程前避免使用活性护肤成分、暴露在阳光下或进行注射疗程。具体说明将在咨询时提供。",
      },
      {
        id: "faq-downtime",
        question: "疗程后是否需要恢复期？",
        answer:
          "恢复期因疗程类型而异。许多疗程几乎不需要恢复期，让您能够快速恢复正常活动。某些疗程后可能会出现轻微红肿、肿胀或敏感，通常会在短时间内消退。",
      },
    ],
  },

  cta: {
    title: "重塑美丽，由此开始",
    titleParts: { primary: "重塑美丽", accent: "由此开始" },
    body: "专业细致的美学护理，为您的肌肤与身体量身定制。",
    buttonText: "预约咨询",
    image: {
      src: "/images/banner.png",
      alt: "护肤咨询横幅",
    },
  },

  carePromise: {
    title: "我们的护理承诺",
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们倡导细致入微、个性化的护理理念——以专业知识为指引，秉持透明与尊重您自然之美的原则。\n\n所有疗程均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺",
    },
  },
};

// Backward-compatible default export for any code still importing skinCareCopy directly
export const skinCareCopy = skinCareCopyEn;

// Bilingual content object for new i18n pattern
export const skinCareContent: { en: SkinCareCopy; zh: SkinCareCopy } = {
  en: skinCareCopyEn,
  zh: skinCareCopyZh,
};
