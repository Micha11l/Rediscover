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
        "Non-invasive ultrasound skin tightening for natural contour refinement.",
      paragraphs: [
        {
          segments: [
            {
              text: "Sofwave is an innovative non-invasive aesthetic treatment that uses advanced ",
            },
            {
              text: "SUPERB™ (Synchronous Ultrasound Parallel Beam)",
              bold: true,
            },
            {
              text: " technology to precisely target the mid-dermis, gently tightening skin, softening fine lines, and restoring a naturally defined contour.",
            },
          ],
        },
        {
          text: "By delivering controlled ultrasound energy beneath the skin, Sofwave stimulates collagen and elastin renewal from within. The treatment is comfortable, downtime is minimal, and results build gradually for a natural-looking lifting effect.",
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
          title: "Non-Invasive Ultrasound Tightening",
          text: "No needles, no surgery, and no incisions required.",
        },
        {
          title: "Dermal-Level Collagen Renewal",
          text: "SUPERB™ energy works in the mid-dermis to support firmer, more elastic skin.",
        },
        {
          title: "Natural Contour Refinement",
          text: "Helps improve the face, neck, jawline, and other areas without an overdone look.",
        },
        {
          title: "Safe Across Skin Types",
          text: "Clinically proven to be broadly compatible across different skin tones.",
        },
        {
          title: "Minimal Downtime",
          text: "Most patients return to daily activities immediately after treatment.",
        },
      ],
      helpsWith: [
        "Mild to moderate facial laxity",
        "Fine lines and early wrinkles",
        "Jawline softness and lower-face sagging",
        "Brow and upper-face descent",
        "Neck laxity and crepey skin",
        "Early collagen loss and contour blurring",
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
              text: "Thermage FLX is Solta Medical's fifth-generation monopolar radiofrequency skin-tightening technology, ",
              bold: true,
            },
            {
              text: "designed to smooth, firm, and contour the face, eye area, and body without surgery, needles, or downtime.",
            },
          ],
        },
        {
          text: "Clinically established worldwide, Thermage FLX is the only non-invasive tightening technology cleared for use around the eyes, making it especially trusted for delicate areas as well as full-face and neck rejuvenation.",
        },
        {
          text: "By precisely heating the deep dermis, Thermage FLX delivers immediate collagen contraction while triggering long-term collagen renewal, so skin gradually looks firmer, smoother, and naturally lifted over time.",
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
      canHelpWithTitle: "Can Address",
      benefits: [
        {
          title: "Fifth-Generation Intelligent RF Delivery",
          text: "FLX uses smarter energy delivery for greater precision, comfort, and treatment consistency.",
        },
        {
          title: "Globally Cleared for Eye-Area Use",
          text: "It remains the only non-invasive tightening technology approved for delicate eyelid and peri-orbital treatment.",
        },
        {
          title: "Non-Invasive, Comfortable, and Walk-In/Walk-Out",
          text: "No needles, no surgery, and no surface injury, with a comfortable treatment experience and no disruption to daily life.",
        },
        {
          title: "Immediate Tightening + Long-Term Regeneration",
          text: "Deep thermal stimulation contracts existing collagen and supports long-term collagen rebuilding.",
        },
        {
          title: "No Downtime for Daily Life",
          text: "Temporary redness is usually mild and brief, so most clients return to work and social routines right away.",
        },
      ],
      helpsWith: [
        "Facial laxity, brow descent, jawline softness, and sagging tissue",
        "Fine lines, nasolabial folds, marionette lines, and neck lines",
        "Rough texture, visible pores, and declining elasticity",
        "Blurred contour, cheek descent, and submental fullness",
      ],
    },
  },

  morpheus8: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Morpheus8 RF microneedling " },
            {
              text: "combines microneedling with radiofrequency (RF) energy to remodel the skin from within",
              bold: true,
            },
            {
              text: ". By creating controlled micro-injuries while delivering heat into the dermis and subdermal tissue, it stimulates collagen and elastin renewal to improve firmness, texture, and overall skin quality.",
            },
          ],
        },
        {
          text: "Unlike non-invasive treatments, Morpheus8 crosses the skin barrier to achieve deeper remodeling of both the skin and underlying support structures. This makes it especially effective for laxity, enlarged pores, acne scars, atrophic scarring, uneven texture, and fine wrinkles.",
        },
        {
          text: "Treatment depth and energy can be tailored to the area, skin type, and treatment goal, allowing precise rejuvenation on the face, neck, and body while balancing visible improvement with recovery time.",
        },
        {
          text: "Morpheus8 helps awaken the skin's regenerative response for firmer, smoother, and more youthful-looking skin.",
        },
      ],
    },
    recommended: {
      headline: "Recommended For",
      items: [
        {
          id: "morpheus8-1",
          text: "Those seeking deep skin remodeling for acne scars, stretch marks, and uneven texture",
        },
        {
          id: "morpheus8-2",
          text: "Those who want to improve skin laxity, pores, and scarring within one treatment course",
        },
        {
          id: "morpheus8-3",
          text: "Those looking for stronger remodeling than non-invasive anti-aging treatments",
        },
        {
          id: "morpheus8-4",
          text: "Those who prefer a customizable minimally invasive option for face, neck, or body rejuvenation",
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
        "Mild to moderate skin laxity on the face, neck, and body",
        "Fine lines, wrinkles, and crepey texture",
        "Acne scars, atrophic scars, and stretch marks",
        "Enlarged pores and rough, uneven texture",
        "Uneven tone, dullness, and loss of radiance",
        "Reduced elasticity and weakened structural support",
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
              text: "Forma is a non-invasive radiofrequency (RF) treatment that ",
              bold: true,
            },
            {
              text: "gently heats the dermis to stimulate collagen renewal, helping tighten, lift, and contour the face, neck, and body with minimal downtime.",
            },
          ],
        },
        {
          text: "Unlike surgery or injectables, Forma delivers a steady, comfortable warmth without needles, incisions, or recovery time. Because sessions are fast and convenient, it is often described as a \"lunchtime\" skin-tightening treatment.",
        },
        {
          text: "Forma can be performed on its own or as part of a personalized aesthetic plan for clients seeking gradual, natural-looking firming and maintenance care.",
        },
        {
          text: "Forma Plus expands treatment efficiency and coverage for larger or more complex areas such as the jawline, abdomen, and arms.",
        },
      ],
    },
    recommended: {
      headline: "Recommended For",
      items: [
        {
          id: "forma-1",
          text: "Those who want to improve mild laxity on the face, neck, or body with natural-looking firming",
        },
        {
          id: "forma-2",
          text: "Those dealing with fine lines, rough texture, or blurred contours and hoping for a gradual lift",
        },
        {
          id: "forma-3",
          text: "Those who prefer a non-invasive, no-downtime, comfortable treatment experience",
        },
        {
          id: "forma-4",
          text: "Those seeking a long-term maintenance option for regular anti-aging care",
        },
      ],
    },
    faq: {
      title: "Forma",
      keyBenefitsTitle: "Key Benefits of",
      canHelpWithTitle: "Can Help With",
      benefits: [
        {
          title: "Non-Invasive and Walk-In/Walk-Out",
          text: "No needles, no incisions, and no recovery period are required.",
        },
        {
          title: "Warm, Comfortable Experience",
          text: "The treatment feels like a controlled, soothing thermal spa rather than an aggressive procedure.",
        },
        {
          title: "Targeted Contour Refinement",
          text: "Especially useful for focal areas such as the cheeks, jawline, lower face, and other localized zones.",
        },
        {
          title: "Broad Skin-Type Compatibility",
          text: "Energy delivery is gentle and controlled across a wide range of tones and skin types.",
        },
        {
          title: "Gradual, Natural Change",
          text: "Skin progressively looks firmer, smoother, and more refined without a sudden or artificial effect.",
        },
      ],
      helpsWith: [
        "Facial skin laxity and declining elasticity",
        "Blurred jawline and submental fullness",
        "Fine lines around the eyes and upper-eyelid laxity",
        "Horizontal neck lines and neck looseness",
        "Localized skin sagging on the body, such as the abdomen or arms",
      ],
    },
  },
};

