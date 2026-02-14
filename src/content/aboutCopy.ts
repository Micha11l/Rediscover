export type AboutTeamMember = {
  id: string;
  name: string;
  role: string | string[];
  image: { src: string; alt: string };
};

export type AboutAchievement = {
  id: string;
  value: string;
  suffix?: string;
  label: string;
};

export type AboutCopy = {
  hero: {
    titleAccent: string;
    titleMain: string;
    subtitle: string;
    gallery: Array<{ src: string; alt: string }>;
  };
  welcome: {
    intro: {
      heading: string;
      paragraphs: Array<{
        text: string;
        highlights: string[];
      }>;
    };
    closing: {
      paragraphs: Array<{
        text: string;
        highlights: string[];
      }>;
    };
  };
  achievements: {
    title: string;
    subtitle: string;
    items: AboutAchievement[];
  };
  clinic: {
    titleAccent: string;
    titleMain: string;
    subtitle: string;
    gallery: Array<{ src: string; alt: string }>;
  };
  skincare: {
    title: string;
    subtitle: string;
    image: { src: string; alt: string };
    brands: Array<{
      name: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    subtitle: string;
    members: AboutTeamMember[];
  };
  teamDescription: {
    paragraphs: Array<{
      text: string;
      highlights: string[];
    }>;
  };
  contact: {
    phone: string;
    website: string;
    hours: { days: string; time: string };
    address: string;
  };
  social: Array<{
    id: string;
    name: string;
    image: { src: string; alt: string };
  }>;
  cta: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: { src: string; alt: string };
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    backgroundImage: { src: string; alt: string };
  };
};

