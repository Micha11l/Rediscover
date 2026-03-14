/**
 * Body Contouring & Weight Loss Treatment Copy
 *
 * Centralized content module for Body Contouring & Weight Loss sections.
 */

import type { TestimonialItem } from "@/components/sections/service-detail";
import type { Paragraph } from "@/content/skinCareCopy";

export type BodyContouringDetailGroup = {
  title: string;
  items: string[];
};

export type BodyContouringTreatment = {
  id: string;
  testId: string;
  title: string;
  paragraphs: Paragraph[];
  helpHeading?: string;
  whatItCanHelpWith?: string[];
  detailGroups?: BodyContouringDetailGroup[];
  recommendedHeading?: string;
  recommendedFor?: string;
  image: { src: string; alt: string; width: number; height: number };
  imageDisplay?: "default" | "top-crop";
  imageCropHeightPx?: number;
};

export type BodyContouringCopy = {
  hero: {
    title: string;
    subtitle: string;
    breadcrumbLabel: string;
    image: { src: string; alt: string };
  };
  treatments: BodyContouringTreatment[];
  testimonials: TestimonialItem[];
  faq: {
    items: Array<{ id: string; question: string; answer: string }>;
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

const bodyContouringCopyEn: BodyContouringCopy = {
  hero: {
    title: "Body Contouring & Weight Loss",
    subtitle:
      "Personalized skin care and wellness treatments designed to nourish, restore, and maintain healthy skin.",
    breadcrumbLabel: "Body Contouring & Weight Loss",
    image: {
      src: "/images/body/hero.png",
      alt: "Body contouring and weight loss treatment",
    },
  },

  treatments: [
    {
      id: "bodyfx",
      testId: "body-contouring-treatment-bodyfx",
      title: "BodyFX",
      paragraphs: [
        {
          segments: [
            { text: "BodyFX: Non-Invasive Body Contouring & Fat Destruction", bold: true },
          ],
        },
        {
          text: "BodyFX is the first and only non-invasive body contouring technology proven in peer-reviewed studies to permanently kill adipose (fat) tissue while simultaneously tightening the skin. It is a superior alternative to liposuction, offering a solution for cellulite, \"muffin tops,\" and stubborn body fat with no downtime.",
        },
      ],
      detailGroups: [
        {
          title: "How It Works: The Triple-Action Advantage",
          items: [
            "Permanent Fat Reduction (HVP): Using patented High Voltage Pulses (HVP), BodyFX triggers Electroporation, causing permanent apoptosis (cell death) in fat cells. Once destroyed, these cells are naturally processed and removed by your body.",
            "Deep Tissue Heating: Bipolar Radiofrequency (RF) energy distributes heat to the skin and underlying fat, stimulating collagen production and contracting the skin for a firmer, smoother appearance.",
            "Vacuum Integration: Active vacuum suction allows for deep, clinical penetration of energy, ensuring uniform treatment and improved local circulation.",
          ],
        },
        {
          title: "Why Choose BodyFX?",
          items: [
            "Permanent Results: Targets and destroys fat cells for long-term body remodeling.",
            "Skin Tightening: Unlike many fat-reduction treatments, BodyFX ensures the skin remains tight and elastic.",
            "Cellulite Improvement: Effectively smooths the \"orange peel\" texture of the skin.",
            "Safe & Comfortable: Built-in temperature monitoring ensures the skin is always treated at the optimal, safe therapeutic level (42°C-43°C).",
          ],
        },
        {
          title: "Treatment Areas",
          items: [
            "Abdomen & Love Handles",
            "Thighs & Hips",
            "Back Fat (Bra Line)",
            "Upper Arms",
          ],
        },
        {
          title: "Common Questions",
          items: [
            "How many sessions are needed? Typically 6-8 treatments, once per week, are recommended for a full course.",
            "When will I see results? Skin tightening can often be felt after 2-3 sessions, while peak fat reduction is typically seen 3-6 months after the full series.",
          ],
        },
      ],
      image: {
        src: "/images/body/bodyfx.png",
        alt: "BodyFX device",
        width: 274,
        height: 450,
      },
      imageDisplay: "top-crop",
      imageCropHeightPx: 208,
    },
    {
      id: "forma-body",
      testId: "body-contouring-treatment-forma-body",
      title: "Forma Body",
      paragraphs: [
        {
          segments: [
            { text: "InMode Forma Body is " },
            {
              text: "a non-invasive skin tightening treatment",
              bold: true,
            },
            { text: " that uses " },
            { text: "radiofrequency (RF) energy", bold: true },
            {
              text: " to gently heat deep skin layers, stimulating collagen production to improve skin firmness, elasticity, and overall tone. It is designed to smooth and tighten the body without targeting fat, with no downtime.",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "Skin laxity and sagging on the body, including arms, abdomen, and thighs",
        "Loss of skin firmness due to aging, weight fluctuations, or post-pregnancy changes",
        "Crepey or thinning skin that lacks elasticity",
        "Uneven skin tone and texture on the body",
      ],
      helpHeading: "What It Can Help With",
      recommendedHeading: "Recommended For",
      recommendedFor:
        "Those seeking non-surgical skin tightening and firming without fat reduction, especially for areas with mild to moderate skin laxity.",
      image: {
        src: "/images/body/forma-body.png",
        alt: "Forma Body device",
        width: 265,
        height: 471,
      },
      imageDisplay: "top-crop",
      imageCropHeightPx: 208,
    },
    {
      id: "plus90",
      testId: "body-contouring-treatment-plus90",
      title: "Plus 90",
      paragraphs: [
        {
          segments: [
            { text: "Plus 90 is a " },
            { text: "non-invasive intimate wellness and restorative treatment", bold: true },
            {
              text: " within InMode's women's health platform, designed to support both the health and appearance of the intimate area.",
            },
          ],
        },
        {
          segments: [
            { text: "Using " },
            { text: "bipolar radiofrequency (RF) technology", bold: true },
            {
              text: ", it gently heats targeted tissue to improve firmness, comfort, and overall tissue quality without surgery or downtime.",
            },
          ],
        },
      ],
      detailGroups: [
        {
          title: "Tightening & Tissue Restoration",
          items: [
            "Improves vaginal and vulvar laxity by using RF heat to support collagen and elastin remodeling.",
            "Helps refine the appearance of the labia by reducing wrinkling and a sagging look for a smoother, more youthful profile.",
          ],
        },
        {
          title: "Functional Relief & Daily Comfort",
          items: [
            "Supports mild stress urinary incontinence by strengthening local tissue support, especially when leakage occurs with coughing, laughing, or exercise.",
            "Helps improve dryness, irritation, and reduced natural lubrication by enhancing circulation and mucosal health.",
            "May ease certain types of chronic pelvic discomfort related to muscular tension or tissue atrophy.",
          ],
        },
        {
          title: "Intimacy & Sensitivity Support",
          items: [
            "Improved tissue health and blood flow may help increase sensitivity and support a better intimate experience.",
          ],
        },
        {
          title: "Technology Highlights",
          items: [
            "A.C.E. temperature control helps maintain an effective and safe treatment range of about 43°C for consistent comfort.",
            "Non-surgical and non-invasive, with a warm and comfortable treatment experience and typically no downtime.",
          ],
        },
      ],
      recommendedHeading: "Suitable For",
      recommendedFor:
        "Postpartum clients who want to restore intimate firmness, individuals experiencing mild urinary leakage, and women dealing with dryness, irritation, or early signs of menopausal or atrophic vaginal changes.",
      image: {
        src: "/images/body/plus90.png",
        alt: "Plus 90 device",
        width: 530,
        height: 530,
      },
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
        "My skin looked brighter, smoother, and more even after just one session. What I appreciated most was how personalized the treatment felt \u2014 it wasn\u2019t one-size-fits-all. The team really understands skin.",
      name: "Sofia W.",
      role: "Photo Facial Client",
    },
    {
      id: "testimonial-3",
      quote:
        "This was my first time trying a medical aesthetic treatment, and I felt completely at ease. Everything was clearly explained, and the results looked natural and refreshed \u2014 exactly what I was hoping for.",
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
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Body contouring consultation banner",
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

const bodyContouringCopyZh: BodyContouringCopy = {
  hero: {
    title: "身体塑形与减重",
    subtitle:
      "个性化的肌肤护理与美体疗程，旨在滋养、修复并维持健康肌肤。",
    breadcrumbLabel: "身体塑形与减重",
    image: {
      src: "/images/body/hero.png",
      alt: "身体塑形与减重疗程",
    },
  },

  treatments: [
    {
      id: "bodyfx",
      testId: "body-contouring-treatment-bodyfx",
      title: "BodyFX",
      paragraphs: [
        {
          segments: [
            { text: "InMode BodyFX：非侵入式溶脂与紧致专家", bold: true },
          ],
        },
        {
          text: "BodyFX 是全球首款经临床证明，能永久减少脂肪组织并同时收紧皮肤的非侵入式塑形技术。它是替代传统抽脂的理想选择，专门针对顽固脂肪、橘皮组织及松弛皮肤，无需手术，无恢复期。",
        },
      ],
      detailGroups: [
        {
          title: "核心原理：三重协同作用",
          items: [
            "永久灭活脂肪 (HVP 技术)：通过专利的高压脉冲 (HVP) 产生“纳秒级电穿孔”效应，直接破坏脂肪细胞膜，诱导脂肪细胞自然凋亡，从而达到永久减脂的效果。",
            "深层射频加热：利用双极射频 (RF) 能量对皮肤及深层脂肪进行均匀加热，在软化脂肪的同时刺激胶原蛋白再生，确保减脂后的皮肤紧致不松弛。",
            "真空负压吸附：通过真空负压将皮下组织吸入治疗头，确保射频能量精准、深层地作用于脂肪层，并同步改善局部血液循环，消除橘皮组织。",
          ],
        },
        {
          title: "治疗优势",
          items: [
            "减脂+紧致双效：唯一能在减少脂肪体积的同时，解决皮肤松弛问题的技术。",
            "安全精准：内置实时温度监测系统，将皮肤温度精确控制在最佳治疗区间（42°C-43°C），舒适且无烫伤风险。",
            "无痛无恢复期：疗程轻松，术后可立即回归正常生活。",
            "显著改善橘皮：有效平滑大腿、臀部等部位的凹凸不平感。",
          ],
        },
        {
          title: "适用部位",
          items: [
            "腹部与腰部（游泳圈/侧腰）",
            "大腿内外侧与臀部",
            "背部脂肪（内衣勒痕处）",
            "手臂（蝴蝶袖）",
          ],
        },
        {
          title: "常见问题解答 (FAQ)",
          items: [
            "需要做几次？通常建议 6-8 次为一个完整疗程，每周一次。",
            "多久看到效果？治疗 2-3 次后即可感受到皮肤紧致，最佳减脂效果在疗程结束后 3-6 个月达到峰值。",
          ],
        },
      ],
      image: {
        src: "/images/body/bodyfx.png",
        alt: "BodyFX 设备",
        width: 274,
        height: 450,
      },
      imageDisplay: "top-crop",
      imageCropHeightPx: 208,
    },
    {
      id: "forma-body",
      testId: "body-contouring-treatment-forma-body",
      title: "Forma Body",
      paragraphs: [
        {
          segments: [
            { text: "重塑身体轮廓，唤醒肌肤弹性", bold: true },
          ],
        },
        {
          text: "InMode Forma Body 采用先进的双极射频（RF）技术，深层穿透真皮组织，通过精准温控加热刺激胶原蛋白再生。这是一款专为身体设计的非侵入性紧致疗程，旨在平滑肌理、提升松弛组织，无需手术，即刻回归紧致状态。",
        },
      ],
      detailGroups: [
        {
          title: "治疗优势 (Core Benefits)",
          items: [
            "深层紧致：直达真皮层，诱发胶原重组，显著提升肌肤弹性。",
            "精准温控：独家 A.C.E. 技术实时监测温度，确保疗程安全舒适、高效均匀。",
            "零恢复期：无创治疗，术后即可开展日常活动，被称为“午休式”身材管理。",
            "肤质改良：在紧致的同时，有效改善皮肤粗糙，提升肤色亮泽度。",
          ],
        },
        {
          title: "适用范畴 (What It Can Help With)",
          items: [
            "松弛修护：改善手臂（蝴蝶袖）、腹部及大腿的皮肤松弛与下垂。",
            "产后/减重护理：修复因生育、体重骤变或自然衰老导致的皮肤松软与褶皱。",
            "纹理平滑：针对缺乏弹性的薄弱部位，重建紧密的组织支撑。",
            "轮廓精雕：改善身体肤色不均与质感不佳。",
          ],
        },
        {
          title: "理想受众 (Ideal Candidate)",
          items: [
            "适用于轻度至中度皮肤松弛者。",
            "追求自然紧致，且不涉及脂肪消减的轮廓雕塑。",
            "适合作为长期身体保养或重要场合前的快速提升。",
          ],
        },
      ],
      image: {
        src: "/images/body/forma-body.png",
        alt: "Forma Body 设备",
        width: 265,
        height: 471,
      },
      imageDisplay: "top-crop",
      imageCropHeightPx: 208,
    },
    {
      id: "plus90",
      testId: "body-contouring-treatment-plus90",
      title: "Plus 90",
      paragraphs: [
        {
          segments: [
            { text: "唤醒内在紧致，重塑优雅自信——InMode Plus90 私密修护系统", bold: true },
          ],
        },
        {
          segments: [
            { text: "Plus90 采用创新的 " },
            { text: "双极射频（Bipolar RF）技术", bold: true },
            {
              text: "，精准作用于阴道黏膜层。通过均匀的热能传递，激活成纤维细胞大量产生新生胶原蛋白与弹性纤维。",
            },
          ],
        },
      ],
      detailGroups: [
        {
          title: "1. 紧致重塑：由内而外的弹性唤醒",
          items: [
            "专业表现：有效收紧阴道管壁，改善组织萎缩，恢复私密部位的紧致度与柔韧弹性。",
          ],
        },
        {
          title: "2. 健康赋能：改善轻度压力性尿失禁",
          items: [
            "针对产后或随年龄增长出现的盆底肌松弛，Plus90 通过物理性的组织重构，强化尿道周围的支撑结构。",
            "专业表现：有效缓解咳嗽、大笑或运动时的漏尿困扰（SUI），提升生活品质与自信心。",
          ],
        },
        {
          title: "3. 润泽敏感：提升私密环境健康度",
          items: [
            "热能效应能显著改善局部血液循环，促进微血管再生及腺体分泌功能。",
            "专业表现：告别干涩与不适，平衡私密环境，提升敏感度与亲密关系的满意度。",
          ],
        },
        {
          title: "4. 外部精雕：改善外阴松弛与纹理",
          items: [
            "不仅关注内部修护，Plus90 同样适用于外阴部位的紧肤治疗。",
            "专业表现：平滑皮肤皱褶，改善外阴松弛带来的外观困扰，重现饱满紧致的视觉状态。",
          ],
        },
        {
          title: "治疗安全与体验",
          items: [
            "精准控温 (A.C.E.)：实时监测皮温（40°C-43°C），确保能量精准释放，全程安全无灼伤风险。",
            "非侵入式体验：无手术、无切口、无痛感。疗程中仅有温热舒适感，无需麻醉。",
            "医学级保障：全球公认的私密抗衰金标准技术，获得多国权威医疗认证。",
          ],
        },
        {
          title: "疗程建议",
          items: [
            "建议每 2-4 周进行一次治疗，3 次为一个疗程。",
          ],
        },
      ],
      recommendedHeading: "适合人群",
      recommendedFor:
        "适合产后希望恢复私密紧致度的女性、轻度漏尿困扰者，以及进入更年期后出现干涩或萎缩性阴道炎早期征兆的人群。",
      image: {
        src: "/images/body/plus90.png",
        alt: "Plus 90 设备",
        width: 530,
        height: 530,
      },
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "疗程后我明显感觉到提升和紧致，特别是在下颌线和下面部区域。咨询过程非常专业和全面，整个疗程让我感觉非常精准和安全。我很喜欢效果在接下来几周内持续改善。",
      name: "Emily R.",
      role: "Thermage 客户",
    },
    {
      id: "testimonial-2",
      quote:
        "仅一次疗程后，我的肌肤看起来更亮、更光滑、更均匀。我最欣赏的是疗程的个性化——并非千篇一律。团队真的很懂肌肤护理。",
      name: "Sofia W.",
      role: "Photo Facial 客户",
    },
    {
      id: "testimonial-3",
      quote:
        "这是我第一次尝试医学美容疗程，我感到非常放松。所有步骤都解释得很清楚，效果看起来自然且焕然一新——正是我所期待的。",
      name: "Jenna L.",
      role: "首次体验客户",
    },
  ],

  faq: {
    items: [
      {
        id: "faq-suitable",
        question: "这些疗程适合所有人吗？",
        answer:
          "大多数疗程适用于广泛的人群。但是，适用性取决于肌肤状况、病史和个人目标。需要进行专业咨询以确定最合适的疗程方案，并确保安全和最佳效果。",
      },
      {
        id: "faq-prepare",
        question: "预约前需要做什么准备？",
        answer:
          "通常需要最少的准备。我们可能会建议在某些疗程前避免使用活性护肤成分、日晒或注射类疗程。具体说明将在咨询期间提供。",
      },
      {
        id: "faq-downtime",
        question: "疗程后需要恢复期吗？",
        answer:
          "恢复期因疗程类型而异。许多疗程几乎不需要恢复期，您可以快速恢复正常活动。某些疗程后可能会出现轻微的发红、肿胀或敏感，通常会在短时间内消退。",
      },
    ],
  },

  cta: {
    titleParts: { primary: "重新发现美丽", accent: "从这里开始" },
    body: "用心的美学护理，为您的肌肤和身体量身定制。",
    buttonText: "申请咨询",
    image: {
      src: "/images/banner.png",
      alt: "身体塑形咨询",
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

// Backward-compatible default export for any code still importing bodyContouringCopy directly
export const bodyContouringCopy = bodyContouringCopyEn;

// Bilingual content object for new i18n pattern
export const bodyContouringContent: { en: BodyContouringCopy; zh: BodyContouringCopy } = {
  en: bodyContouringCopyEn,
  zh: bodyContouringCopyZh,
};
