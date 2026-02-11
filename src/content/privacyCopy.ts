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

export const privacyCopy: PrivacyCopy = {
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
        "If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us:\n\nRediscover Beauty Clinic\nPhone: +1 647 523 3988\nAddress: 9425 Leslie St, Unit 14, 2F, Richmond Hill, ON L4B 3N7",
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