const antiAgingCopyZh: Record<TreatmentId, TreatmentCopy> = {
  sofwave: {
    about: {
      subtitle: "非侵入性超声紧肤，重塑自然轮廓。",
      paragraphs: [
        {
          segments: [
            {
              text: "索芙波是一项创新的非侵入性美容疗程，采用先进的 ",
            },
            {
              text: "SUPERB™ 同步超声平行波束技术",
              bold: true,
            },
            {
              text: "，精准作用于真皮中层，温和而有效地收紧肌肤，改善细纹与松弛，恢复面部自然立体的轮廓。",
            },
          ],
        },
        {
          text: "该技术通过向皮肤深层输送可控的超声能量，刺激胶原蛋白与弹性蛋白的新生，帮助肌肤由内而外逐步恢复紧致与弹性。疗程过程舒适，恢复期短，效果渐进自然，适合追求安全、高效抗老方案的人群。",
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
      title: "索芙波",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "可以改善的问题",
      benefits: [
        {
          title: "无创超声紧肤",
          text: "无需针头、手术或切口，即可完成深层紧致管理。",
        },
        {
          title: "胶原新生不伤表层",
          text: "在真皮层内促进胶原更新，同时保持表皮舒适与完整。",
        },
        {
          title: "自然轮廓提升",
          text: "适合改善面部、颈部与下颌线的轻中度松弛与轮廓感下降。",
        },
        {
          title: "广泛肤质兼容",
          text: "能量稳定可控，适用于多种肤色与肤质类型。",
        },
        {
          title: "恢复期短",
          text: "大多数客户治疗后可立即恢复日常活动。",
        },
      ],
      helpsWith: [
        "面部轻中度松弛与轮廓下垂",
        "细纹与早期皱纹",
        "下颌线模糊与下面部轻度下垂",
        "眉尾下垂与上面部支撑减弱",
        "颈部松弛与下颌下轮廓感下降",
        "早期胶原流失导致的初老迹象",
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
              text: "热玛吉 FLX 是出自 Solta Medical 的第五代非侵入式单极射频紧肤技术，也是该系列的最新升级版本。",
              bold: true,
            },
            {
              text: " 它无需手术、无针无创，亦无恢复期，即可对面部、眼周及身体肌肤进行紧致、平滑与轮廓重塑。",
            },
          ],
        },
        {
          text: "作为全球临床验证的经典抗衰项目，Thermage FLX 是目前唯一获得监管许可、可安全用于眼周区域的非侵入式紧肤技术，在敏感部位及全脸颈部治疗中均展现出卓越的可靠性与效果。",
        },
        {
          text: "该技术通过精准加热真皮深层，同步实现胶原蛋白的即刻收缩与长期再生。既能紧致现有胶原纤维，又能刺激新生胶原持续重塑，令肌肤逐步呈现紧实、平滑、自然上扬的年轻状态。",
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
      title: "热玛吉 FLX",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "适用问题",
      benefits: [
        {
          title: "第五代智能射频技术",
          text: "作为 Thermage 系列的最新一代升级，FLX 搭载更智能的能量发射系统，精准调控每一发射频脉冲，在确保效果的同时提升舒适度与安全性。",
        },
        {
          title: "全球唯一眼周合规认证",
          text: "凭借精准加热控制与表皮保护，Thermage FLX 是目前唯一获监管机构批准可安全用于眼睑等敏感区域的非侵入式紧肤技术。",
        },
        {
          title: "无创无痛，即做即走",
          text: "无需针剂、无需手术、无表皮创伤，治疗舒适，结束后即可恢复正常生活。",
        },
        {
          title: "即刻紧致 + 长效再生",
          text: "通过立体加热真皮深层，触发胶原纤维即刻收缩，同时启动胶原蛋白长期新生，实现自然且持久的紧致提升。",
        },
        {
          title: "零恢复期，不影响日常",
          text: "治疗后仅可能出现轻微泛红，多数情况下数小时内消退，绝大多数客户可即刻回归工作与社交。",
        },
      ],
      helpsWith: [
        "面部松弛：提升眉尾、收紧下颌线，改善下垂组织",
        "皱纹细纹：淡化法令纹、木偶纹及颈部横纹",
        "肤质粗糙：通过胶原重塑，细腻毛孔，提升肌肤弹性",
        "轮廓模糊：针对苹果肌复位、双下巴有收紧效果",
      ],
    },
  },

  morpheus8: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "魔肤微针——微针射频联合，重塑肌底年轻力。", bold: true },
          ],
        },
        {
          text: "魔肤微针是一款创新的微创治疗技术，它将微针的物理穿透与射频（RF）能量的热作用相结合，精准作用至肌肤深层。通过制造可控的微创伤并在真皮及皮下组织释放射频热量，能够高效刺激胶原蛋白与弹性蛋白新生，从而实现肌肤紧致度、质地与整体品质的显著提升。",
        },
        {
          text: "与非侵入性治疗不同，魔肤微针能够突破表皮屏障，直接作用于深层组织，实现由内而外的立体重塑。这一独特机制使其尤其擅长改善：肌肤松弛与弹性下降、毛孔粗大、痤疮疤痕及其他凹陷性疤痕，以及肤质不均与细纹皱纹。",
        },
        {
          text: "治疗深度与能量强度均可根据个人肤质、部位及目标灵活调节，确保在效果与恢复期之间达到理想平衡。无论是面部、颈部还是身体其他区域，魔肤微针都能提供个性化精准治疗。",
        },
        {
          text: "魔肤微针——用科技唤醒肌肤自愈力，重塑紧致平滑的年轻质感。",
        },
      ],
    },
    recommended: {
      headline: "适合人群",
      items: [
        {
          id: "morpheus8-1",
          text: "寻求针对痤疮疤痕、妊娠纹和不均匀质地进行深层肌肤重塑的人群",
        },
        {
          id: "morpheus8-2",
          text: "希望同步改善肌肤松弛、毛孔粗大与疤痕问题的人群",
        },
        {
          id: "morpheus8-3",
          text: "希望获得强于非侵入疗程的重塑效果，同时仍接受可控恢复期的人群",
        },
        {
          id: "morpheus8-4",
          text: "偏好可依部位与肤质定制深度和能量的微创抗老方案的人群",
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
        "面部、颈部及身体局部的轻度至中度肌肤松弛",
        "细纹、皱纹与松弛带来的质感下降",
        "痤疮疤痕、凹陷性疤痕与妊娠纹",
        "毛孔粗大、粗糙与不均匀肤质",
        "暗沉、肤色不均与光泽度下降",
        "弹性流失与结构性支撑减弱",
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
              text: "Forma——温感焕肤，重塑轮廓的“午餐式”美学。",
              bold: true,
            },
          ],
        },
        {
          text: "Forma 是一项非侵入性射频（RF）美容技术，通过温和加热真皮层，刺激胶原蛋白新生，实现面部、颈部及身体肌肤的紧致、提升与轮廓重塑。它能有效改善松弛、淡化细纹、优化肤质，且恢复期极短，是日常维养与抗衰管理的理想选择。",
        },
        {
          text: "与手术或注射类治疗不同，Forma 以持续舒适的温热感作用于肌肤深层，全程无痛、无创、无需恢复。单次治疗快速便捷，结束后即可立即回归正常生活，因此被广泛誉为“午餐式美容”。",
        },
        {
          text: "Forma 既可独立施作，亦可作为个性化美容方案的组成部分，为追求自然、渐进效果的客户提供安全、舒适的紧肤体验。",
        },
        {
          text: "Forma Plus 升级之选：Forma Plus 在原有技术基础上进一步优化能量覆盖与治疗效率，适用于更大面积或更复杂区域，如面部、下颌线、腹部、手臂等。",
        },
      ],
    },
    recommended: {
      headline: "适合人群",
      items: [
        {
          id: "forma-1",
          text: "希望改善面部、颈部或身体轻度松弛，追求自然紧致效果的人群",
        },
        {
          id: "forma-2",
          text: "存在细纹、肤质粗糙或轮廓模糊，期待渐进式提升的人群",
        },
        {
          id: "forma-3",
          text: "偏好非侵入、无恢复期、舒适便捷治疗方式的人群",
        },
        {
          id: "forma-4",
          text: "寻求可作为定期维养的长期抗衰方案的人群",
        },
      ],
    },
    faq: {
      title: "Forma",
      keyBenefitsTitle: "主要优势",
      canHelpWithTitle: "可以改善的问题",
      benefits: [
        {
          title: "无创无痕，即做即走",
          text: "无需针头、无需切口、无恢复期，治疗结束后即可恢复正常生活，是轻负担式美学护理。",
        },
        {
          title: "温感舒享，全程放松",
          text: "整个过程以持续舒适的温热感为主导，无痛无灼热，体验更接近温热 SPA。",
        },
        {
          title: "精雕局部，重点提升",
          text: "特别适合脸颊松弛、下颌线模糊和下面部堆积等局部区域的精准紧塑。",
        },
        {
          title: "普适兼容，全肤质适用",
          text: "能量温和可控，适用于多种肤色与肤质，包括敏感肌与深肤色人群。",
        },
        {
          title: "渐进蜕变，自然有致",
          text: "效果随时间逐步显现，肌肤愈发紧致、平滑、细腻，自然但可感知。",
        },
      ],
      helpsWith: [
        "面部肌肤松弛、弹性下降",
        "下颌线模糊、双下巴",
        "眼周细纹、上眼睑松弛",
        "颈部横纹与松弛",
        "身体局部皮肤松垂，如腹部与手臂",
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
