/**
 * Laser & Light Therapy Treatment Copy
 *
 * Centralized content module for Laser & Light Therapy sections.
 */

export type LaserSectionId = "lumecca" | "pigmentation" | "hair-removal";

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type RecommendedItem = {
  id: string;
  text: string;
};

export type LayoutTweaks = {
  leftTopPx?: number;
  leftHeightPx?: number;
  rightTopPx?: number;
  rightHeightPx?: number;
  rightTranslateYPx?: number;
  rightWidthPx?: number;
  rightScale?: number;
  rightShiftPx?: number;
};

export type LaserCopy = {
  hero: {
    title: string;
    subtitle: string;
    breadcrumbLabel: string;
    processItems: Array<{ id: LaserSectionId; label: string; href: string }>;
    image: { src: string; alt: string };
  };
  lumecca: {
    about: {
      title: string;
      subtitle: string;
      paragraphs: Paragraph[];
    };
    recommended: {
      items: RecommendedItem[];
    };
    processText: string;
    benefits: string[];
    helpsWith: string[];
    beforeAfter: {
      beforeSrc: string;
      afterSrc: string;
      beforeAlt: string;
      afterAlt: string;
    };
    images: {
      left: { src: string; alt: string };
      right: { src: string; alt: string };
    };
    layoutTweaks?: LayoutTweaks;
  };
  pigmentation: {
    about: {
      title: string;
      subtitle: string;
      paragraphs: Paragraph[];
    };
    recommended: {
      items: RecommendedItem[];
    };
    processText: string;
    benefits: string[];
    helpsWith: string[];
    beforeAfter: {
      beforeSrc: string;
      afterSrc: string;
      beforeAlt: string;
      afterAlt: string;
    };
    images: {
      left: { src: string; alt: string };
      right: { src: string; alt: string };
    };
    layoutTweaks?: LayoutTweaks;
  };
  hairRemoval: {
    title: string;
    titleParts: { primary: string; accent: string };
    description: string;
    descriptionSegments: Array<{ text: string; bold?: boolean }>;
    groups: Array<{ rows: Array<{ label: string; price: string }> }>;
  };
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

const laserCopyEn: LaserCopy = {
  hero: {
    title: "Laser & Light Therapy",
    subtitle:
      "Targeted laser and light-based treatments to brighten skin, improve tone, and address common pigmentation and hair concerns.",
    breadcrumbLabel: "Laser & Light Therapy",
    processItems: [
      { id: "lumecca", label: "Lumecca Photo Facial", href: "#lumecca" },
      { id: "pigmentation", label: "Pigmentation Management", href: "#pigmentation" },
      { id: "hair-removal", label: "Hair Removal", href: "#hair-removal" },
    ],
    image: {
      src: "/images/laser/laser-hero.png",
      alt: "Laser and light therapy treatment imagery",
    },
  },
  lumecca: {
    about: {
      title: "Lumecca Photo Facial",
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Lumecca Photo Facial is " },
            { text: "an advanced Intense Pulsed Light (IPL) treatment", bold: true },
            { text: " designed to enhance skin clarity, radiance, and overall tone evenness. Using high-energy, broad-spectrum light technology, Lumecca precisely targets pigmentation and vascular skin concerns at their source, effectively reducing discoloration and visibly diminishing facial redness." },
          ],
        },
        {
          text: "Compared to traditional IPL treatments, Lumecca delivers optimized high-energy pulses for superior results with fewer sessions and shorter recovery. It also stimulates new collagen production to improve skin quality from within, leaving the complexion clearer, brighter, and more even\u2014with a naturally refreshed glow.",
        },
      ],
    },
    recommended: {
      items: [
        { id: "lumecca-rec-1", text: "Those who want to improve pigmentation and sun damage" },
        { id: "lumecca-rec-2", text: "Those experiencing redness, rosacea, or broken capillaries" },
        { id: "lumecca-rec-3", text: "Those seeking brighter, clearer skin with minimal downtime" },
        { id: "lumecca-rec-4", text: "Those looking for fast, visible results with non-invasive treatment" },
      ],
    },
    processText: "Relaxation Back Massage → Cleansing → Peeling → Steaming → Extraction → Eyebrow Shaping → IPL for Full Face & Neck → Serum Infusion → Double Layer Masks → Shoulder, Head & Hand Massage (Included)",
    benefits: [
      "Improves pigmentation, sun spots, and uneven skin tone",
      "Reduces redness and vascular concerns",
      "Enhances overall skin clarity and radiance",
      "Non-invasive treatment with minimal downtime",
      "Suitable for face and select body areas",
    ],
    helpsWith: [
      "Sun spots and age spots",
      "Redness and rosacea",
      "Broken capillaries",
      "Uneven skin tone",
      "Dull or tired-looking skin",
    ],
    beforeAfter: {
      beforeSrc: "/images/laser/lumecca-before.png",
      afterSrc: "/images/laser/lumecca-after.png",
      beforeAlt: "Before Lumecca treatment",
      afterAlt: "After Lumecca treatment",
    },
    images: {
      left: {
        src: "/images/laser/lumecca-left.png",
        alt: "Lumecca device front view",
      },
      right: {
        src: "/images/laser/lumecca-right.png",
        alt: "Lumecca device angled view",
      },
    },
    layoutTweaks: {
      rightWidthPx: 500,
      rightHeightPx: 500,
      rightTopPx: 100,
      rightTranslateYPx: 60,
      rightScale: 0.85,
      rightShiftPx: 80,
    },
  },
  pigmentation: {
    about: {
      title: "Pigmentation Management",
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Lumecca Precision Pigmentation Management. ", bold: true },
            { text: "Say goodbye to stubborn spots and welcome a clearer, brighter complexion. InMode's pigmentation protocol uses " },
            { text: "Lumecca IPL (Intense Pulsed Light) technology", bold: true },
            { text: " to address discoloration linked to photoaging, sun damage, age spots, freckles, and uneven tone." },
          ],
        },
        {
          segments: [
            { text: "By emitting " },
            { text: "high-energy, precisely targeted broad-spectrum light", bold: true },
            { text: ", the device selectively breaks down excess melanin and disrupts pigment clusters at the source. Beyond visible spots, the treatment also improves dullness and redness, helping skin look clearer and more luminous with minimal downtime." },
          ],
        },
        {
          text: "Compared with traditional IPL, Lumecca's optimized wavelengths and energy output deliver stronger visible renewal in fewer sessions. Each treatment gradually reveals a more even, luminous, and youthful-looking complexion.",
        },
      ],
    },
    recommended: {
      items: [
        { id: "pigmentation-rec-1", text: "Those who want to reduce sun spots, age spots, and freckles caused by UV damage" },
        { id: "pigmentation-rec-2", text: "Those who experience post-acne marks and uneven pigmentation from past breakouts" },
        { id: "pigmentation-rec-3", text: "Those who want brighter, clearer-looking skin with minimal downtime" },
        { id: "pigmentation-rec-4", text: "Those who are seeking a non-invasive solution for pigmentation correction" },
      ],
    },
    processText: "",
    benefits: [
      "Targets sun spots, age spots, freckles, and other visible pigmentation",
      "Improves dullness, redness, and uneven tone",
      "Delivers stronger visible renewal in fewer sessions than traditional IPL",
      "Non-invasive with minimal downtime",
      "Helps reveal a clearer, brighter complexion",
    ],
    helpsWith: [
      "Sun damage and UV-related pigmentation",
      "Age spots, freckles, and superficial discoloration",
      "Uneven skin tone",
      "Dullness, redness, and blotchy complexion",
    ],
    beforeAfter: {
      beforeSrc: "/images/laser/pigmentation-before.png",
      afterSrc: "/images/laser/pigmentation-after.png",
      beforeAlt: "Before pigmentation management treatment",
      afterAlt: "After pigmentation management treatment",
    },
    images: {
      left: {
        src: "/images/laser/pigmentation-left.png",
        alt: "Pigmentation management device front view",
      },
      right: {
        src: "/images/laser/pigmentation-right.png",
        alt: "Pigmentation management device angled view",
      },
    },
    layoutTweaks: {
      rightWidthPx: 500,
      rightHeightPx: 500,
      rightTopPx: 100,
      rightTranslateYPx: 60,
      rightScale: 0.85,
      rightShiftPx: 80,
    },
  },
  hairRemoval: {
    title: "Laser Hair Removal",
    titleParts: { primary: "Laser", accent: "Hair Removal" },
    description: "A light-based treatment designed to reduce unwanted hair by targeting hair follicles, helping achieve smoother skin with long-term results.\n\nAll prices are based on six treatment sessions for optimal results.",
    descriptionSegments: [
      { text: "A light-based treatment designed to reduce unwanted hair by targeting hair follicles, helping achieve smoother skin with long-term results.\n\n" },
      { text: "All prices are based on six treatment sessions for optimal results.", bold: true },
    ],
    groups: [
      {
        rows: [
          { label: "Upper Lip", price: "$190" },
          { label: "Jaw Line", price: "$290" },
          { label: "Forehead", price: "$290" },
          { label: "Full Face", price: "$590" },
        ],
      },
      {
        rows: [
          { label: "Underarms", price: "$390" },
          { label: "Forearms", price: "$390" },
          { label: "Fullarms", price: "$590" },
        ],
      },
      {
        rows: [
          { label: "Bikini", price: "$390" },
          { label: "Brazilian", price: "$590" },
        ],
      },
      {
        rows: [
          { label: "Lower Legs", price: "$690" },
          { label: "Thighs", price: "$790" },
          { label: "Full Legs", price: "$1280" },
          { label: "Full Back", price: "$980" },
        ],
      },
    ],
  },
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
          "Downtime varies by treatment, but many of our light-based services have little to no recovery time. With Lumecca and pigmentation-focused IPL treatments, mild redness or temporary darkening of pigment may occur and usually settles within hours to a few days.",
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
      alt: "Laser and light therapy consultation banner",
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

