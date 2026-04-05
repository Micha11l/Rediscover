export type PrivacySubsection = {
  subtitle: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBulletsParagraphs?: string[];
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBulletsParagraphs?: string[];
  subsections?: PrivacySubsection[];
};

export type PrivacyCopy = {
  hero: {
    title: string;
    effectiveDate: string;
  };
  introduction: string;
  sections: PrivacySection[];
  carePromise: {
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

const privacyCopyEn: PrivacyCopy = {
  hero: {
    title: "Privacy Policy",
    effectiveDate: "January 25, 2026",
  },

  introduction:
    "At Rediscover Beauty Clinic, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you visit and interact with our website or services.",

  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "a. Personal Data",
          paragraphs: [
            "We collect personal information that you voluntarily provide when you:",
          ],
          bullets: [
            "Book an appointment",
            "Contact us by phone, email, or social medias",
            "__DIVIDER__This may include:",
            "Name",
            "Email address",
            "Phone number",
            "Treatment preferences",
          ],
        },
        {
          subtitle: "b. Usage Data",
          paragraphs: [
            "We may collect data about how you access and use our website, such as:",
          ],
          bullets: [
            "IP address",
            "Browser type",
            "Pages viewed",
            "Date/time of visit",
          ],
          afterBulletsParagraphs: [
            "This information is collected via cookies and analytics tools.\nYou may adjust browser settings to refuse cookies; however, this may affect website functionality.",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      paragraphs: ["We use your personal information to:"],
      bullets: [
        "Process and manage appointments",
        "Respond to inquiries and provide customer support",
        "Send promotions, updates, newsletters (with your consent)",
        "Improve our website and services",
        "Comply with legal obligations",
      ],
    },
    {
      id: "disclosure",
      title: "Disclosure of Personal Information",
      paragraphs: [
        "We do not sell, rent, or trade your personal information under any circumstances.\n\nYour personal information will only be disclosed with your explicit consent, and only in limited situations necessary to provide services or comply with legal obligations.\n\nThese situations may include:",
      ],
      bullets: [
        "When you voluntarily provide information through direct contact methods such as phone calls, messages, or in-person communication",
        "When disclosure is required by law, regulation, court order, or legal process",
        "When necessary to protect the rights, safety, or property of Rediscover Beauty Clinic, our clients, or others",
      ],
      afterBulletsParagraphs: [
        "We do not use automated booking systems or online scheduling platforms that collect personal data.\n\nAll personal information provided to us is handled directly and kept confidential.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.\n\nWhen personal information is no longer needed, we securely delete or anonymize it.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "We take reasonable administrative, technical, and physical measures to protect your personal information against unauthorized access, loss, misuse, disclosure, or alteration.\n\nDespite our efforts, no data transmission over the Internet or electronic storage system can be guaranteed to be completely secure.\n\nTherefore, we cannot guarantee absolute security of your information.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      paragraphs: [
        "Depending on your jurisdiction, you may have the right to:",
      ],
      bullets: [
        "Access the personal information we hold about you",
        "Request correction of inaccurate or incomplete information",
        "Request deletion of your personal information",
        "Withdraw consent for certain data processing activities",
        "Request information about how your data is used",
      ],
      afterBulletsParagraphs: [
        "To exercise these rights, please contact us using the details provided below.",
      ],
    },
    {
      id: "appointment-cancellation",
      title: "Appointment & Cancellation Policy",
      paragraphs: [
        "Appointments are arranged through direct contact only, including phone calls, messaging platforms, or in-person scheduling.\n\nTo ensure fair scheduling and respect for our service providers' time, we kindly request the following:",
      ],
      bullets: [
        "Appointment changes or cancellations must be made at least 24 hours in advance",
        "Same-day cancellations, late notice, or no-shows may be subject to a cancellation fee, at the clinic's discretion",
        "Late arrivals may result in a shortened treatment time to avoid delays for other clients",
        "Service exchanges or substitutions may be considered only with clinic approval and are subject to availability and individual circumstances",
      ],
      afterBulletsParagraphs: [
        "By booking an appointment with Rediscover Beauty Clinic, you acknowledge and agree to this appointment and cancellation policy.",
      ],
    },
    {
      id: "children-minors",
      title: "Children & Minors",
      paragraphs: [
        "Rediscover Beauty Clinic does not knowingly collect or solicit personal information from individuals under the age of 18.\n\nClients under the age of 18 may only participate in services or treatments with the presence and consent of a parent or legal guardian.",
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Websites",
      paragraphs: [
        "Our website may contain links to third-party websites or services that are not owned or controlled by us.\n\nWe are not responsible for the privacy practices, content, or policies of any third-party websites.\n\nWe encourage you to review their privacy policies before providing any personal information.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this Privacy Policy",
      paragraphs: [
        "We reserve the right to update or modify this Privacy Policy at any time.\n\nAny changes will be posted on this page, and the updated effective date will be revised accordingly.\n\nContinued use of our website after changes are posted constitutes your acceptance of those changes.",
      ],
    },
    {
      id: "contact",
      title: "Contact Information",
      paragraphs: [
        "If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us:\n\nRediscover Beauty Clinic\nPhone: +1 647 523 3988\nAddress: 9425 Leslie St, Unit 14, 2F, Richmond Hill, ON L4B 3N7\nEmail: rediscoverbeauty99@gmail.com",
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

const privacyCopyZh: PrivacyCopy = {
  hero: {
    title: "隐私政策",
    effectiveDate: "2026年1月25日",
  },

  introduction:
    "爱妍舍致力于保护您的隐私并妥善保管您的个人信息。本隐私政策说明了我们收集哪些信息、如何使用这些信息，以及您在访问和使用我们网站或服务时就个人数据所享有的权利。",

  sections: [
    {
      id: "information-we-collect",
      title: "我们收集的信息",
      subsections: [
        {
          subtitle: "a. 个人数据",
          paragraphs: [
            "当您进行以下操作时，我们会收集您自愿提供的个人信息：",
          ],
          bullets: [
            "预约服务",
            "通过电话、电子邮件或社交媒体与我们联系",
            "__DIVIDER__这些信息可能包括：",
            "姓名",
            "电子邮件地址",
            "电话号码",
            "疗程偏好",
          ],
        },
        {
          subtitle: "b. 使用数据",
          paragraphs: [
            "我们可能会收集有关您访问和使用本网站的数据，例如：",
          ],
          bullets: [
            "IP 地址",
            "浏览器类型",
            "浏览的页面",
            "访问日期与时间",
          ],
          afterBulletsParagraphs: [
            "这些信息通过 Cookie 和分析工具收集。\n您可以在浏览器设置中拒绝 Cookie；但这可能会影响网站的部分功能。",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "我们如何使用您的信息",
      paragraphs: ["我们使用您的个人信息用于以下目的："],
      bullets: [
        "处理和管理预约",
        "回复咨询并提供客户支持",
        "在征得您同意的情况下发送推广信息、动态和资讯",
        "改善我们的网站和服务",
        "遵守法律义务",
      ],
    },
    {
      id: "disclosure",
      title: "个人信息的披露",
      paragraphs: [
        "我们在任何情况下均不会出售、出租或交换您的个人信息。\n\n您的个人信息仅在获得您的明确同意后，且仅在为提供服务或遵守法律义务所必需的有限情形下披露。\n\n这些情形可能包括：",
      ],
      bullets: [
        "当您通过电话、消息或当面沟通等直接联系方式自愿提供信息时",
        "当法律、法规、法院命令或法律程序要求披露时",
        "当为保护爱妍舍、我们的客户或其他人的权利、安全或财产而有必要披露时",
      ],
      afterBulletsParagraphs: [
        "我们不使用自动预约系统或收集个人数据的在线排程平台。\n\n您提供给我们的所有个人信息均由我们直接处理并严格保密。",
      ],
    },
    {
      id: "data-retention",
      title: "数据保留",
      paragraphs: [
        "我们仅在实现本隐私政策所述目的所需的期限内保留个人信息，除非法律要求或允许更长的保留期限。\n\n当个人信息不再需要时，我们将安全地删除或匿名化处理。",
      ],
    },
    {
      id: "data-security",
      title: "数据安全",
      paragraphs: [
        "我们采取合理的行政、技术和物理措施来保护您的个人信息免受未经授权的访问、丢失、滥用、披露或篡改。\n\n尽管我们尽力保护，但互联网上的数据传输或电子存储系统的安全性无法得到完全保证。\n\n因此，我们无法对您信息的绝对安全作出担保。",
      ],
    },
    {
      id: "your-rights",
      title: "您的隐私权利",
      paragraphs: [
        "根据您所在的司法管辖区，您可能享有以下权利：",
      ],
      bullets: [
        "查阅我们持有的关于您的个人信息",
        "要求更正不准确或不完整的信息",
        "要求删除您的个人信息",
        "撤回对特定数据处理活动的同意",
        "要求了解您的数据如何被使用",
      ],
      afterBulletsParagraphs: [
        "如需行使上述权利，请通过以下联系方式与我们联系。",
      ],
    },
    {
      id: "appointment-cancellation",
      title: "预约与取消政策",
      paragraphs: [
        "预约仅可通过直接联系方式进行，包括电话、通讯平台或到店预约。\n\n为确保公平排期并尊重服务人员的时间，我们恳请您遵守以下规定：",
      ],
      bullets: [
        "预约变更或取消须至少提前 24 小时通知",
        "当日取消、临时通知或未到诊可能会产生取消费用，具体由诊所酌情决定",
        "迟到可能导致疗程时间缩短，以避免影响其他客户的预约安排",
        "服务更换或替代需经诊所批准，且视实际情况和可用性而定",
      ],
      afterBulletsParagraphs: [
        "在爱妍舍预约即表示您已知悉并同意本预约与取消政策。",
      ],
    },
    {
      id: "children-minors",
      title: "儿童与未成年人",
      paragraphs: [
        "爱妍舍不会故意收集或征求 18 岁以下人士的个人信息。\n\n18 岁以下的客户须在父母或法定监护人的陪同和同意下方可接受服务或疗程。",
      ],
    },
    {
      id: "third-party",
      title: "第三方网站",
      paragraphs: [
        "本网站可能包含指向非我们拥有或控制的第三方网站或服务的链接。\n\n我们对任何第三方网站的隐私实践、内容或政策不承担责任。\n\n我们建议您在提供任何个人信息前，先查阅其隐私政策。",
      ],
    },
    {
      id: "changes",
      title: "隐私政策的变更",
      paragraphs: [
        "我们保留随时更新或修改本隐私政策的权利。\n\n任何更改将发布在此页面上，并相应更新生效日期。\n\n在更改发布后继续使用本网站即表示您接受相关变更。",
      ],
    },
    {
      id: "contact",
      title: "联系信息",
      paragraphs: [
        "如您对本隐私政策或您的个人信息有任何疑问或顾虑，请与我们联系：\n\n爱妍舍 (Rediscover Beauty Clinic)\nPhone: +1 647 523 3988\nAddress: 9425 Leslie St, Unit 14, 2F, Richmond Hill, ON L4B 3N7",
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

export const privacyCopy = privacyCopyEn;

export const privacyContent: { en: PrivacyCopy; zh: PrivacyCopy } = {
  en: privacyCopyEn,
  zh: privacyCopyZh,
};
