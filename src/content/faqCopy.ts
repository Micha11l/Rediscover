export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCopy = {
  hero: {
    title: string;
    subtitle: string;
  };
  items: FaqItem[];
  carePromise: {
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

const faqCopyEn: FaqCopy = {
  hero: {
    title: "Frequently Asked Questions",
    subtitle:
      "Clear answers for a comfortable and confident experience",
  },

  items: [
    {
      id: "faq-first-visit",
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit will begin with a professional consultation and assessment of your skin, facial structure, and aesthetic goals. This allows us to recommend the most suitable treatments and answer any questions you may have before starting.",
    },
    {
      id: "faq-prices",
      question: "Are your prices listed online final?",
      answer:
        "All prices displayed on our website are before tax and subject to applicable federal and provincial tax. Final charges are confirmed at the time of service and may vary based on treatment plans and professional assessment.",
    },
    {
      id: "faq-booking",
      question: "How do I book, reschedule, or cancel an appointment?",
      answer:
        "Appointments can be made by phone, messaging, email, or in person.\nPlease notify us at least 24 hours before your scheduled time if you need to reschedule or cancel. Late cancellations and no-shows may result in a fee.",
    },
    {
      id: "faq-payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept:\n• Cash\n• Debit\n• Credit Cards (Visa, Mastercard)\n• E-transfer\n\nFull payment is required at the time of service unless other arrangements have been made.",
    },
    {
      id: "faq-downtime",
      question: "Do your treatments require downtime?",
      answer:
        "Most of our treatments are non-invasive and have minimal to no downtime. Some advanced procedures may require temporary recovery or specific aftercare, which will be explained during consultation.",
    },
    {
      id: "faq-technicians",
      question: "Are your technicians medically trained?",
      answer:
        "All treatments are performed by trained, experienced professionals. For advanced or injectable procedures, consultations are conducted to ensure safety, suitability, and personalized treatment planning.",
    },
    {
      id: "faq-combine",
      question: "Can I combine multiple treatments?",
      answer:
        "Yes — many of our treatments can be combined based on your goals and professional assessment. Your provider will recommend appropriate combinations or treatment sequences tailored to you.",
    },
    {
      id: "faq-results",
      question: "When will I see results?",
      answer:
        "Treatment results vary depending on the type of service, individual skin condition, and treatment plan. Some improvements may be noticeable immediately, while others develop gradually over time.",
    },
    {
      id: "faq-minors",
      question: "Do you accept minors as clients?",
      answer:
        "Clients under the age of 18 must be accompanied by a parent or legal guardian and have documented consent to receive any services.",
    },
    {
      id: "faq-medical",
      question: "What if I have special medical conditions?",
      answer:
        "Please disclose any medical conditions, medications, or allergies during your consultation. Certain conditions may affect treatment recommendations, and your safety is our priority.",
    },
    {
      id: "faq-packages",
      question: "Do you offer packages or promotions?",
      answer:
        "Yes, we periodically provide packages and promotions for select treatments. These offers are subject to change and may have specific terms, which will be explained when booking.",
    },
    {
      id: "faq-unsure",
      question: "What if I'm unsure which treatment I need?",
      answer:
        "We recommend booking a consultation so that we can assess your concerns and guide you through your options. Our goal is to recommend what is safest and most effective for you.",
    },
  ],

  carePromise: {
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care — guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};

const faqCopyZh: FaqCopy = {
  hero: {
    title: "常见问题",
    subtitle: "清晰解答，让您的每一次体验都安心自信",
  },

  items: [
    {
      id: "faq-first-visit",
      question: "首次到访时我能得到什么服务？",
      answer:
        "您的首次到访将从专业的咨询和评估开始，我们会全面了解您的肌肤状况、面部结构和美学目标。通过这一环节，我们能够为您推荐最合适的疗程方案，并在开始治疗前详细解答您的所有疑问。",
    },
    {
      id: "faq-prices",
      question: "网站上显示的价格是最终价格吗？",
      answer:
        "网站上显示的所有价格均为税前价格，需加收联邦及省税。最终费用将在服务时确认，可能会根据疗程方案和专业评估有所调整。",
    },
    {
      id: "faq-booking",
      question: "如何预约、改期或取消预约？",
      answer:
        "您可以通过电话、信息、电子邮件或亲临门店进行预约。\n如需改期或取消，请至少提前24小时通知我们。迟到取消或未能到场可能会产生费用。",
    },
    {
      id: "faq-payment",
      question: "你们接受哪些付款方式？",
      answer:
        "我们接受以下付款方式：\n• 现金\n• 借记卡\n• 信用卡（Visa、Mastercard）\n• 电子转账\n\n除非另有安排，所有服务费用需在服务时全额支付。",
    },
    {
      id: "faq-downtime",
      question: "你们的疗程需要恢复期吗？",
      answer:
        "我们的大多数疗程都是非侵入性的，几乎不需要恢复期。部分进阶疗程可能需要短暂的恢复时间或特定的护理步骤，我们会在咨询时详细说明。",
    },
    {
      id: "faq-technicians",
      question: "你们的技师是否受过专业医学培训？",
      answer:
        "所有疗程均由经过培训和经验丰富的专业人员提供。对于进阶或注射类疗程，我们会进行咨询以确保安全性、适用性，并制定个性化的疗程计划。",
    },
    {
      id: "faq-combine",
      question: "我可以组合多种疗程吗？",
      answer:
        "可以——我们的许多疗程可以根据您的目标和专业评估进行组合。您的护理顾问会为您推荐适合的组合方案或疗程顺序。",
    },
    {
      id: "faq-results",
      question: "什么时候能看到效果？",
      answer:
        "疗程效果因服务类型、个人肌肤状况和疗程方案而异。部分改善可能立即显现，而有些则需要随时间逐步显现。",
    },
    {
      id: "faq-minors",
      question: "你们接受未成年客户吗？",
      answer:
        "18岁以下的客户必须由父母或法定监护人陪同，并提供书面同意方可接受任何服务。",
    },
    {
      id: "faq-medical",
      question: "如果我有特殊的健康状况怎么办？",
      answer:
        "请在咨询时告知我们任何医疗状况、正在服用的药物或过敏史。某些健康状况可能会影响疗程建议，您的安全是我们的首要考虑。",
    },
    {
      id: "faq-packages",
      question: "你们提供套餐或优惠活动吗？",
      answer:
        "我们会定期为特定疗程推出套餐和优惠活动。这些优惠会随时调整并附有具体条款，预约时我们会详细说明。",
    },
    {
      id: "faq-unsure",
      question: "如果我不确定需要哪种疗程怎么办？",
      answer:
        "我们建议您预约咨询服务，让我们评估您的需求并为您介绍各项选择。我们的目标是为您推荐最安全、最有效的方案。",
    },
  ],

  carePromise: {
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们相信用心、个性化的护理——以专业知识、透明度和对您自然之美的尊重为指引。\n\n所有疗程均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺",
    },
  },
};

// Backward-compatible default export for any code still importing faqCopy directly
export const faqCopy = faqCopyEn;

// Bilingual content object for new i18n pattern
export const faqContent: { en: FaqCopy; zh: FaqCopy } = {
  en: faqCopyEn,
  zh: faqCopyZh,
};
