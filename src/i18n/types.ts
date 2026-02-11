export type Language = "en" | "zh";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    devices: string;
    rmt: string;
    faq: string;
    promo: string;
  };
  hero: {
    title: [string, string, string];
    subtitle: string;
    ctaButton: string;
  };
  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    button: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    items: Array<{
      label1: string;
      label2: string;
    }>;
  };
  values: {
    badge: string;
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  achievement: {
    heading: string;
    stats: Array<{
      value: string;
      label: string;
      description: string;
    }>;
  };
  testimonials: {
    heading: string;
    items: Array<{
      quote: string;
      author: string;
      title: string;
    }>;
  };
  howItWorks: {
    heading: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  location: {
    heading: string;
    subheading: string;
    cardTitle: string;
    addressLabel: string;
    address: string[];
    hoursLabel: string;
    hours: Array<{
      text: string;
      bold: boolean;
    }>;
    parking: Array<{
      text: string;
      bold?: boolean;
    }>;
    payment: Array<{
      text: string;
      bold?: boolean;
    }>;
    phoneLabel: string;
    phone: string;
    button: string;
  };
  cta: {
    heading: string;
    description: string;
    button: string;
  };
  newsletter: {
    heading: string;
    description: string;
    placeholder: string;
    button: string;
  };
  footer: {
    brandName: string;
    sections: {
      businessHours: string;
      menu: string;
      contactUs: string;
    };
    menuLinks: string[];
    copyright: string;
    legalLinks: string[];
  };
}
