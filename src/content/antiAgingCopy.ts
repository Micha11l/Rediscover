/**
 * Anti-Aging Treatment Copy
 *
 * Centralized content module for all anti-aging treatment sections.
 * Keyed by treatment id: sofwave | thermage | morpheus8 | forma
 */

export type TreatmentId = "sofwave" | "thermage" | "morpheus8" | "forma";

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type RecommendedItem = {
  id: string;
  text: string;
};

export type FaqBenefit = {
  title: string;
  text: string;
};

export interface TreatmentCopy {
  about: {
    subtitle: string;
    paragraphs: Paragraph[];
  };
  recommended: {
    headline: string;
    items: RecommendedItem[];
  };
  faq: {
    title: string;
    keyBenefitsTitle: string;
    canHelpWithTitle: string;
    benefits: FaqBenefit[];
    helpsWith: string[];
  };
}

const antiAgingCopyEn: Record<TreatmentId, TreatmentCopy> = {
  sofwave: {
    about: {
      subtitle:
        "Non-invasive ultrasound technology for skin tightening and natural lifting.",
      paragraphs: [
        {
          segments: [
            {
              text: "Sofwave® is a non-invasive aesthetic treatment that uses advanced ",
            },
            {
              text: "SUPERB™ (Synchronous Ultrasound Parallel Beam)",
              bold: true,
            },
            {
              text: " technology to improve skin firmness, reduce fine lines, and restore a naturally lifted appearance.",
            },
          ],
        },
        {
          text: "By delivering controlled ultrasound energy into the mid-dermis, Sofwave stimulates the body's natural production of collagen and elastin—resulting in gradual, natural-looking rejuvenation with minimal downtime.",
        },
      ],
    },
    recommended: {
      headline: "Recommended For",
      items: [
        {
          id: "sofwave-1",
          text: "Those who want lifting improvement without worrying about cheek hollowing or depression",
        },
        {
          id: "sofwave-2",
          text: "Those who want direct targeted care of the dermal layer, the source of wrinkles",
        },
        {
          id: "sofwave-3",
          text: "Those in their 30s to 50s and beyond who want age-appropriate collagen regeneration lifting",
        },
        {
          id: "sofwave-4",
          text: "Those who need care for smile lines, eye wrinkles, nasolabial folds, and marionette lines",
        },
      ],
    },
    faq: {
      title: "Sofwave",
      keyBenefitsTitle: "Key Benefits of",
      canHelpWithTitle: "Can Help With",
      benefits: [
        {
          title: "Non-Invasive Treatment",
          text: "No needles, no surgery, and no incisions required.",
        },
        {
          title: "Skin Tightening & Lifting",
          text: "Helps improve mild to moderate skin laxity and soft tissue sagging.",
        },
        {
          title: "Versatile Treatment Areas",
          text: "Effective for facial fine lines, wrinkles, brow lifting, neck tightening, and submental (under-chin) areas.",
        },
        {
          title: "Safe for All Skin Types",
          text: "Clinically proven to be safe and effective across all skin tones.",
        },
        {
          title: "Minimal Downtime",
          text: "Most patients return to daily activities immediately after treatment.",
        },
      ],
      helpsWith: [
        "Skin laxity and loss of firmness",
        "Fine lines and wrinkles",
        "Mild sagging in the lower face and jawline",
        "Brow drooping",
        "Neck and submental skin laxity",
        "Early signs of aging",
      ],
    },
  },

  thermage: {
    about: {
      subtitle: "", // hasStandaloneSubtitle: false
      paragraphs: [
        {
          segments: [
            {
              text: "Thermage® FLX is the fourth and latest generation of Thermage non-invasive radiofrequenncy (RF) skin tightening technology.",
              bold: true,
            },
            {
              text: " Released by Solta Medical, it is designed to smooth, firm, and contour skin on the face, eyes, and body without surgery, needles, or downtime.",
            },
          ],
        },
        {
          segments: [
            {
              text: "Globally recognized and clinically established, Thermage FLX is ",
            },
            {
              text: "the only non-invasive skin tightening technology approved for use around the eyes",
              bold: true,
            },
            {
              text: ", making it a trusted choice for delicate areas as well as full-face and neck treatments.",
            },
          ],
        },
        {
          text: "By evenly heating the deeper dermal layers, Thermage FLX stimulates collagen remodeling while tightening existing collagen fibers—resulting in smoother, firmer, and naturally lifted-looking skin with minimal downtime.",
        },
      ],
    },
    recommended: {
      headline: "Recommended For",
      items: [
        {
          id: "thermage-1",
          text: "Those with thin, weak skin who have postponed lifting treatment",
        },
        {
          id: "thermage-2",
          text: "Those concerned about fine lines and enlarged pores",
        },
        {
          id: "thermage-3",
          text: "Those who want elasticity care for rough skin texture",
        },
        {
          id: "thermage-4",
          text: "Those who want subtle anti-aging and overall facial elasticity improvement",
        },
      ],
    },
    faq: {
      title: "Thermage FLX",
      keyBenefitsTitle: "Key Benefits of",
      canHelpWithTitle: "Can Help With",
      benefits: [
        {
          title: "Latest-Generation Technology",
          text: "Thermage FLX represents the most advanced evolution of Thermage, offering improved comfort and precision.",
        },
        {
          title: "Eye-Area Safe & Proven",
          text: "Globally recognized as the only non-invasive skin tightening treatment approved for delicate eye areas.",
        },
        {
          title: "Non-Invasive Treatment",
          text: "No needles, no injections, and no skin breakage required.",
        },
        {
          title: "Skin Tightening & Firming",
          text: "Stimulates collagen boosting and regeneration to improve laxity and contour.",
        },
        {
          title: "Minimal Downtime",
          text: "Most patients return to daily activities immediately after treatment.",
        },
      ],
      helpsWith: [
        "Skin laxity and loss of firmness",
        "Fine lines and wrinkles",
        "Eye-area skin looseness and crepiness",
        "Jawline and lower face sagging",
        "Neck skin laxity",
        "Early signs of aging",
      ],
    },
  },

  morpheus8: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Morpheus8® is a minimally invasive treatment that " },
            {
              text: "combines microneedling with radiofrequency (RF) energy to target the deeper layers of the skin",
              bold: true,
            },
            {
              text: ". By creating controlled micro-injuries and delivering RF heat beneath the surface, it stimulates collagen and elastin production to improve skin firmness, texture, and overall quality.",
            },
          ],
        },
        {
          segments: [
            { text: "Unlike non-invasive treatments, Morpheus8 " },
            {
              text: "penetrates through the skin barrier",
              bold: true,
            },
            {
              text: ", allowing for deeper remodeling of both skin and underlying tissue. This makes it especially effective for concerns such as skin laxity, enlarged pores, acne scars, and uneven texture.",
            },
          ],
        },
        {
          segments: [
            { text: "Morpheus8 is " },
            {
              text: "fully customizable in depth and intensity",
              bold: true,
            },
            {
              text: ", making it suitable for a wide range of skin types and treatment goals while maintaining a balance between effectiveness and recovery time.",
            },
          ],
        },
      ],
    },
    recommended: {
      headline: "Recommended For",
      items: [
        {
          id: "morpheus8-1",
          text: "Those seeking deep skin remodeling for acne scars and uneven texture",
        },
        {
          id: "morpheus8-2",
          text: "Those who want to address both skin laxity and fat reduction in one treatment",
        },
        {
          id: "morpheus8-3",
          text: "Those looking for dramatic improvement in fine lines and deeper wrinkles",
        },
        {
          id: "morpheus8-4",
          text: "Those who prefer a minimally invasive alternative to surgical procedures",
        },
      ],
    },
    faq: {
      title: "Morpheus8",
      keyBenefitsTitle: "Key Benefits of",
      canHelpWithTitle: "Can Help With",
      benefits: [
        {
          title: "Minimally Invasive Treatment",
          text: "Controlled skin penetration allows for deeper and more effective remodeling than non-invasive options.",
        },
        {
          title: "Comprehensive Skin Renewal",
          text: "Improves texture, tone, firmness, and overall skin quality.",
        },
        {
          title: "Customizable & Versatile",
          text: "Suitable for different skin types and treatment goals on the face and body.",
        },
        {
          title: "Long-Lasting Results",
          text: "Gradual improvement continues as collagen regenerates over several weeks.",
        },
      ],
      helpsWith: [
        "Skin laxity and loss of firmness",
        "Fine lines and wrinkles",
        "Acne scars and uneven skin texture",
        "Enlarged pores",
        "Uneven skin tone",
        "Mild to moderate sagging in facial and body areas",
        "Overall skin quality and structure improvement",
      ],
    },
  },

  forma: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            {
              text: "Forma lifting is a non-invasive cosmetic treatment that uses radiofrequency (RF) energy ",
              bold: true,
            },
            {
              text: "to heat deep skin layers, stimulating new collagen production to tighten, lift, and firm sagging skin on the face, neck, and body, reducing wrinkles and improving texture with minimal downtime.",
            },
          ],
        },
        {
          text: "Unlike invasive procedures or injectable treatments, Forma delivers consistent, comfortable warmth without needles or downtime. Treatments are often described as a \"lunchtime facial,\" as sessions are quick and allow clients to return to daily activities immediately.",
        },
        {
          text: "Forma® is ideal for clients seeking subtle yet effective skin tightening and maintenance, whether as a standalone treatment or as part of a personalized aesthetic program.",
        },
      ],
    },
    recommended: {
      headline: "Recommended For",
      items: [
        {
          id: "forma-1",
          text: "Those seeking gentle, comfortable skin tightening with no downtime",
        },
        {
          id: "forma-2",
          text: "Those who want to maintain and enhance previous treatment results",
        },
        {
          id: "forma-3",
          text: "Those in their 30s and 40s looking for preventative anti-aging care",
        },
        {
          id: "forma-4",
          text: "Those who prefer gradual, natural-looking improvement over time",
        },
      ],
    },
    faq: {
      title: "Forma",
      keyBenefitsTitle: "Key Benefits of",
      canHelpWithTitle: "Can Help With",
      benefits: [
        {
          title: "Non-Invasive Treatment",
          text: "No needles, no incisions, and no recovery time required.",
        },
        {
          title: "Comfortable & Relaxing",
          text: "Warm, soothing sensation throughout the session.",
        },
        {
          title: "Targeted Treatment Areas",
          text: "Ideal for localized facial zones such as cheeks, jawline, and lower face.",
        },
        {
          title: "Safe for All Skin Types",
          text: "Suitable for a wide range of skin tones and conditions.",
        },
        {
          title: "Gradual, Natural Improvement",
          text: "Skin appears firmer, smoother, and more refined over time.",
        },
      ],
      helpsWith: [
        "Mild to moderate skin laxity",
        "Loss of firmness and elasticity",
        "Early aging concerns",
        "Dull or tired-looking skin",
        "Localized facial contour refinement",
      ],
    },
  },
};

