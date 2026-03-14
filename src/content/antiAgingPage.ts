export type ImageRef = { src: string; alt: string };

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type Benefit = {
  title: string;
  text: string;
};

export type RecommendedItem = {
  id: string;
  text: string;
};

export type BeforeAfterImage = ImageRef & { id: string };

export type TreatmentId = "sofwave" | "thermage" | "morpheus8" | "forma";

export type TreatmentBlock = {
  id: TreatmentId;
  title: string;
  about: {
    subtitle: string;
    paragraphs: Paragraph[];
    leftImage: ImageRef;
    rightImage: ImageRef;
  };
  recommendedFor: RecommendedItem[];
  faqBlock: {
    benefits: Benefit[];
    helpsWith: string[];
  };
  beforeAfter: BeforeAfterImage[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type AntiAgingPageContent = {
  hero: {
    title: string;
    description: string;
    image: ImageRef;
    navItems: Array<{ id: TreatmentId; label: string; href: string }>;
  };
  treatments: TreatmentBlock[];
  testimonials: Testimonial[];
  faq: FaqItem[];
};

const antiAgingContentEn: AntiAgingPageContent = {
  hero: {
    title: "Anti-Aging",
    description:
      "Advanced technologies designed to lift, tighten, and support skin at a deeper structural level.",
    image: {
      src: "/images/anti-aging/hero.png",
      alt: "Anti-aging facial treatment visualization showing skin lifting and tightening effects",
    },
    navItems: [
      { id: "sofwave", label: "Sofwave", href: "#sofwave" },
      { id: "thermage", label: "Thermage FLX", href: "#thermage" },
      { id: "morpheus8", label: "Morpheus8", href: "#morpheus8" },
      { id: "forma", label: "Forma", href: "#forma" },
    ],
  },

  treatments: [
    {
      id: "sofwave",
      title: "Sofwave",
      about: {
        subtitle:
          "Non-invasive ultrasound technology for skin tightening and natural lifting.",
        paragraphs: [
          {
            segments: [
              {
                text: "Sofwave is a non-invasive aesthetic treatment that uses advanced ",
              },
              {
                text: "SUPERB (Synchronous Ultrasound Parallel Beam)",
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
        leftImage: {
          src: "/images/anti-aging/about-left.png",
          alt: "Sofwave device front view",
        },
        rightImage: {
          src: "/images/anti-aging/about-right.png",
          alt: "Sofwave device angled view",
        },
      },
      recommendedFor: [
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
      faqBlock: {
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
      beforeAfter: [
        {
          id: "sofwave-ba-1",
          src: "/images/anti-aging/sofwave-before-after-1.png",
          alt: "Sofwave treatment results showing neck and jawline improvement - before and after comparison",
        },
        {
          id: "sofwave-ba-2",
          src: "/images/anti-aging/sofwave-before-after-2.png",
          alt: "Sofwave treatment results showing facial skin tightening - before and after comparison",
        },
      ],
    },

    {
      id: "thermage",
      title: "Thermage FLX",
      about: {
        subtitle:
          "Radiofrequency technology for deep collagen remodeling and skin tightening.",
        paragraphs: [
          {
            segments: [
              { text: "Thermage FLX uses " },
              { text: "patented radiofrequency (RF) technology", bold: true },
              {
                text: " to heat the deeper layers of skin, stimulating collagen production and creating a tightening effect that continues to improve over time.",
              },
            ],
          },
          {
            text: "With its unique comfort pulse technology and optimized treatment algorithms, Thermage FLX delivers consistent results with improved patient comfort—ideal for treating the face, eyes, and body.",
          },
          {
            text: "Thermage FLX uses Monopolar Radiofrequency (RF) energy to heat the deep, collagen-rich layers of your skin. 1) Immediate Tightening: The heat causes existing collagen fibers to contract instantly. 2) Long-Term Repair: The controlled thermal energy triggers your body's natural healing process, producing new collagen over the next 2–6 months. 3) The \"FLX\" Difference: \"F\" stands for Faster, \"L\" for Algorithm (AccuREP technology that adjusts energy in real-time), and \"X\" for Experience (enhanced vibration to improve comfort).",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/thermage-device-left.png",
          alt: "Thermage FLX device - front view",
        },
        rightImage: {
          src: "/images/anti-aging/thermage-device-right.png",
          alt: "Thermage FLX device - treatment handpiece",
        },
      },
      recommendedFor: [
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
      faqBlock: {
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
          "Body: Tightens loose skin on the abdomen (popular post-pregnancy) and \"kninkles\" (knee wrinkles)",
        ],
      },
      beforeAfter: [
        {
          id: "thermage-ba-1",
          src: "/images/anti-aging/thermage-before-after-1.jpg",
          alt: "Thermage FLX treatment results - before and after comparison",
        },
        {
          id: "thermage-ba-2",
          src: "/images/anti-aging/thermage-before-after-2.jpg",
          alt: "Thermage FLX treatment results - before and after comparison",
        },
      ],
    },

    {
      id: "morpheus8",
      title: "Morpheus8",
      about: {
        subtitle:
          "Fractional radiofrequency microneedling for deep skin rejuvenation.",
        paragraphs: [
          {
            segments: [
              { text: "Morpheus8 combines " },
              {
                text: "microneedling with fractional radiofrequency (RF)",
                bold: true,
              },
              {
                text: " energy to penetrate deep into the skin and fat, triggering the body's natural healing response and collagen production.",
              },
            ],
          },
          {
            text: "This versatile treatment addresses fine lines, wrinkles, acne scars, and skin laxity on both the face and body—delivering dramatic results with minimal downtime.",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/morpheus8-device-left.png",
          alt: "Morpheus8 device - control unit",
        },
        rightImage: {
          src: "/images/anti-aging/morpheus8-device-right.png",
          alt: "Morpheus8 device - treatment handpiece with microneedles",
        },
      },
      recommendedFor: [
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
      faqBlock: {
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
          "Stretch marks: One of the few effective treatments for stubborn body scarring",
        ],
      },
      beforeAfter: [
        {
          id: "morpheus8-ba-1",
          src: "/images/anti-aging/morpheus8-before-after-1.png",
          alt: "Morpheus8 treatment results showing skin texture improvement - before and after comparison",
        },
        {
          id: "morpheus8-ba-2",
          src: "/images/anti-aging/morpheus8-before-after-2.png",
          alt: "Morpheus8 treatment results showing acne scar reduction - before and after comparison",
        },
      ],
    },

    {
      id: "forma",
      title: "Forma",
      about: {
        subtitle:
          "Non-invasive radiofrequency for gentle skin tightening and contouring.",
        paragraphs: [
          {
            segments: [
              { text: "Forma uses " },
              { text: "bipolar radiofrequency technology", bold: true },
              {
                text: " to deliver gentle, uniform heating to the skin's deeper layers, stimulating collagen formation and improving skin elasticity.",
              },
            ],
          },
          {
            text: "With real-time temperature monitoring, Forma ensures safe and comfortable treatments while delivering noticeable improvements in skin firmness and texture—perfect for maintaining youthful skin.",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/forma-device-left.png",
          alt: "Forma device - treatment system",
        },
        rightImage: {
          src: "/images/anti-aging/forma-device-right.png",
          alt: "Forma device - handpiece in use",
        },
      },
      recommendedFor: [
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
      faqBlock: {
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
      beforeAfter: [
        {
          id: "forma-ba-1",
          src: "/images/anti-aging/forma-before-after-1.png",
          alt: "Forma treatment results showing skin tightening - before and after comparison",
        },
        {
          id: "forma-ba-2",
          src: "/images/anti-aging/forma-before-after-2.png",
          alt: "Forma treatment results showing improved skin elasticity - before and after comparison",
        },
      ],
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

  faq: [
    {
      id: "faq-suitable",
      question: "Are these treatments suitable for everyone?",
      answer:
        "Most of our treatments are suitable for a wide range of clients. However, certain conditions or medications may require special consideration. During your consultation, our specialists will review your medical history and recommend the most appropriate options for you.",
    },
    {
      id: "faq-prepare",
      question: "Do I need to prepare before my appointment?",
      answer:
        "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consultation.",
    },
    {
      id: "faq-downtime",
      question: "Is there any downtime after treatment?",
      answer:
        "Most of our non-invasive treatments have minimal to no downtime. You may experience temporary redness or mild swelling, but these typically resolve within hours to a few days depending on the treatment.",
    },
  ],
};

const antiAgingContentZh: AntiAgingPageContent = {
  hero: {
    title: "抗衰老",
    description:
      "先进技术，深层提拉紧致，从结构层面为肌肤提供支撑。",
    image: {
      src: "/images/anti-aging/hero.png",
      alt: "抗衰老面部护理可视化，展示肌肤提拉紧致效果",
    },
    navItems: [
      { id: "sofwave", label: "Sofwave", href: "#sofwave" },
      { id: "thermage", label: "Thermage FLX", href: "#thermage" },
      { id: "morpheus8", label: "Morpheus8", href: "#morpheus8" },
      { id: "forma", label: "Forma", href: "#forma" },
    ],
  },

  treatments: [
    {
      id: "sofwave",
      title: "Sofwave",
      about: {
        subtitle:
          "非侵入性超声波技术，实现肌肤紧致与自然提升。",
        paragraphs: [
          {
            segments: [
              {
                text: "Sofwave 是一种非侵入性美学疗程，采用先进的 ",
              },
              {
                text: "SUPERB（同步超声波平行波束）",
                bold: true,
              },
              {
                text: " 技术，改善肌肤紧致度，减少细纹，恢复自然提升的外观。",
              },
            ],
          },
          {
            text: "通过将受控超声波能量传递至真皮中层，Sofwave 刺激身体自然产生胶原蛋白和弹性蛋白——带来渐进式、自然的年轻化效果，且恢复期极短。",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/about-left.png",
          alt: "Sofwave 设备正面视图",
        },
        rightImage: {
          src: "/images/anti-aging/about-right.png",
          alt: "Sofwave 设备侧面视图",
        },
      },
      recommendedFor: [
        {
          id: "sofwave-1",
          text: "希望提拉效果明显，但不担心脸颊凹陷或凹陷的人群",
        },
        {
          id: "sofwave-2",
          text: "希望直接针对皱纹来源——真皮层——进行护理的人群",
        },
        {
          id: "sofwave-3",
          text: "30-50 岁及以上，希望进行符合年龄的胶原再生提拉护理的人群",
        },
        {
          id: "sofwave-4",
          text: "需要护理笑纹、眼部皱纹、鼻唇沟和木偶纹的人群",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "非侵入性疗程",
            text: "无需注射、无需手术、无需切口。",
          },
          {
            title: "肌肤紧致与提升",
            text: "有助于改善轻度至中度的肌肤松弛和软组织下垂。",
          },
          {
            title: "多功能疗程区域",
            text: "有效改善面部细纹、皱纹、眉部提升、颈部紧致以及颏下（下巴下方）区域。",
          },
          {
            title: "适用于所有肤质",
            text: "经临床验证，对所有肤色均安全有效。",
          },
          {
            title: "恢复期极短",
            text: "大多数客户在疗程后可立即恢复日常活动。",
          },
        ],
        helpsWith: [
          "肌肤松弛和紧致度下降",
          "细纹和皱纹",
          "面部下方和下颌线轻度下垂",
          "眉部下垂",
          "颈部和颏下肌肤松弛",
          "衰老早期迹象",
        ],
      },
      beforeAfter: [
        {
          id: "sofwave-ba-1",
          src: "/images/anti-aging/sofwave-before-after-1.png",
          alt: "Sofwave 疗程效果展示颈部和下颌线改善 - 前后对比",
        },
        {
          id: "sofwave-ba-2",
          src: "/images/anti-aging/sofwave-before-after-2.png",
          alt: "Sofwave 疗程效果展示面部肌肤紧致 - 前后对比",
        },
      ],
    },

    {
      id: "thermage",
      title: "Thermage FLX",
      about: {
        subtitle:
          "射频技术，深层胶原重塑与肌肤紧致。",
        paragraphs: [
          {
            segments: [
              { text: "Thermage FLX 采用 " },
              { text: "专利射频（RF）技术", bold: true },
              {
                text: " 加热肌肤深层，刺激胶原蛋白生成，形成紧致效果，并随时间持续改善。",
              },
            ],
          },
          {
            text: "凭借其独特的舒适脉冲技术和优化的疗程算法，Thermage FLX 提供一致的效果和更佳的客户舒适度——适用于面部、眼部和身体疗程。",
          },
          {
            text: "Thermage FLX 使用单极射频（RF）能量加热肌肤深层富含胶原蛋白的组织层。1）即时紧致：热量使现有胶原纤维立即收缩。2）长期修复：受控的热能触发身体的自然愈合过程，在接下来的 2–6 个月内生成新的胶原蛋白。3）\"FLX\" 的含义：\"F\" 代表 Faster（更快速），\"L\" 代表 Algorithm（AccuREP 实时能量调节技术），\"X\" 代表 Experience（增强振动以提升舒适度）。",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/thermage-device-left.png",
          alt: "Thermage FLX 设备 - 正面视图",
        },
        rightImage: {
          src: "/images/anti-aging/thermage-device-right.png",
          alt: "Thermage FLX 设备 - 疗程手柄",
        },
      },
      recommendedFor: [
        {
          id: "thermage-1",
          text: "皮肤薄弱，曾推迟提拉疗程的人群",
        },
        {
          id: "thermage-2",
          text: "担心细纹和毛孔粗大的人群",
        },
        {
          id: "thermage-3",
          text: "希望护理粗糙肤质和弹性的人群",
        },
        {
          id: "thermage-4",
          text: "希望进行温和抗衰和整体面部弹性改善的人群",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "最新一代技术",
            text: "Thermage FLX 代表 Thermage 的最先进演进，提供更佳的舒适度和精准度。",
          },
          {
            title: "眼部安全且经过验证",
            text: "全球公认的唯一一款经批准用于娇嫩眼部区域的非侵入性肌肤紧致疗程。",
          },
          {
            title: "非侵入性疗程",
            text: "无需注射、无需针头、无需破皮。",
          },
          {
            title: "肌肤紧致与塑形",
            text: "刺激胶原蛋白提升和再生，改善松弛和轮廓。",
          },
          {
            title: "恢复期极短",
            text: "大多数客户在疗程后可立即恢复日常活动。",
          },
        ],
        helpsWith: [
          "肌肤松弛和紧致度下降",
          "细纹和皱纹",
          "眼部区域肌肤松弛和皱褶",
          "下颌线和面部下方下垂",
          "颈部肌肤松弛",
          "衰老早期迹象",
          "身体：紧致腹部松弛皮肤（产后热门项目）及膝部皱纹",
        ],
      },
      beforeAfter: [
        {
          id: "thermage-ba-1",
          src: "/images/anti-aging/thermage-before-after-1.jpg",
          alt: "Thermage FLX 疗程效果 - 前后对比",
        },
        {
          id: "thermage-ba-2",
          src: "/images/anti-aging/thermage-before-after-2.jpg",
          alt: "Thermage FLX 疗程效果 - 前后对比",
        },
      ],
    },

    {
      id: "morpheus8",
      title: "Morpheus8",
      about: {
        subtitle:
          "点阵射频微针，深层肌肤再生。",
        paragraphs: [
          {
            segments: [
              { text: "Morpheus8 结合了 " },
              {
                text: "微针与点阵射频（RF）",
                bold: true,
              },
              {
                text: " 能量，深入肌肤和脂肪层，触发身体的自然修复反应和胶原蛋白生成。",
              },
            ],
          },
          {
            text: "这一多功能疗程可改善细纹、皱纹、痤疮疤痕以及面部和身体的肌肤松弛——带来显著效果，且恢复期极短。",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/morpheus8-device-left.png",
          alt: "Morpheus8 设备 - 控制单元",
        },
        rightImage: {
          src: "/images/anti-aging/morpheus8-device-right.png",
          alt: "Morpheus8 设备 - 带微针的疗程手柄",
        },
      },
      recommendedFor: [
        {
          id: "morpheus8-1",
          text: "寻求针对痤疮疤痕和不均匀肤质进行深层肌肤重塑的人群",
        },
        {
          id: "morpheus8-2",
          text: "希望在一次疗程中同时改善肌肤松弛和脂肪减少的人群",
        },
        {
          id: "morpheus8-3",
          text: "希望显著改善细纹和深层皱纹的人群",
        },
        {
          id: "morpheus8-4",
          text: "更倾向于微创替代手术方案的人群",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "微创疗程",
            text: "受控的肌肤穿透可实现比非侵入性方案更深入、更有效的重塑。",
          },
          {
            title: "全面肌肤更新",
            text: "改善肤质、肤色、紧致度和整体肌肤质量。",
          },
          {
            title: "可定制且多功能",
            text: "适用于不同肤质和面部及身体的疗程目标。",
          },
          {
            title: "持久效果",
            text: "随着胶原蛋白的再生，效果在数周内持续改善。",
          },
        ],
        helpsWith: [
          "肌肤松弛和紧致度下降",
          "细纹和皱纹",
          "痤疮疤痕和不均匀肤质",
          "毛孔粗大",
          "肤色不均",
          "面部和身体区域轻度至中度下垂",
          "整体肌肤质量和结构改善",
          "妊娠纹：针对顽固身体疤痕的少数有效疗法之一",
        ],
      },
      beforeAfter: [
        {
          id: "morpheus8-ba-1",
          src: "/images/anti-aging/morpheus8-before-after-1.png",
          alt: "Morpheus8 疗程效果展示肤质改善 - 前后对比",
        },
        {
          id: "morpheus8-ba-2",
          src: "/images/anti-aging/morpheus8-before-after-2.png",
          alt: "Morpheus8 疗程效果展示痤疮疤痕减少 - 前后对比",
        },
      ],
    },

    {
      id: "forma",
      title: "Forma",
      about: {
        subtitle:
          "非侵入性射频，温和肌肤紧致与塑形。",
        paragraphs: [
          {
            segments: [
              { text: "Forma 采用 " },
              { text: "双极射频技术", bold: true },
              {
                text: " 为肌肤深层提供温和、均匀的加热，刺激胶原蛋白形成，改善肌肤弹性。",
              },
            ],
          },
          {
            text: "凭借实时温度监控，Forma 确保安全舒适的疗程，同时在肌肤紧致度和肤质方面带来显著改善——是维持年轻肌肤的理想选择。",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/forma-device-left.png",
          alt: "Forma 设备 - 疗程系统",
        },
        rightImage: {
          src: "/images/anti-aging/forma-device-right.png",
          alt: "Forma 设备 - 使用中的手柄",
        },
      },
      recommendedFor: [
        {
          id: "forma-1",
          text: "寻求温和、舒适的肌肤紧致疗程且无需恢复期的人群",
        },
        {
          id: "forma-2",
          text: "希望维持和增强既往疗程效果的人群",
        },
        {
          id: "forma-3",
          text: "30-40 岁寻求预防性抗衰护理的人群",
        },
        {
          id: "forma-4",
          text: "更倾向于渐进式、自然改善的人群",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "非侵入性疗程",
            text: "无需针头、无需切口、无需恢复期。",
          },
          {
            title: "舒适且放松",
            text: "整个疗程期间有温暖、舒缓的感觉。",
          },
          {
            title: "针对性疗程区域",
            text: "适用于脸颊、下颌线和面部下方等局部面部区域。",
          },
          {
            title: "适用于所有肤质",
            text: "适合多种肤色和肌肤状况。",
          },
          {
            title: "渐进式自然改善",
            text: "随着时间推移，肌肤显得更紧致、更光滑、更精致。",
          },
        ],
        helpsWith: [
          "轻度至中度肌肤松弛",
          "紧致度和弹性下降",
          "早期衰老迹象",
          "暗沉或疲惫的肌肤",
          "局部面部轮廓精致化",
        ],
      },
      beforeAfter: [
        {
          id: "forma-ba-1",
          src: "/images/anti-aging/forma-before-after-1.png",
          alt: "Forma 疗程效果展示肌肤紧致 - 前后对比",
        },
        {
          id: "forma-ba-2",
          src: "/images/anti-aging/forma-before-after-2.png",
          alt: "Forma 疗程效果展示改善肌肤弹性 - 前后对比",
        },
      ],
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "疗程后我明显感觉到提拉和紧致效果，尤其是下颌线和面部下方。咨询过程专业细致，一切都感觉非常精准和安全。我很喜欢效果在接下来几周内持续改善。",
      name: "Emily R.",
      role: "Thermage 客户",
    },
    {
      id: "testimonial-2",
      quote:
        "仅一次疗程后，我的肌肤就显得更亮、更光滑、更均匀。我最欣赏的是疗程的个性化——不是千篇一律的。团队真正了解肌肤。",
      name: "Sofia W.",
      role: "光子嫩肤客户",
    },
    {
      id: "testimonial-3",
      quote:
        "这是我第一次尝试医学美容疗程，我感到完全放心。一切都得到了清晰的解释，效果看起来自然且焕然一新——正是我所期望的。",
      name: "Jenna L.",
      role: "首次客户",
    },
  ],

  faq: [
    {
      id: "faq-suitable",
      question: "这些疗程适合所有人吗？",
      answer:
        "我们的大多数疗程适用于广泛的客户群体。然而，某些健康状况或药物可能需要特别考虑。在您的咨询期间，我们的专家将审查您的病史，并为您推荐最合适的方案。",
    },
    {
      id: "faq-prepare",
      question: "预约前需要做什么准备吗？",
      answer:
        "通常只需做最少的准备。我们可能会建议在某些疗程前避免使用活性护肤成分、日晒或注射类疗程。具体的指导将在您的咨询时提供。",
    },
    {
      id: "faq-downtime",
      question: "疗程后有恢复期吗？",
      answer:
        "我们的大多数非侵入性疗程几乎没有或完全没有恢复期。您可能会出现暂时性的发红或轻微肿胀，但这些通常会在数小时至数天内消退，具体取决于疗程类型。",
    },
  ],
};

// Backward-compatible default export for any code still importing antiAgingContent directly
export const antiAgingContent = antiAgingContentEn;

// Bilingual content object for new i18n pattern
export const antiAgingPageContent: { en: AntiAgingPageContent; zh: AntiAgingPageContent } = {
  en: antiAgingContentEn,
  zh: antiAgingContentZh,
};

export const TREATMENT_ORDER: TreatmentId[] = [
  "sofwave",
  "thermage",
  "morpheus8",
  "forma",
];