const laserCopyZh: LaserCopy = {
  hero: {
    title: "激光与光疗",
    subtitle:
      "精准的激光和光疗技术,用于提亮肤色、改善肤质、解决常见的色素沉着和毛发问题。",
    breadcrumbLabel: "激光与光疗",
    processItems: [
      { id: "lumecca", label: "Lumecca 光感焕颜", href: "#lumecca" },
      { id: "pigmentation", label: "光子祛斑", href: "#pigmentation" },
      { id: "hair-removal", label: "激光脱毛", href: "#hair-removal" },
    ],
    image: {
      src: "/images/laser/laser-hero.png",
      alt: "激光与光疗治疗图像",
    },
  },
  lumecca: {
    about: {
      title: "Lumecca 光感焕颜",
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Lumecca 光感焕颜是一项先进的" },
            { text: "强脉冲光（IPL）疗程", bold: true },
            { text: "，专为提升肌肤的清晰度、光泽度与整体肤色均匀度而设计。该疗程采用高能量宽谱光技术，从源头精准作用于色素性及血管性皮肤问题，有效改善色斑沉着，并显著减轻面部泛红。" },
          ],
        },
        {
          text: "相较于传统 IPL 治疗，Lumecca 可输出优化的高能量脉冲，实现更卓越的疗效，所需治疗次数更少，恢复期更短。同时，其还能刺激胶原蛋白新生，从深层改善肤质，使肌肤愈显清透、明亮、匀净，呈现宛如天生的自然光彩。",
        },
      ],
    },
    recommended: {
      items: [
        { id: "lumecca-rec-1", text: "希望改善色素沉着和日晒损伤" },
        { id: "lumecca-rec-2", text: "出现泛红、红血丝或毛细血管破裂" },
        { id: "lumecca-rec-3", text: "希望以最小恢复期获得更亮更清晰的肌肤" },
        { id: "lumecca-rec-4", text: "寻求非侵入性治疗并快速见效" },
      ],
    },
    processText: "放松背部按摩（10分钟） ---> 洁面 ---> 去角质 ---> 蒸脸 ---> 清洁毛孔 ---> 修眉 ---> 面部按摩（15分钟） ---> IPL 仪器（颈部 + 面部 + 眼周）（20分钟） ---> 双层面膜 ---> 肩部、头部及手部按摩（含）",
    benefits: [
      "改善色素沉着、日晒斑和肤色不均",
      "减少泛红和血管问题",
      "提升整体肌肤清晰度和光泽",
      "非侵入性治疗，恢复期短",
      "适用于面部及特定身体部位",
    ],
    helpsWith: [
      "日晒斑和老年斑",
      "泛红和红血丝",
      "毛细血管破裂",
      "肤色不均",
      "暗沉或疲惫的肌肤",
    ],
    beforeAfter: {
      beforeSrc: "/images/laser/lumecca-before.png",
      afterSrc: "/images/laser/lumecca-after.png",
      beforeAlt: "Lumecca 治疗前",
      afterAlt: "Lumecca 治疗后",
    },
    images: {
      left: {
        src: "/images/laser/lumecca-left.png",
        alt: "Lumecca 设备正面",
      },
      right: {
        src: "/images/laser/lumecca-right.png",
        alt: "Lumecca 设备侧面",
      },
    },
    layoutTweaks: {
      rightWidthPx: 500,
      rightHeightPx: 500,
      rightTopPx: 100,
      rightTranslateYPx: 60,
      rightScale: 0.85,
      rightShiftPx: 80,
    },
  },
  pigmentation: {
    about: {
      title: "光子祛斑",
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Lumecca 超光子精准色素管理。", bold: true },
            { text: "告别顽固色斑，迎接无瑕澄净。InMode 色素管理疗程搭载 " },
            { text: "Lumecca 强脉冲光（IPL）技术", bold: true },
            { text: "，专为攻克因光老化、日晒损伤、老年斑、雀斑及肤色不均引发的色素沉着问题而设计。" },
          ],
        },
        {
          segments: [
            { text: "该设备通过发射" },
            { text: "高能量、精准的宽谱光能", bold: true },
            { text: "，选择性分解多余的黑色素，从根源击碎色素团块。治疗不仅针对表皮斑点，更能有效改善肤色暗沉与泛红，在极短的恢复期内，实现肌肤通透感与明亮度的双重跃升。" },
          ],
        },
        {
          text: "相较于传统 IPL，Lumecca 以其优化的光波与能量，能够以更少的治疗次数，触发更显著的焕肤效果。每一次治疗，都在悄然揭启肌肤的新生篇章，逐步展露均匀、透亮、富有光采的年轻肤质。",
        },
      ],
    },
    recommended: {
      items: [
        { id: "pigmentation-rec-1", text: "希望减少紫外线损伤引起的日晒斑、老年斑和雀斑" },
        { id: "pigmentation-rec-2", text: "出现痘印和痘后色素不均" },
        { id: "pigmentation-rec-3", text: "希望以最小恢复期获得更亮更清晰的肌肤" },
        { id: "pigmentation-rec-4", text: "寻求非侵入性色素修复方案" },
      ],
    },
    processText: "",
    benefits: [
      "针对日晒斑、老年斑和雀斑",
      "改善肤色不均和色素沉着",
      "相比传统 IPL 疗程次数更少",
      "非侵入性，恢复期短",
      "适用于面部及特定身体部位",
    ],
    helpsWith: [
      "日晒损伤和紫外线色素沉着",
      "老年斑和雀斑",
      "肤色不均",
      "暗沉或斑驳肤色",
    ],
    beforeAfter: {
      beforeSrc: "/images/laser/pigmentation-before.png",
      afterSrc: "/images/laser/pigmentation-after.png",
      beforeAlt: "光子祛斑治疗前",
      afterAlt: "光子祛斑治疗后",
    },
    images: {
      left: {
        src: "/images/laser/pigmentation-left.png",
        alt: "光子祛斑设备正面",
      },
      right: {
        src: "/images/laser/pigmentation-right.png",
        alt: "光子祛斑设备侧面",
      },
    },
    layoutTweaks: {
      rightWidthPx: 500,
      rightHeightPx: 500,
      rightTopPx: 100,
      rightTranslateYPx: 60,
      rightScale: 0.85,
      rightShiftPx: 80,
    },
  },
  hairRemoval: {
    title: "激光脱毛",
    titleParts: { primary: "激光", accent: "脱毛" },
    description: "一种基于光能的治疗，通过针对毛囊减少多余毛发，帮助实现长期光滑肌肤。\n\n所有价格基于六次疗程以获得最佳效果。",
    descriptionSegments: [
      { text: "一种基于光能的治疗，通过针对毛囊减少多余毛发，帮助实现长期光滑肌肤。\n\n" },
      { text: "所有价格基于六次疗程以获得最佳效果。", bold: true },
    ],
    groups: [
      {
        rows: [
          { label: "上唇", price: "$190" },
          { label: "下颌线", price: "$290" },
          { label: "额头", price: "$290" },
          { label: "全脸", price: "$590" },
        ],
      },
      {
        rows: [
          { label: "腋下", price: "$390" },
          { label: "前臂", price: "$390" },
          { label: "全臂", price: "$590" },
        ],
      },
      {
        rows: [
          { label: "比基尼线", price: "$390" },
          { label: "巴西式", price: "$590" },
        ],
      },
      {
        rows: [
          { label: "小腿", price: "$690" },
          { label: "大腿", price: "$790" },
          { label: "全腿", price: "$1280" },
          { label: "全背", price: "$980" },
        ],
      },
    ],
  },
  faq: {
    items: [
      {
        id: "faq-suitable",
        question: "这些疗程适合所有人吗？",
        answer:
          "大多数疗程适合广泛人群。然而，适用性取决于肌肤状况、病史和个人目标。需要进行专业咨询，以确定最合适的疗程方案，并确保安全性和最佳效果。",
      },
      {
        id: "faq-prepare",
        question: "预约前我需要做什么准备？",
        answer:
          "通常只需要最少的准备。我们可能会建议您在某些疗程前避免使用活性护肤成分、避免日晒或注射类治疗。具体说明将在咨询时提供。",
      },
      {
        id: "faq-downtime",
        question: "治疗后是否需要恢复期？",
        answer:
          "恢复期会因疗程类型而异，但大多数光疗项目几乎不需要恢复期。以 Lumecca 和光子祛斑类疗程为例，术后可能出现轻微泛红或色素暂时加深，通常会在数小时至数天内逐步消退。",
      },
    ],
  },
  cta: {
    title: "重新发现美丽从这里开始",
    titleParts: { primary: "重新发现美丽", accent: "从这里开始" },
    body: "用心的美学护理，为您的肌肤和身体量身定制。",
    buttonText: "预约咨询",
    image: {
      src: "/images/banner.png",
      alt: "激光与光疗咨询横幅",
    },
  },
  carePromise: {
    title: "我们的护理承诺",
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们相信用心、个性化的护理——以专业知识、透明度和对您自然之美的尊重为指引。\n\n所有疗程均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺横幅",
    },
  },
};

// Backward-compatible default export for any code still importing laserCopy directly
export const laserCopy = laserCopyEn;

// Bilingual content object for new i18n pattern
export const laserContent: { en: LaserCopy; zh: LaserCopy } = {
  en: laserCopyEn,
  zh: laserCopyZh,
};
