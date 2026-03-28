export type TermsSubsection = {
  subtitle: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBulletsParagraphs?: string[];
};

export type TermsSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBulletsParagraphs?: string[];
  subsections?: TermsSubsection[];
};

export type TermsCopy = {
  hero: {
    title: string;
    effectiveDate: string;
  };
  introduction: string;
  sections: TermsSection[];
  carePromise: {
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

const termsCopyEn: TermsCopy = {
  hero: {
    title: "Terms & Conditions",
    effectiveDate: "January 25, 2026",
  },

  introduction:
    'These Terms and Conditions ("Terms") govern your access to and use of the services provided by Rediscover Beauty Clinic ("the Clinic", "we", "us" or "our"), including website content, treatments, appointments, and related interactions.',

  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      paragraphs: [
        "By booking or receiving any service from Rediscover Beauty Clinic, you acknowledge that you have read, understood, and agree to these Terms and the Clinic's policies, including the Privacy Policy, Appointment & Cancellation Policy, and any other applicable terms.",
      ],
    },
    {
      id: "service-description",
      title: "Service Description",
      paragraphs: [
        "Rediscover Beauty Clinic provides professional aesthetic and wellness services, including but not limited to:",
      ],
      bullets: [
        "Facial treatments and skin care services",
        "Skin tightening and anti-aging treatments",
        "Body contouring and body care treatments",
        "Light- and energy-based aesthetic treatments",
        "Injectable aesthetic services (such as botox and dermal fillers)",
        "Professional consultations and skin assessments",
      ],
      afterBulletsParagraphs: [
        "All service descriptions provided on this website are for general informational purposes only.",
        "Actual treatment plans, procedures, and outcomes may vary based on individual conditions, professional assessments, and suitability.\n\nRediscover Beauty Clinic reserves the right to modify, update, or discontinue any service at its discretion and in accordance with applicable laws and regulations.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility",
      paragraphs: [
        "You must be at least 18 years of age, or have the consent and presence of a parent or legal guardian to receive certain services.\n\nCertain treatments may have specific requirements, and we reserve the right to refuse service based on suitability and safety considerations.",
      ],
    },
    {
      id: "appointment-scheduling",
      title: "Appointment Scheduling",
      paragraphs: [
        "Appointments are scheduled directly through phone, messaging, email, or in-person. We do not use an automated online booking system that collects personal data.\n\nTreatment start times are scheduled according to our calendar and availability.",
      ],
    },
    {
      id: "appointment-changes",
      title: "Appointment Changes & Cancellation",
      bullets: [
        "Appointment changes or cancellations must be submitted at least 24 hours in advance.",
        "Same-day cancellations or no-shows may result in a cancellation fee at the Clinic's discretion.",
        "Late arrivals may result in abbreviated treatment time to avoid delays for others.",
        "Service exchanges or substitutions are subject to clinic approval and availability, and may not be equivalent in value.",
      ],
    },
    {
      id: "service-fees",
      title: "Service Fees & Pricing",
      bullets: [
        "All prices displayed on our website and promotional materials are before tax, unless otherwise stated.",
        "Final charges are subject to applicable federal and provincial taxes.",
        "Service prices may vary based on treatment area, product used, treatment plan, and professional assessment.",
        "Prices, packages, and promotions may be updated or adjusted without prior notice.",
        "Prepaid services, packages, and promotional offers are non-refundable and non-transferable, unless approved by the clinic.",
        "Service exchanges may be considered upon clinic approval and are subject to availability and price differences.",
        "All prices are for reference only and will be confirmed at the time of service.",
        "Prices listed on the website are subject to change without prior notice.",
      ],
    },
    {
      id: "payment-methods",
      title: "Accepted Payment Methods",
      paragraphs: ["We accept the following payment methods:"],
      bullets: [
        "Cash",
        "Debit",
        "Credit Cards (Visa, Mastercard)",
        "E-transfer",
        "NFC mobile payments",
      ],
      afterBulletsParagraphs: [
        "Full payment is required at the time of service unless otherwise arranged.\nPayment methods may vary depending on service type or promotion.",
      ],
    },
    {
      id: "treatment-expectations",
      title: "Treatment Expectations",
      paragraphs: [
        "Results vary by individual. While we provide information based on clinical understanding and experience, no guarantees of specific outcomes are implied.\n\nClient responsibilities include following pre- and post-treatment recommendations for safety and best results.",
      ],
    },
    {
      id: "professional-advice",
      title: "Professional Advice",
      paragraphs: [
        "Information provided by our clinic, including website content and staff communication, is for informational purposes only and does not replace professional medical advice.\n\nFor medical concerns, consult a qualified healthcare professional.",
      ],
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Rediscover Beauty Clinic and its affiliates will not be liable for indirect, incidental, or consequential damages arising out of your use of our services.",
      ],
    },
    {
      id: "changes",
      title: "Changes to Terms & Conditions",
      paragraphs: [
        "We reserve the right to update or modify these Terms at any time. Updated versions will be reflected on this page with a revised effective date.",
      ],
    },
    {
      id: "contact",
      title: "Contact Information",
      paragraphs: [
        "If you have any questions or concerns regarding this Terms & Conditions, please contact us:",
        "Rediscover Beauty Clinic",
      ],
      bullets: [
        "Phone: +1 647 523 3988",
        "Address: 9425 Leslie St, Unit 14, 2F, Richmond Hill, ON L4B 3N7",
        "Email: rediscoverbeauty99@gmail.com",
      ],
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

const termsCopyZh: TermsCopy = {
  hero: {
    title: "条款与条件",
    effectiveDate: "2026年1月25日",
  },

  introduction:
    "本条款与条件（以下简称\u201c条款\u201d）适用于您访问和使用 Rediscover Beauty Clinic（以下简称\u201c诊所\u201d、\u201c我们\u201d）所提供的服务，包括网站内容、疗程、预约及相关互动。",

  sections: [
    {
      id: "acceptance",
      title: "条款的接受",
      paragraphs: [
        "在 Rediscover Beauty Clinic 预约或接受任何服务，即表示您确认已阅读、理解并同意本条款及诊所的相关政策，包括隐私政策、预约与取消政策以及其他适用条款。",
      ],
    },
    {
      id: "service-description",
      title: "服务说明",
      paragraphs: [
        "Rediscover Beauty Clinic 提供专业的医学美容及健康护理服务，包括但不限于：",
      ],
      bullets: [
        "面部护理及皮肤管理服务",
        "紧肤与抗衰老疗程",
        "体型塑造及身体护理疗程",
        "光电类医学美容疗程",
        "注射类医美服务（如肉毒素和皮肤填充剂）",
        "专业咨询及皮肤评估",
      ],
      afterBulletsParagraphs: [
        "本网站上所有服务说明仅供一般信息参考。",
        "实际治疗方案、操作流程和效果可能因个人状况、专业评估和适用性而异。\n\nRediscover Beauty Clinic 保留根据自身判断并在适用法律法规范围内修改、更新或停止任何服务的权利。",
      ],
    },
    {
      id: "eligibility",
      title: "服务资格",
      paragraphs: [
        "您须年满 18 周岁，或在父母或法定监护人的同意和陪同下方可接受特定服务。\n\n某些疗程可能有特定的资格要求，我们保留基于适用性和安全考量拒绝提供服务的权利。",
      ],
    },
    {
      id: "appointment-scheduling",
      title: "预约安排",
      paragraphs: [
        "预约通过电话、通讯平台、电子邮件或到店直接进行。我们不使用收集个人数据的自动在线预约系统。\n\n疗程的开始时间根据我们的日程安排和可用性确定。",
      ],
    },
    {
      id: "appointment-changes",
      title: "预约变更与取消",
      bullets: [
        "预约变更或取消须至少提前 24 小时提交",
        "当日取消或未到诊可能会产生取消费用，具体由诊所酌情决定",
        "迟到可能导致疗程时间缩短，以避免影响其他客户",
        "服务更换或替代需经诊所批准并视可用性而定，且可能存在价差",
      ],
    },
    {
      id: "service-fees",
      title: "服务费用与定价",
      bullets: [
        "本网站及推广材料上显示的所有价格均为税前价格，除非另有说明",
        "最终收费须加上适用的联邦和省税",
        "服务价格可能因治疗部位、使用产品、治疗方案和专业评估而有所不同",
        "价格、套餐和促销活动可能会在不另行通知的情况下更新或调整",
        "预付服务、套餐和促销优惠不可退款、不可转让，除非经诊所批准",
        "服务更换需经诊所批准，且视可用性和价差而定",
        "所有价格仅供参考，最终以服务当日确认为准",
        "网站上列出的价格如有变动，恕不另行通知",
      ],
    },
    {
      id: "payment-methods",
      title: "接受的付款方式",
      paragraphs: ["我们接受以下付款方式："],
      bullets: [
        "Cash",
        "Debit",
        "Credit Cards (Visa, Mastercard)",
        "E-transfer",
        "NFC mobile payments",
      ],
      afterBulletsParagraphs: [
        "除另有约定外，服务时须全额付款。\n付款方式可能因服务类型或促销活动而异。",
      ],
    },
    {
      id: "treatment-expectations",
      title: "疗程效果预期",
      paragraphs: [
        "治疗效果因人而异。我们提供的信息基于专业知识和经验，但不对特定效果作出任何保证。\n\n客户有责任遵循疗程前后的建议，以确保安全并获得最佳效果。",
      ],
    },
    {
      id: "professional-advice",
      title: "专业建议",
      paragraphs: [
        "诊所提供的信息（包括网站内容和员工沟通）仅供参考，不能替代专业医疗建议。\n\n如有医疗方面的问题，请咨询具备资质的医疗专业人士。",
      ],
    },
    {
      id: "limitation-liability",
      title: "责任限制",
      paragraphs: [
        "在法律允许的最大范围内，Rediscover Beauty Clinic 及其关联方对因您使用我们的服务而产生的间接、附带或后果性损害不承担责任。",
      ],
    },
    {
      id: "changes",
      title: "条款与条件的变更",
      paragraphs: [
        "我们保留随时更新或修改本条款的权利。更新版本将在此页面上发布，并注明修订后的生效日期。",
      ],
    },
    {
      id: "contact",
      title: "联系信息",
      paragraphs: [
        "如您对本条款与条件有任何疑问或顾虑，请与我们联系：",
        "Rediscover Beauty Clinic",
      ],
      bullets: [
        "Phone: +1 647 523 3988",
        "Address: 9425 Leslie St, Unit 14, 2F, Richmond Hill, ON L4B 3N7",
      ],
    },
  ],

  carePromise: {
    titleParts: { primary: "我们的护理", accent: "承诺" },
    body: "我们相信用心、个性化的护理——以专业知识、透明度和对您自然之美的尊重为指引。\n\n所有治疗均由经过培训和认证的专业人员提供。",
    image: {
      src: "/images/newsletter.png",
      alt: "护理承诺",
    },
  },
};

export const termsCopy = termsCopyEn;

export const termsContent: { en: TermsCopy; zh: TermsCopy } = {
  en: termsCopyEn,
  zh: termsCopyZh,
};