const antiAgingCopyZh: Record<TreatmentId, TreatmentCopy> = {
  sofwave: {
    about: {
      subtitle: "非侵入性超声技术，用于紧致肌肤和自然提升。",
      paragraphs: [
        {
          segments: [
            {
              text: "Sofwave® 是一种非侵入性美容疗程，采用先进的 ",
            },
            {
              text: "SUPERB™ 同步超声平行波束技术",
              bold: true,
            },
            {
              text: "，改善肌肤紧致度、减少细纹，恢复自然提升的外观。",
            },
          ],
        },
        {
          text: "通过向真皮中层输送可控超声能量，Sofwave 刺激人体自然产生胶原蛋白和弹性蛋白——在最少恢复期的情况下，实现渐进、自然的年轻化效果。",
        },
      ],
    },
    recommended: {
      headline: "适合人群",
      items: [
        {
          id: "sofwave-1",
          text: "希望改善提升效果，而不担心面颊凹陷或下陷的人群",
        },
        {
          id: "sofwave-2",
          text: "希望直接针对性护理真皮层（皱纹来源）的人群",
        },
        {
          id: "sofwave-3",
          text: "30至50岁及以上，希望进行适龄胶原再生提升的人群",
        },
        {
          id: "sofwave-4",
          text: "需要护理笑纹、眼部皱纹、法令纹和木偶纹的人群",
        },
      ],
    },
    faq: {
      title: "Sofwave",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "可以改善的问题",
      benefits: [
        {
          title: "非侵入性治疗",
          text: "无需针头、手术或切口。",
        },
        {
          title: "紧肤与提升",
          text: "帮助改善轻度至中度肌肤松弛和软组织下垂。",
        },
        {
          title: "多样化治疗区域",
          text: "有效治疗面部细纹、皱纹、眉部提升、颈部紧致以及下颌下区域。",
        },
        {
          title: "适用于所有肤质",
          text: "经临床验证，对所有肤色安全有效。",
        },
        {
          title: "恢复期短",
          text: "大多数客户治疗后可立即恢复日常活动。",
        },
      ],
      helpsWith: [
        "肌肤松弛和紧致度下降",
        "细纹和皱纹",
        "下面部和下颌线轻度下垂",
        "眉部下垂",
        "颈部和下颌下肌肤松弛",
        "早期衰老迹象",
      ],
    },
  },

  thermage: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            {
              text: "Thermage® FLX 是 Thermage 第四代也是最新一代的非侵入性射频 (RF) 紧肤技术。",
              bold: true,
            },
            {
              text: " 由 Solta Medical 推出，旨在无需手术、针头或恢复期的情况下，平滑、紧致和塑形面部、眼部和身体肌肤。",
            },
          ],
        },
        {
          segments: [
            {
              text: "Thermage FLX 在全球范围内得到认可并经过临床验证，是 ",
            },
            {
              text: "唯一一种获批用于眼周区域的非侵入性紧肤技术",
              bold: true,
            },
            {
              text: "，使其成为敏感区域以及全脸和颈部治疗的可靠选择。",
            },
          ],
        },
        {
          text: "通过均匀加热真皮深层，Thermage FLX 刺激胶原蛋白重塑，同时紧致现有胶原纤维——在最少恢复期的情况下，实现更平滑、更紧致、自然提升的肌肤外观。",
        },
      ],
    },
    recommended: {
      headline: "适合人群",
      items: [
        {
          id: "thermage-1",
          text: "肌肤薄弱、曾推迟提升治疗的人群",
        },
        {
          id: "thermage-2",
          text: "关注细纹和毛孔粗大的人群",
        },
        {
          id: "thermage-3",
          text: "希望改善粗糙肤质弹性的人群",
        },
        {
          id: "thermage-4",
          text: "希望进行微妙抗衰老和整体面部弹性改善的人群",
        },
      ],
    },
    faq: {
      title: "Thermage FLX",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "可以改善的问题",
      benefits: [
        {
          title: "最新一代技术",
          text: "Thermage FLX 代表了 Thermage 的最先进演进，提供改进的舒适度和精确性。",
        },
        {
          title: "眼部安全且经过验证",
          text: "在全球范围内被认可为唯一一种获批用于敏感眼周区域的非侵入性紧肤治疗。",
        },
        {
          title: "非侵入性治疗",
          text: "无需针头、注射或破坏肌肤。",
        },
        {
          title: "紧肤与塑形",
          text: "刺激胶原蛋白增生和再生，改善松弛和轮廓。",
        },
        {
          title: "恢复期短",
          text: "大多数客户治疗后可立即恢复日常活动。",
        },
      ],
      helpsWith: [
        "肌肤松弛和紧致度下降",
        "细纹和皱纹",
        "眼周肌肤松弛和皱纹",
        "下颌线和下面部下垂",
        "颈部肌肤松弛",
        "早期衰老迹象",
      ],
    },
  },

  morpheus8: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Morpheus8® 是一种微创治疗，" },
            {
              text: "结合微针和射频 (RF) 能量，针对肌肤深层",
              bold: true,
            },
            {
              text: "。通过制造可控的微创伤并在表面下输送射频热量，刺激胶原蛋白和弹性蛋白的产生，改善肌肤紧致度、质地和整体品质。",
            },
          ],
        },
        {
          segments: [
            { text: "与非侵入性治疗不同，Morpheus8 " },
            {
              text: "穿透肌肤屏障",
              bold: true,
            },
            {
              text: "，实现肌肤和底层组织的深层重塑。这使其对肌肤松弛、毛孔粗大、痤疮疤痕和不均匀质地等问题特别有效。",
            },
          ],
        },
        {
          segments: [
            { text: "Morpheus8 的 " },
            {
              text: "深度和强度完全可定制",
              bold: true,
            },
            {
              text: "，适合各种肤质和治疗目标，同时在有效性和恢复时间之间保持平衡。",
            },
          ],
        },
      ],
    },
    recommended: {
      headline: "适合人群",
      items: [
        {
          id: "morpheus8-1",
          text: "寻求针对痤疮疤痕和不均匀质地进行深层肌肤重塑的人群",
        },
        {
          id: "morpheus8-2",
          text: "希望在一次治疗中同时解决肌肤松弛和脂肪减少问题的人群",
        },
        {
          id: "morpheus8-3",
          text: "希望显著改善细纹和深层皱纹的人群",
        },
        {
          id: "morpheus8-4",
          text: "偏好微创替代手术的人群",
        },
      ],
    },
    faq: {
      title: "Morpheus8",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "可以改善的问题",
      benefits: [
        {
          title: "微创治疗",
          text: "可控肌肤穿透，实现比非侵入性选项更深层、更有效的重塑。",
        },
        {
          title: "全面肌肤更新",
          text: "改善质地、肤色、紧致度和整体肌肤品质。",
        },
        {
          title: "可定制且多功能",
          text: "适合不同肤质和面部及身体治疗目标。",
        },
        {
          title: "持久效果",
          text: "随着胶原蛋白在数周内再生，效果逐步改善。",
        },
      ],
      helpsWith: [
        "肌肤松弛和紧致度下降",
        "细纹和皱纹",
        "痤疮疤痕和不均匀肤质",
        "毛孔粗大",
        "肤色不均",
        "面部和身体区域的轻度至中度下垂",
        "整体肌肤品质和结构改善",
      ],
    },
  },

  forma: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            {
              text: "Forma 提升是一种非侵入性美容治疗，使用射频 (RF) 能量 ",
              bold: true,
            },
            {
              text: "加热肌肤深层，刺激新胶原蛋白的产生，紧致、提升和塑形面部、颈部和身体的下垂肌肤，减少皱纹，改善质地，且恢复期极短。",
            },
          ],
        },
        {
          text: "与侵入性程序或注射治疗不同，Forma 提供持续、舒适的温暖感，无需针头或恢复期。治疗通常被描述为\"午餐美容\"，因为疗程快速，客户可立即恢复日常活动。",
        },
        {
          text: "Forma® 适合寻求微妙而有效的紧肤和维护的客户，无论是作为独立治疗还是个性化美容计划的一部分。",
        },
      ],
    },
    recommended: {
      headline: "适合人群",
      items: [
        {
          id: "forma-1",
          text: "寻求温和、舒适的紧肤治疗且无恢复期的人群",
        },
        {
          id: "forma-2",
          text: "希望维持和增强先前治疗效果的人群",
        },
        {
          id: "forma-3",
          text: "30至40岁，寻求预防性抗衰老护理的人群",
        },
        {
          id: "forma-4",
          text: "偏好随时间渐进、自然外观改善的人群",
        },
      ],
    },
    faq: {
      title: "Forma",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "可以改善的问题",
      benefits: [
        {
          title: "非侵入性治疗",
          text: "无需针头、切口或恢复时间。",
        },
        {
          title: "舒适且放松",
          text: "整个疗程中温暖、舒缓的感觉。",
        },
        {
          title: "针对性治疗区域",
          text: "适合局部面部区域，如脸颊、下颌线和下面部。",
        },
        {
          title: "适用于所有肤质",
          text: "适合各种肤色和肌肤状况。",
        },
        {
          title: "渐进、自然改善",
          text: "随着时间推移，肌肤变得更紧致、更平滑、更精致。",
        },
      ],
      helpsWith: [
        "轻度至中度肌肤松弛",
        "紧致度和弹性下降",
        "早期衰老问题",
        "暗沉或疲惫外观的肌肤",
        "局部面部轮廓精修",
      ],
    },
  },
};

// Backward-compatible default export for any code still importing antiAgingCopy directly
export const antiAgingCopy = antiAgingCopyEn;

// Bilingual content object for new i18n pattern
export const antiAgingContent: {
  en: Record<TreatmentId, TreatmentCopy>;
  zh: Record<TreatmentId, TreatmentCopy>;
} = {
  en: antiAgingCopyEn,
  zh: antiAgingCopyZh,
};
