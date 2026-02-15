import type { TestimonialItem } from "@/components/sections/service-detail";
import type { Paragraph } from "@/content/skinCareCopy";

export type InjectableTreatment = {
  id: string;
  title: string;
  subtitle?: string;
  effect: string;
  recommendedFor: string;
  expectedDowntime: string;
};

export type InjectablesCopy = {
  hero: {
    title: string;
    subtitle: string;
    breadcrumbLabel: string;
    image: { src: string; alt: string };
  };
  about: {
    titleAccent: string;
    titlePrimary: string;
    paragraphs: Paragraph[];
  };
  treatments: InjectableTreatment[];
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

const injectablesCopyEn: InjectablesCopy = {
  hero: {
    title: "Injectables",
    subtitle:
      "Precision injectable treatments designed to restore volume, improve skin quality, and enhance facial balance with natural-looking results.",
    breadcrumbLabel: "Injectables",
    image: {
      src: "/images/injectables/hero.png",
      alt: "Injectable treatment",
    },
  },

  about: {
    titleAccent: "About",
    titlePrimary: "Injectables",
    paragraphs: [
      {
        text: "Our injectable treatments are performed by trained medical professionals and begin with a thorough consultation to assess facial structure, skin condition, and individual concerns.",
      },
      {
        text: "Each treatment plan is carefully customized to address specific needs, restore balance, and enhance natural features with precision, safety, and subtle, natural-looking results.",
      },
    ],
  },

  treatments: [
    {
      id: "injectable-radiesse",
      title: "Radiesse",
      effect:
        "Provides immediate structural support while stimulating the body's natural collagen production to improve firmness, contour, and overall skin quality.",
      recommendedFor:
        "Individuals experiencing volume loss, skin laxity, or reduced facial definition, particularly in the lower face and jawline, who prefer natural-looking results without overfilling.",
      expectedDowntime:
        "Mild swelling or bruising may occur for 1–3 days.",
    },
    {
      id: "injectable-sculptra",
      title: "Sculptra",
      effect:
        "Gradually restores facial volume and improves skin texture by stimulating long-term collagen regeneration, delivering subtle and natural-looking rejuvenation over time.",
      recommendedFor:
        "Those with collagen depletion, facial thinning, or early signs of aging who seek progressive, long-lasting improvement rather than instant volume.",
      expectedDowntime:
        "Minimal downtime with mild swelling for 2–3 days.",
    },
    {
      id: "injectable-dermal-filler",
      title: "Dermal Filler",
      effect:
        "Restores lost volume, enhances facial contours, and smooths wrinkles using hyaluronic acid–based fillers for immediate, natural-looking results.",
      recommendedFor:
        "Those looking to improve facial balance, enhance lips or chin, define jawline or cheeks, or soften deep lines such as nasolabial folds and marionette lines.",
      expectedDowntime:
        "Mild swelling, redness, or bruising may occur and typically resolves within 3–7 days.",
    },
    {
      id: "injectable-prp",
      title: "PRP",
      subtitle: "Platelet-Rich Plasma",
      effect:
        "Uses the body's own growth factors to stimulate skin repair, enhance collagen production, and improve overall skin tone and texture.",
      recommendedFor:
        "Clients seeking natural skin rejuvenation, improved skin vitality, or enhancement of other aesthetic treatments.",
      expectedDowntime:
        "Mild redness or swelling for 1–2 days.",
    },
    {
      id: "injectable-mesotherapy",
      title: "Mesotherapy",
      effect:
        "Delivers customized nutrients directly into the skin to deeply hydrate, revitalize, and improve overall skin quality and radiance.",
      recommendedFor:
        "Those with dehydrated, dull, or tired-looking skin who desire a refreshed and glowing appearance.",
      expectedDowntime:
        "Minor redness or pinpoint marks may appear for 1–2 days.",
    },
    {
      id: "injectable-botox",
      title: "Botox",
      effect:
        "Relaxes targeted facial muscles to smooth dynamic wrinkles and prevent the formation of deeper expression lines.",
      recommendedFor:
        "Individuals with dynamic facial lines such as forehead lines, frown lines, or crow's feet, or those seeking preventative anti-aging treatment.",
      expectedDowntime:
        "No downtime; minor redness or injection marks may resolve within a few hours.",
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
          "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consultation.",
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
      alt: "Injectables consultation banner",
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

const injectablesCopyZh: InjectablesCopy = {
  hero: {
    title: "注射美容",
    subtitle:
      "精准注射疗程，旨在恢复面部容量、改善肌肤质地，并在自然平衡的基础上提升面部轮廓，呈现自然美感。",
    breadcrumbLabel: "注射美容",
    image: {
      src: "/images/injectables/hero.png",
      alt: "注射疗程",
    },
  },

  about: {
    titleAccent: "关于",
    titlePrimary: "注射美容",
    paragraphs: [
      {
        text: "我们的注射疗程均由受过专业培训的医疗人员执行，首先进行全面的咨询评估，了解您的面部结构、肌肤状况及个人需求。",
      },
      {
        text: "每个疗程方案都经过精心定制，针对性地满足您的需求，恢复面部平衡，以精准、安全的方式提升自然特征，呈现微妙而自然的效果。",
      },
    ],
  },

  treatments: [
    {
      id: "injectable-radiesse",
      title: "Radiesse",
      effect:
        "提供即时的结构支撑，同时刺激人体自身的胶原蛋白再生，改善紧致度、轮廓感及整体肌肤质地。",
      recommendedFor:
        "适用于面部容量流失、肌肤松弛或面部轮廓感减弱的人群，特别是下半脸及下颌线区域，适合追求自然效果而不过度填充的客户。",
      expectedDowntime:
        "可能出现轻微肿胀或淤青，1-3天内消退。",
    },
    {
      id: "injectable-sculptra",
      title: "Sculptra",
      effect:
        "通过刺激长期胶原蛋白再生，逐步恢复面部容量、改善肌肤质地，随时间递进呈现微妙自然的年轻化效果。",
      recommendedFor:
        "适用于胶原蛋白流失、面部变薄或早期衰老迹象的人群,适合追求渐进式、持久改善而非即时填充的客户。",
      expectedDowntime:
        "恢复期极短，可能出现轻微肿胀，2-3天内消退。",
    },
    {
      id: "injectable-dermal-filler",
      title: "玻尿酸填充",
      effect:
        "使用透明质酸基填充剂恢复流失的容量、提升面部轮廓、平滑皱纹，立即呈现自然美感。",
      recommendedFor:
        "适用于希望改善面部平衡、丰唇或垫下巴、塑造下颌线或颧骨轮廓、或淡化鼻唇沟及木偶纹等深层纹路的人群。",
      expectedDowntime:
        "可能出现轻微肿胀、红肿或淤青，通常3-7天内消退。",
    },
    {
      id: "injectable-prp",
      title: "PRP",
      subtitle: "富血小板血浆",
      effect:
        "利用人体自身的生长因子刺激肌肤修复、促进胶原蛋白生成，改善整体肤色与肌肤质地。",
      recommendedFor:
        "适用于寻求自然肌肤焕活、提升肌肤活力或增强其他美容疗程效果的客户。",
      expectedDowntime:
        "可能出现轻微红肿或肿胀，1-2天内消退。",
    },
    {
      id: "injectable-mesotherapy",
      title: "水光针",
      effect:
        "将定制营养成分直接注入肌肤深层，深度补水、焕活肌肤，提升整体肌肤质地与光泽感。",
      recommendedFor:
        "适用于肌肤缺水、暗沉或疲倦状态的人群，渴望恢复清新、水润、透亮的肌肤状态。",
      expectedDowntime:
        "可能出现轻微红肿或针点痕迹，1-2天内消退。",
    },
    {
      id: "injectable-botox",
      title: "Botox",
      effect:
        "通过放松目标面部肌肉，平滑动态皱纹，预防更深层表情纹的形成。",
      recommendedFor:
        "适用于有动态面部纹路（如抬头纹、皱眉纹或鱼尾纹）的人群，或寻求预防性抗衰疗程的客户。",
      expectedDowntime:
        "无恢复期；轻微红肿或注射痕迹可能在数小时内消退。",
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "疗程后我明显感觉到紧致和提升效果，尤其是下颌线和下半脸区域。咨询非常详细且专业，整个过程精准且安全。我很喜欢效果在接下来几周持续改善。",
      name: "Emily R.",
      role: "Thermage 客户",
    },
    {
      id: "testimonial-2",
      quote:
        "仅一次疗程后，我的皮肤就更亮、更平滑、更均匀了。我最欣赏的是疗程非常个性化——不是千篇一律的方案。团队真的很懂皮肤。",
      name: "Sofia W.",
      role: "光子嫩肤客户",
    },
    {
      id: "testimonial-3",
      quote:
        "这是我第一次尝试医学美容疗程，整个过程让我非常安心。所有细节都解释得很清楚，效果自然清新——正是我所期待的。",
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
          "大部分疗程适合广泛人群。但具体适用性取决于肌肤状况、医疗史和个人目标。需要通过专业咨询来确定最合适的疗程方案，以确保安全并达到最佳效果。",
      },
      {
        id: "faq-prepare",
        question: "预约前需要做什么准备？",
        answer:
          "通常无需特别准备。我们可能会建议在某些疗程前避免使用活性护肤成分、暴晒或其他注射类疗程。具体注意事项将在咨询时详细说明。",
      },
      {
        id: "faq-downtime",
        question: "疗程后有恢复期吗？",
        answer:
          "恢复期因疗程类型而异。许多疗程几乎没有恢复期，您可以迅速恢复日常活动。某些疗程后可能出现轻微红肿、肿胀或敏感，通常会在短时间内消退。",
      },
    ],
  },

  cta: {
    titleParts: { primary: "重新发现美丽", accent: "从这里开始" },
    body: "用心的美学护理，为您的肌肤和身体量身定制。",
    buttonText: "预约咨询",
    image: {
      src: "/images/banner.png",
      alt: "注射美容咨询",
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

// Backward-compatible default export for any code still importing injectablesCopy directly
export const injectablesCopy = injectablesCopyEn;

// Bilingual content object for new i18n pattern
export const injectablesContent: { en: InjectablesCopy; zh: InjectablesCopy } = {
  en: injectablesCopyEn,
  zh: injectablesCopyZh,
};
