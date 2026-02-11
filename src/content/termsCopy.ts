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

export const termsCopy: TermsCopy = {
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
        "Actual treatment plans, procedures, and outcomes may vary based on individual conditions, professional assessments, and suitability.",
        "Rediscover Beauty Clinic reserves the right to modify, update, or discontinue any service at its discretion and in accordance with applicable laws and regulations.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility",
      paragraphs: [
        "You must be at least 18 years of age, or have the consent and presence of a parent or legal guardian to receive certain services.",
        "Certain treatments may have specific requirements, and we reserve the right to refuse service based on suitability and safety considerations.",
      ],
    },
    {
      id: "appointment-scheduling",
      title: "Appointment Scheduling",
      paragraphs: [
        "Appointments are scheduled directly through phone, messaging, email, or in-person. We do not use an automated online booking system that collects personal data.",
        "Treatment start times are scheduled according to our calendar and availability.",
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
        "Full payment is required at the time of service unless otherwise arranged.",
        "Payment methods may vary depending on service type or promotion.",
      ],
    },
    {
      id: "treatment-expectations",
      title: "Treatment Expectations",
      paragraphs: [
        "Results vary by individual. While we provide information based on clinical understanding and experience, no guarantees of specific outcomes are implied.",
        "Client responsibilities include following pre- and post-treatment recommendations for safety and best results.",
      ],
    },
    {
      id: "professional-advice",
      title: "Professional Advice",
      paragraphs: [
        "Information provided by our clinic, including website content and staff communication, is for informational purposes only and does not replace professional medical advice.",
        "For medical concerns, consult a qualified healthcare professional.",
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
