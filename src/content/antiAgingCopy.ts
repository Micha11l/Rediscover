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
  repCards?: FaqBenefit[];
  faq: {
    title: string;
    keyBenefitsTitle: string;
    canHelpWithTitle: string;
    canHelpWithAccent?: string;
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
      subtitle: "",
      paragraphs: [
        {
          text: "ThermageFLX is Solta Medical\u2019s fifth-generation non-invasive monopolar radiofrequency skin tightening technology and the latest upgraded version in the series. It is non-surgical, needle-free, non-invasive, and requires no recovery time, providing firming, smoothing, and contouring treatments for the face, eye area, and body.",
        },
        {
          text: "Thermage\u00AEFLX is one of the only FDA-approved non-invasive treatments specifically cleared for use on both the upper and lower eyelid.",
        },
        {
          text: "This technology precisely heats the deep dermis, simultaneously achieving immediate contraction and long-term regeneration of collagen. It not only tightens existing collagen fibers but also stimulates the continuous remodeling of new collagen, gradually revealing a firm, smooth, and naturally lifted youthful appearance.",
        },
      ],
    },
    recommended: {
      headline: "Why Thermage",
      items: [
        {
          id: "thermage-recommended-1",
          text: "Non-surgical skin tightening & contour support",
        },
        {
          id: "thermage-recommended-2",
          text: "Helps improve firmness, texture, and elasticity",
        },
        {
          id: "thermage-recommended-3",
          text: "Suitable for face, jawline, neck, and eye area",
        },
        {
          id: "thermage-recommended-4",
          text: "Minimal downtime, customizable treatment settings",
        },
      ],
    },
    repCards: [
      { title: "900REP", text: "Comprehensive Thermage treatment for the full face and neck to improve skin firmness, elasticity, and overall contour." },
      { title: "600REP", text: "Targeted Thermage treatment for localized areas to enhance firmness and definition." },
      { title: "300REP", text: "Focused treatment for small areas to refine skin texture and address mild skin laxity." },
      { title: "450REP(Eye)", text: "Specialized Thermage treatment for the eye area to tighten delicate skin and smooth fine lines around the eyes." },
    ],
    faq: {
      title: "Key Benefits",
      keyBenefitsTitle: "ThermageFLX",
      canHelpWithTitle: "Indications for",
      canHelpWithAccent: "ThermageFLX",
      benefits: [
        {
          title: "5th-Generation Intelligent RF Technology",
          text: "As the latest advancement in the Thermage series, FLX features a more intelligent energy delivery system that precisely controls each RF pulse, enhancing both treatment comfort and safety while maintaining optimal results.",
        },
        {
          title: "Globally Approved for Eye Area Treatment",
          text: "With precise heat control and integrated epidermal cooling, ThermageFLX is currently the only non-invasive skin tightening technology approved for use on delicate areas such as the eyelids, trusted by medical professionals worldwide.",
        },
        {
          title: "Non-Invasive, Comfortable, No Downtime",
          text: "No needles, no surgery, and no surface damage. The treatment is comfortable, and clients can immediately return to their daily activities — a true \"lunchtime\" procedure.",
        },
        {
          title: "Immediate Tightening with Long-Term Regeneration",
          text: "By delivering controlled heat to the deep dermal layers, ThermageFLX triggers immediate collagen contraction while stimulating long-term collagen production, resulting in natural, long-lasting lifting and contouring.",
        },
        {
          title: "Zero Downtime, Minimal Disruption",
          text: "Mild redness may occur temporarily and typically subsides within a few hours. Most clients can resume work and social activities right away without special aftercare.",
        },
      ],
      helpsWith: [
        "Skin laxity and loss of elasticity",
        "Blurred jawline or double chin",
        "Fine lines around the eyes and eyelid laxity",
        "Neck wrinkles and skin looseness",
        "Mild to moderate skin laxity on the body (e.g., abdomen, arms)",
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
          text: "热玛吉FLX (第五代) | 智能全层紧致系统",
        },
        {
          text: "Thermage®FLX：定义非侵入式抗衰新标准",
        },
        {
          text: "热玛吉FLX 是全球公认的抗衰标杆。它利用单极射频 (Monopolar RF) 技术，跨越表皮，直接作用于真皮层及皮下组织，实现从内而外的深度紧致与轮廓重塑。",
        },
        {
          text: "核心技术原理",
        },
        {
          text: "三维立体加热 · 胶原再生工程",
        },
        {
          text: "1. 即刻收缩： 射频能量产生 65°C-75°C 的热效应，促使胶原纤维瞬时收缩，术后即刻紧致。",
        },
        {
          text: "2. 深度修复： 热能直达 4.3mm 皮肤深层，激活成纤维细胞大量增生。",
        },
        {
          text: "3. 长效重塑： 术后 3-6 个月进入胶原生长高峰期，皮肤弹性、厚度及光泽度显著提升。",
        },
      ],
    },
    recommended: {
      headline: "FLX 三大核心优势",
      items: [
        {
          id: "thermage-recommended-1",
          text: "AccuREP™ 智能调节： 每一发能量输出前，系统自动检测局部阻抗，实现“私人定制”般的精准能量分布。",
        },
        {
          id: "thermage-recommended-2",
          text: "全方位震动减痛： 采用改良版多方向震动模式，有效干扰痛觉信号，治疗过程更舒适。",
        },
        {
          id: "thermage-recommended-3",
          text: "4.0 智能探头： 治疗面积增加 33%，覆盖更广、速度更快，显著缩短治疗时长。",
        },
      ],
    },
    repCards: [
      { title: "900REP", text: "全面的 Thermage 疗程，针对全脸及颈部，改善肌肤紧致度、弹性和整体轮廓。" },
      { title: "600REP", text: "针对局部区域的精准 Thermage 疗程，增强紧致度和轮廓感。" },
      { title: "300REP", text: "针对小面积的集中疗程，改善肌肤质感，解决轻度松弛问题。" },
      { title: "450REP（眼部）", text: "专为眼周设计的 Thermage 疗程，紧致娇嫩肌肤，抚平眼周细纹。" },
    ],
    faq: {
      title: "核心优势",
      keyBenefitsTitle: "热玛吉第五代",
      canHelpWithTitle: "适用问题",
      canHelpWithAccent: "热玛吉第五代",
      benefits: [
        {
          title: "第五代智能射频技术",
          text: "作为 Thermage 系列的最新一代升级，FLX 搭载更智能的能量发射系统，精准调控每一发射频脉冲，在确保效果的同时大幅提升治疗舒适度与安全性。",
        },
        {
          title: "全球唯一眼周合规认证",
          text: "凭借其精准的加热控制与表皮冷却保护，热玛吉第五代是目前全球唯一获监管机构批准、可安全用于眼睑等敏感区域的非侵入式紧肤技术，深受专业医师信赖。",
        },
        {
          title: "无创无痛，即做即走",
          text: "无需针剂、无需手术、无表皮创伤，治疗过程舒适，结束后即可恢复正常生活，是真正意义上的\u201C午餐式\u201D美容。",
        },
        {
          title: "即刻紧致 + 长效再生",
          text: "通过立体加热真皮深层，触发胶原纤维即刻收缩，同时启动胶原蛋白长期新生，实现由内而外的紧致提升与轮廓重塑，效果自然且持久。",
        },
        {
          title: "零恢复期，不影响日常",
          text: "治疗后仅可能出现轻微泛红，数小时内消退，绝大多数客户可即刻回归工作与社交，无需特殊护理。",
        },
      ],
      helpsWith: [
        "面部肌肤松弛、弹性下降",
        "下颌线模糊、双下巴",
        "眼周细纹、上眼睑松弛",
        "颈部横纹与松弛",
        "身体局部皮肤松垂（如腹部、手臂）",
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
          text: "Forma Plus 升级之选：Forma Plus 在原有技术基础上进一步优化能量覆盖与治疗效率，适用于更大面积或更复杂区域，如大腿内侧、下颌线、腹部、手臂等。",
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
      title: "热立塑",
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
