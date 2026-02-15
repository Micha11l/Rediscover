/**
 * Body Contouring & Weight Loss Treatment Copy
 *
 * Centralized content module for Body Contouring & Weight Loss sections.
 */

import type { TestimonialItem } from "@/components/sections/service-detail";
import type { TextSegment, Paragraph } from "@/content/skinCareCopy";

export type BodyContouringTreatment = {
  id: string;
  testId: string;
  title: string;
  paragraphs: Paragraph[];
  whatItCanHelpWith: string[];
  recommendedFor: string;
  image: { src: string; alt: string; width: number; height: number };
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
      title: "BodyFX\u00AE",
      paragraphs: [
        {
          segments: [
            { text: "InMode BodyFX is a " },
            { text: "non-invasive body contouring treatment", bold: true },
            { text: " that combines " },
            {
              text: "radiofrequency (RF) energy and deep tissue heating",
              bold: true,
            },
            {
              text: " to reduce stubborn fat and improve skin firmness. It helps reshape the body while enhancing overall skin texture without surgery or downtime.",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "Stubborn fat deposits in areas like the abdomen, flanks, and thighs",
        "Skin laxity and loss of firmness after weight changes or aging",
        "Uneven body contours that are resistant to diet and exercise",
        "Cellulite and skin texture irregularities",
      ],
      recommendedFor:
        "Individuals looking for non-surgical body contouring to address localized fat and improve skin firmness, particularly in the abdomen, flanks, and thighs.",
      image: {
        src: "/images/body/bodyfx.png",
        alt: "BodyFX device",
        width: 274,
        height: 450,
      },
    },
    {
      id: "forma-body",
      testId: "body-contouring-treatment-forma-body",
      title: "Forma\u00AE Body",
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
      recommendedFor:
        "Those seeking non-surgical skin tightening and firming without fat reduction, especially for areas with mild to moderate skin laxity.",
      image: {
        src: "/images/body/forma-body.png",
        alt: "Forma Body device",
        width: 265,
        height: 471,
      },
    },
    {
      id: "plus90",
      testId: "body-contouring-treatment-plus90",
      title: "Plus 90\u00AE",
      paragraphs: [
        {
          segments: [
            { text: "Plus 90 is a " },
            { text: "non-invasive body toning treatment", bold: true },
            {
              text: " that uses electrical muscle stimulation to activate targeted muscle groups. By inducing repeated muscle contractions, it helps improve muscle tone, firmness, and definition without surgery or downtime.",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "Lack of muscle tone and definition in targeted areas",
        "Loss of firmness or muscle engagement due to a sedentary lifestyle or aging",
        "Body contour refinement alongside fat reduction or skin tightening treatments",
        "Difficulty activating or strengthening specific muscle groups through exercise alone",
      ],
      recommendedFor:
        "Individuals looking to enhance muscle tone and body definition through non-invasive stimulation, either as a standalone treatment or in combination with body contouring procedures.",
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
      title: "BodyFX®",
      paragraphs: [
        {
          segments: [
            { text: "InMode BodyFX 是一项" },
            { text: "非侵入性身体塑形疗程", bold: true },
            { text: "，结合了" },
            {
              text: "射频 (RF) 能量与深层组织加热",
              bold: true,
            },
            {
              text: "技术，可减少顽固脂肪并改善肌肤紧致度。它能在无需手术或恢复期的情况下重塑身体轮廓，同时提升整体肌肤质感。",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "腹部、侧腰和大腿等部位的顽固脂肪堆积",
        "因体重变化或衰老导致的肌肤松弛和紧致度下降",
        "难以通过饮食和运动改善的不均匀身体轮廓",
        "橘皮组织和肌肤纹理不平整",
      ],
      recommendedFor:
        "适合寻求非手术身体塑形的人士，针对局部脂肪并改善肌肤紧致度，特别是腹部、侧腰和大腿区域。",
      image: {
        src: "/images/body/bodyfx.png",
        alt: "BodyFX 设备",
        width: 274,
        height: 450,
      },
    },
    {
      id: "forma-body",
      testId: "body-contouring-treatment-forma-body",
      title: "Forma® Body",
      paragraphs: [
        {
          segments: [
            { text: "InMode Forma Body 是" },
            {
              text: "一项非侵入性肌肤紧致疗程",
              bold: true,
            },
            { text: "，使用" },
            { text: "射频 (RF) 能量", bold: true },
            {
              text: "温和加热深层肌肤，刺激胶原蛋白生成，改善肌肤紧致度、弹性和整体肤色。该疗程专注于平滑和紧致身体肌肤，不针对脂肪减少，且无恢复期。",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "身体肌肤松弛和下垂，包括手臂、腹部和大腿",
        "因衰老、体重波动或产后变化导致的肌肤紧致度下降",
        "缺乏弹性的薄弱或松弛肌肤",
        "身体肌肤色调和质感不均",
      ],
      recommendedFor:
        "适合寻求非手术肌肤紧致和提升的人士，不涉及脂肪减少，特别适用于轻度至中度肌肤松弛的部位。",
      image: {
        src: "/images/body/forma-body.png",
        alt: "Forma Body 设备",
        width: 265,
        height: 471,
      },
    },
    {
      id: "plus90",
      testId: "body-contouring-treatment-plus90",
      title: "Plus 90®",
      paragraphs: [
        {
          segments: [
            { text: "Plus 90 是一项" },
            { text: "非侵入性身体塑形疗程", bold: true },
            {
              text: "，利用电刺激肌肉技术激活目标肌肉群。通过诱导反复的肌肉收缩，帮助改善肌肉线条、紧致度和清晰度，无需手术或恢复期。",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "目标区域缺乏肌肉线条和清晰度",
        "因久坐生活方式或衰老导致的紧致度或肌肉参与度下降",
        "配合脂肪减少或肌肤紧致疗程，进一步优化身体轮廓",
        "难以通过运动单独激活或增强特定肌肉群",
      ],
      recommendedFor:
        "适合希望通过非侵入性刺激增强肌肉线条和身体清晰度的人士，可作为独立疗程或与其他身体塑形疗程组合使用。",
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
