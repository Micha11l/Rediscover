export type PromoTreatment = {
  id: string;
  title: string;
  image: { src: string; alt: string };
  vipPrice: string;
  regularPrice: string;
};

export type PromoCopy = {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: { src: string; alt: string };
  };
  welcome: {
    messageParts: { primary: string; accent: string };
    subtitle: string;
  };
  treatments: {
    tag: string;
    title: string;
    subtitle: string;
    items: PromoTreatment[];
  };
  guideline: {
    titleParts: { primary: string; accent: string };
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

export const promoCopy: PromoCopy = {
  hero: {
    title: "First Visit VIP Experience",
    subtitle:
      "Enjoy exclusive introductory pricing designed for your first visit.",
    buttonText: "Request VIP Consultation",
    backgroundImage: {
      src: "/images/promo/hero.png",
      alt: "VIP spa experience",
    },
  },

  welcome: {
    messageParts: {
      primary: "We believe the first visit should be about ",
      accent: "understanding your skin and goals \u2014 not pressure.",
    },
    subtitle:
      "Our VIP introductory pricing is designed to give new clients the opportunity to experience our treatments,\napproach, and care philosophy with confidence.",
  },

  treatments: {
    tag: "Services",
    title: "Our Most Loved Treatments",
    subtitle:
      "Our most requested treatments, specially curated for first-time clients to experience our signature care at VIP pricing.",
    items: [
      {
        id: "lumecca",
        title: "Lumecca Photo Facial",
        image: { src: "/images/promo/lumecca.png", alt: "Lumecca Photo Facial treatment" },
        vipPrice: "$250",
        regularPrice: "$380",
      },
      {
        id: "detoxing",
        title: "Detoxing Facial",
        image: { src: "/images/promo/detoxing.png", alt: "Detoxing Facial treatment" },
        vipPrice: "$98",
        regularPrice: "$158",
      },
      {
        id: "lymphatic",
        title: "Lymphatic Drainage",
        image: { src: "/images/promo/lymphatic.png", alt: "Lymphatic Drainage treatment" },
        vipPrice: "$128",
        regularPrice: "$200",
      },
      {
        id: "forma",
        title: "Forma Lifting",
        image: { src: "/images/promo/forma.png", alt: "Forma Lifting treatment" },
        vipPrice: "$368",
        regularPrice: "$468",
      },
    ],
  },

  guideline: {
    titleParts: { primary: "VIP Experience ", accent: "Guideline" },
    bullets: [
      "Valid for first-time clients only",
      "One VIP experience per person",
      "Cannot be combined with other promotions",
      "Subject to consultation and treatment suitability",
      "All prices are listed before applicable taxes.",
    ],
  },

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Consultation banner",
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