export const aboutCopy: AboutCopy = {
  hero: {
    titleAccent: "About",
    titleMain: "Rediscover Beauty Clinic",
    subtitle:
      "Thoughtfully designed care, combining medical aesthetics, therapeutic wellness, and a sense of quiet luxury.",
    gallery: [
      { src: "/images/about/hero-1.jpg", alt: "Clinic interior 1" },
      { src: "/images/about/hero-2.jpg", alt: "Clinic interior 2" },
      { src: "/images/about/hero-3.jpg", alt: "Clinic interior 3" },
    ],
  },

  welcome: {
    intro: {
      heading: "At Rediscover Beauty Clinic",
      paragraphs: [
        {
          text: "We believe that beauty and wellness are most meaningful when approached with intention, professionalism, and respect for individual needs.",
          highlights: ["intention, professionalism, and respect"],
        },
        {
          text: "Our clinic was created as a calm and private environment where clients can slow down, feel supported, and receive care that prioritizes both results and experience. From advanced aesthetic treatments to Registered Massage Therapy, every service is delivered with thoughtful attention to detail, clinical integrity, and long-term wellbeing in mind.",
          highlights: ["calm and private environment"],
        },
      ],
    },
    closing: {
      paragraphs: [
        {
          text: "We value transparency, comfort, and personalized care. Our team takes the time to understand each client's goals, ensuring every treatment plan is tailored, appropriate, and professionally guided.",
          highlights: ["transparency, comfort, and personalized care"],
        },
        {
          text: "Our approach balances clinical precision with a refined, calming experience — where results and comfort are equally prioritized.",
          highlights: [],
        },
      ],
    },
  },

  achievements: {
    title: "We are really\nproud of",
    subtitle:
      "Every number reflects our commitment\nto safe treatments, trusted results, and\nlong-term client relationships.",
    items: [
      {
        id: "clients",
        value: "5,2K+",
        label: "Clients Treated with Care",
      },
      {
        id: "satisfaction",
        value: "5.0",
        suffix: "/5",
        label: "Verified Client Satisfaction",
      },
      {
        id: "experience",
        value: "8+",
        suffix: "Years",
        label: "Aesthetic Experience",
      },
      {
        id: "experts",
        value: "6+",
        label: "Certified Wellness Experts",
      },
    ],
  },

  clinic: {
    titleAccent: "Our Clinic",
    titleMain: "Environment",
    subtitle:
      "A thoughtfully designed space focused on comfort, privacy, and calm.",
    gallery: [
      { src: "/images/about/clinic-1.jpg", alt: "Clinic environment 1" },
      { src: "/images/about/clinic-2.jpg", alt: "Clinic environment 2" },
      { src: "/images/about/clinic-3.jpg", alt: "Clinic environment 3" },
    ],
  },

  skincare: {
    title: "Medical-Grade Skincare We Trust",
    subtitle:
      "Carefully selected to meet our standards for clinical performance, safety, and patient experience.",
    image: {
      src: "/images/about/skincare-products.jpg",
      alt: "Professional skincare products",
    },
    brands: [
      {
        name: "ZO® Skin Health",
        description:
          "A medical-grade skincare system developed in the United States, designed to improve overall skin health by addressing concerns such as acne, pigmentation, aging, and sensitivity through clinically backed formulations and treatment-driven protocols.",
      },
      {
        name: "Maria Galland Paris",
        description:
          "A prestigious French professional skincare brand with decades of expertise, combining advanced active ingredients with refined textures to support customized treatments, skin balance, radiance, and long-term comfort.",
      },
    ],
  },

  team: {
    title: "Meet the Experts Behind the Glow",
    subtitle:
      "A team of certified aesthetic professionals, united by expertise, care, and attention to detail.",
    members: [
      {
        id: "kristen",
        name: "Kristen",
        role: ["Founder", "Lead Aesthetic Practitioner"],
        image: { src: "/images/about/team-kristen.jpg", alt: "Kristen" },
      },
      {
        id: "rain",
        name: "Rain",
        role: "Aesthetic Practitioner",
        image: { src: "/images/about/team-rain.jpg", alt: "Rain" },
      },
      {
        id: "cammi",
        name: "Cammi",
        role: "Aesthetic Practitioner",
        image: { src: "/images/about/team-cammi.jpg", alt: "Cammi" },
      },
      {
        id: "sandy",
        name: "Sandy",
        role: "Aesthetic Practitioner",
        image: { src: "/images/about/team-sandy.jpg", alt: "Sandy" },
      },
      {
        id: "zoe",
        name: "Zoe",
        role: "Aesthetic Practitioner",
        image: { src: "", alt: "Zoe" },
      },
    ],
  },

  teamDescription: {
    paragraphs: [
      {
        text: "Our practitioners are professionally trained and certified, with experience across medical aesthetics, skin health, and wellness services. Each treatment is guided by professional standards, safety protocols, and individualized assessment.",
        highlights: ["professionally trained and certified"],
      },
      {
        text: "We take time to understand each client's goals and concerns, ensuring every treatment plan is personalized, appropriate, and results-focused, while maintaining comfort and discretion throughout the experience.",
        highlights: ["personalized, appropriate, and results-focused"],
      },
    ],
  },

  contact: {
    phone: "+1 (647) 523-3988",
    website: "https://rediscoverbeauty.ca",
    hours: { days: "Mon – Sun", time: "10.00AM – 8.00PM" },
    address: "9425 Leslie St Unit14, 2F, Richmond Hill, ON L4B 3N7",
  },

  social: [
    {
      id: "instagram",
      name: "Instagram",
      image: { src: "/images/about/social-instagram.jpg", alt: "Instagram" },
    },
    {
      id: "wechat",
      name: "WeChat",
      image: { src: "/images/about/social-wechat.jpg", alt: "WeChat" },
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      image: { src: "/images/about/social-whatsapp.jpg", alt: "WhatsApp" },
    },
    {
      id: "tiktok",
      name: "Tiktok",
      image: { src: "/images/about/social-tiktok.jpg", alt: "Tiktok" },
    },
  ],

  cta: {
    titleLine1: "Rediscover Beauty",
    titleLine2: "Begins Here",
    subtitle: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    backgroundImage: {
      src: "/images/about/cta-banner.jpg",
      alt: "CTA banner",
    },
  },

  newsletter: {
    title: "Newsletter Sign-Up",
    subtitle: "Subscribe to receive updates on promotions, new treatments, and skincare tips.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    backgroundImage: {
      src: "/images/about/newsletter-bg.jpg",
      alt: "Newsletter background",
    },
  },
};
