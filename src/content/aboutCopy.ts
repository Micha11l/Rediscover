export type AboutValueItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type AboutMilestone = {
  id: string;
  year: string;
  description: string;
};

export type AboutTeamMember = {
  id: string;
  name: string;
  role: string;
  image: { src: string; alt: string };
};

export type AboutCopy = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    breadcrumbLabel: string;
    backgroundImage: { src: string; alt: string };
  };
  philosophy: {
    quote: string;
    logos: Array<{ src: string; alt: string }>;
  };
  values: {
    title: string;
    description: string;
    items: AboutValueItem[];
  };
  sanctuary: {
    title: string;
    subtitle: string;
    image: { src: string; alt: string };
  };
  milestones: {
    title: string;
    items: AboutMilestone[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  team: {
    title: string;
    subtitle: string;
    members: AboutTeamMember[];
  };
  carePromise: {
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

export const aboutCopy: AboutCopy = {
  hero: {
    titleLine1: "Rooted in Wellness,",
    titleLine2: "Elevated by Beauty",
    subtitle:
      "Explore the spa suite for your self-care journey. Beauty, wellness, and balance come together.",
    breadcrumbLabel: "About",
    backgroundImage: {
      src: "/images/about/hero.png",
      alt: "Beauva spa interior",
    },
  },

  philosophy: {
    quote:
      "Self-care is more than a luxury \u2014 it\u2019s a lifestyle. Nestled in a calm, elegant space, our spa is a sanctuary where beauty, wellness, and inner balance come together.",
    logos: [
      { src: "/images/about/logo-1.png", alt: "Partner logo 1" },
      { src: "/images/about/logo-2.png", alt: "Partner logo 2" },
      { src: "/images/about/logo-3.png", alt: "Partner logo 3" },
      { src: "/images/about/logo-4.png", alt: "Partner logo 4" },
      { src: "/images/about/logo-5.png", alt: "Partner logo 5" },
      { src: "/images/about/logo-6.png", alt: "Partner logo 6" },
    ],
  },

  values: {
    title: "Our Values, Your Experience",
    description:
      "We believe in creating an experience that goes beyond treatments \u2014 one rooted in care, intention, and lasting impact.",
    items: [
      {
        id: "value-holistic",
        icon: "/images/about/icon-holistic.png",
        title: "Holistic Healing",
        description:
          "We treat the whole person, not just symptoms \u2014 addressing physical, emotional, and spiritual wellness.",
      },
      {
        id: "value-customer",
        icon: "/images/about/icon-customer.png",
        title: "Customer-Centric Care",
        description:
          "Your needs guide everything we do. We listen, adapt, and personalize every experience.",
      },
      {
        id: "value-sustainable",
        icon: "/images/about/icon-sustainable.png",
        title: "Sustainable Living",
        description:
          "We choose eco-conscious products and practices to protect both your skin and our planet.",
      },
      {
        id: "value-innovation",
        icon: "/images/about/icon-innovation.png",
        title: "Continuous Innovation",
        description:
          "We stay ahead of industry trends, bringing you the latest in safe, effective treatments.",
      },
      {
        id: "value-authenticity",
        icon: "/images/about/icon-authenticity.png",
        title: "Authenticity",
        description:
          "We are transparent, honest, and genuine \u2014 building trust through every interaction.",
      },
      {
        id: "value-community",
        icon: "/images/about/icon-community.png",
        title: "Community & Connection",
        description:
          "We foster a welcoming space where clients and staff feel like family.",
      },
    ],
  },

  sanctuary: {
    title: "Step Inside Our Sanctuary",
    subtitle:
      "Our space is designed to calm the senses and elevate your experience from the moment you arrive.",
    image: {
      src: "/images/about/sanctuary.png",
      alt: "Beauva spa sanctuary interior",
    },
  },

  milestones: {
    title: "Milestones in Beauty & Care",
    items: [
      {
        id: "milestone-2013",
        year: "2013",
        description:
          "Beauva was founded with a vision to redefine beauty and wellness in the community.",
      },
      {
        id: "milestone-2015",
        year: "2015",
        description:
          "We expanded our team and introduced advanced aesthetic technologies.",
      },
      {
        id: "milestone-2018",
        year: "2018",
        description:
          "Partnered with leading medical device manufacturers to bring cutting-edge treatments.",
      },
      {
        id: "milestone-2020",
        year: "2020",
        description:
          "Celebrated 7 years of service with a refreshed space and expanded service offerings.",
      },
    ],
  },

  cta: {
    title: "Feel Beautiful Inside & Out",
    subtitle:
      "Book a consultation today and discover treatments tailored to your unique needs.",
    buttonText: "Request a Consultation",
  },

  team: {
    title: "Meet the Experts Behind the Glow",
    subtitle:
      "Our team of certified professionals is dedicated to helping you look and feel your best.",
    members: [
      {
        id: "team-1",
        name: "Chris Hoover",
        role: "Founder & Aesthetic Director",
        image: { src: "/images/about/team-1.png", alt: "Chris Hoover" },
      },
      {
        id: "team-2",
        name: "Mira Lindell",
        role: "Lead Esthetician",
        image: { src: "/images/about/team-2.png", alt: "Mira Lindell" },
      },
      {
        id: "team-3",
        name: "Natalie Crane",
        role: "Laser Technician",
        image: { src: "/images/about/team-3.png", alt: "Natalie Crane" },
      },
      {
        id: "team-4",
        name: "Jasmine Reyes",
        role: "Wellness Coordinator",
        image: { src: "/images/about/team-4.png", alt: "Jasmine Reyes" },
      },
    ],
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
