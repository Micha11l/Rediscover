/**
 * RMT (Registered Massage Therapy) Page Copy
 *
 * Centralized content module for the RMT page sections.
 */

export type RmtPricingTier = {
  duration: string;
  price: string;
};

export type RmtTreatment = {
  id: string;
  title: string;
  pricing: RmtPricingTier[];
  note?: string;
};

export type RmtHelpBullet = {
  id: string;
  text: string;
};

export type RmtCopy = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    breadcrumbLabel: string;
    images: Array<{ src: string; alt: string }>;
  };
  welcome: {
    message: string;
    aboutTitle: string;
    aboutParagraphs: string[];
  };
  pricingSection: {
    title: string;
    description: string;
  };
  treatments: RmtTreatment[];
  helpSection: {
    title: string;
    subtitle: string;
    bullets: RmtHelpBullet[];
    closingParagraph: string;
  };
  insuranceSection: {
    title: string;
    subtitle: string;
    bullets: string[];
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

export const rmtCopy: RmtCopy = {
  hero: {
    titleLine1: "Registered",
    titleLine2: "Massage Therapy",
    subtitle:
      "Professional therapeutic massage in a calm, private clinic setting.",
    breadcrumbLabel: "Registered Massage Therapy",
    images: [
      { src: "/images/rmt/hero-1.png", alt: "RMT treatment 1" },
      { src: "/images/rmt/hero-2.png", alt: "RMT treatment 2" },
      { src: "/images/rmt/hero-3.png", alt: "RMT treatment 3" },
    ],
  },

  welcome: {
    message:
      "At Rediscover Beauty Clinic, our Registered Massage Therapy services are designed to support both physical recovery and overall well-being.",
    aboutTitle: "About Our RMT Services",
    aboutParagraphs: [
      "Our Registered Massage Therapists (RMTs) provide professional, evidence-based treatments tailored to each client\u2019s needs \u2014 whether you\u2019re managing chronic pain, recovering from injury, or simply in need of deep relaxation.",
      "Sessions take place in a calm, private treatment room within our clinic, ensuring a comfortable and focused experience from start to finish.",
      "We also offer optional enhancements such as aromatherapy and cupping to complement your session, based on your preferences and therapeutic goals.",
    ],
  },

  pricingSection: {
    title: "Treatments & Pricing",
    description:
      "We offer a range of massage therapy services tailored to your comfort and therapeutic needs. All treatments are performed by our licensed Registered Massage Therapist in a calm, private setting.",
  },

  treatments: [
    {
      id: "rmt-massage",
      title: "RMT",
      pricing: [
        { duration: "30 mins", price: "$60" },
        { duration: "45 mins", price: "$90" },
        { duration: "60 mins", price: "$120" },
        { duration: "90 mins", price: "$170" },
      ],
      note: "All prices are tax included.",
    },
    {
      id: "rmt-aroma",
      title: "Aroma Therapy",
      pricing: [
        { duration: "30 mins", price: "$80" },
        { duration: "45 mins", price: "$100" },
        { duration: "60 mins", price: "$120" },
        { duration: "90 mins", price: "$170" },
      ],
      note: "All prices are tax included.",
    },
    {
      id: "rmt-cupping",
      title: "Cupping",
      pricing: [{ duration: "", price: "+$30" }],
    },
  ],

  helpSection: {
    title: "What RMT Can Help With?",
    subtitle:
      "Registered Massage Therapy at our clinic may help with a variety of physical concerns, including:",
    bullets: [
      { id: "help-1", text: "Muscle tension and tightness" },
      { id: "help-2", text: "Neck, shoulder, and back discomfort" },
      { id: "help-3", text: "Postural strain from desk work or daily habits" },
      { id: "help-4", text: "Sports-related soreness or recovery" },
      { id: "help-5", text: "Stress relief and relaxation" },
      { id: "help-6", text: "Circulation and mobility support" },
    ],
    closingParagraph:
      "Each session is customized based on your current condition, goals, and comfort level. Your therapist will check in with you throughout to ensure the right level of pressure and focus.",
  },

  insuranceSection: {
    title: "Insurance & Receipts",
    subtitle: "We understand the importance of accessible care.",
    bullets: [
      "RMT treatments may be eligible for insurance coverage under your extended health benefits plan. Please check with your provider for details.",
      "Official receipts are provided after each session for direct submission to your insurance provider.",
    ],
  },

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "RMT consultation banner",
    },
  },

  carePromise: {
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care \u2014 guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};
