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

  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "At Beauva Clinic, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our clinic, use our services, or interact with our website.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "a. Personal Data",
          paragraphs: [
            "We may collect the following personal information when you book an appointment, inquire about services, or contact us:",
          ],
          bullets: [
            "Full name",
            "Email address",
            "Phone number",
            "Service preferences and appointment history",
          ],
        },
        {
          subtitle: "b. Usage Data",
          paragraphs: [
            "When you visit our website, we may automatically collect certain technical data, including:",
          ],
          bullets: [
            "IP address",
            "Browser type and version",
            "Pages viewed and time spent on site",
            "Date and time of access",
          ],
          afterBulletsParagraphs: [
            "We may use cookies or similar technologies to enhance your browsing experience.",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Confirm, schedule, and manage your appointments",
        "Communicate with you regarding services, promotions, and updates",
        "Improve and personalize your experience at our clinic",
        "Process payments and maintain accurate records",
        "Comply with legal and regulatory requirements",
      ],
    },
    {
      id: "disclosure",
      title: "Disclosure of Personal Information",
      paragraphs: [
        "We do not sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.",
        "We may disclose your information in the following situations:",
      ],
      bullets: [
        "To comply with legal obligations or respond to lawful requests",
        "To protect the rights, safety, or property of Beauva Clinic or others",
        "To trusted service providers who assist us in operating our business (subject to confidentiality agreements)",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law.",
        "Once no longer needed, your data will be securely deleted or anonymized.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure.",
        "However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
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
        "Request correction of inaccurate data",
        "Request deletion of your personal data",
        "Withdraw consent to data processing",
        "Lodge a complaint with a data protection authority",
      ],
      afterBulletsParagraphs: [
        "To exercise any of these rights, please contact us using the information provided below.",
      ],
    },
    {
      id: "appointment-cancellation",
      title: "Appointment & Cancellation Policy",
      paragraphs: [
        "To ensure smooth operations and availability for all clients, please note:",
      ],
      bullets: [
        "We require at least 24 hours' notice for appointment cancellations or rescheduling.",
        "Late cancellations or no-shows may result in a fee or affect future booking privileges.",
        "Repeated missed appointments may be subject to prepayment requirements.",
        "We reserve the right to refuse service to clients who repeatedly fail to honor appointments.",
      ],
      afterBulletsParagraphs: [
        "By booking an appointment, you acknowledge and agree to these terms.",
      ],
    },
    {
      id: "children-minors",
      title: "Children & Minors",
      paragraphs: [
        "Clients under the age of 18 must be accompanied by a parent or legal guardian and must have documented consent to receive any services at Beauva Clinic.",
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Websites",
      paragraphs: [
        "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their privacy policies before providing any personal information.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this Privacy Policy",
      paragraphs: [
        "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
      ],
    },
    {
      id: "contact",
      title: "Contact Information",
      paragraphs: [
        "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:",
      ],
      bullets: [
        "Phone: +1 647 523 3988",
        "Address: 9425 Leslie St, Unit 14, 2F, Richmond Hill, ON L4B 3N7",
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
