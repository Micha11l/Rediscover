export type TimelineItem = {
  id: string;
  title: string;
  description: string;
};

export type DeviceTechnology = {
  id: string;
  testId: string;
  title: string;
  image: { src: string; alt: string };
  descriptionParagraphs: string[];
  whyTitle: string;
  whyBullets: string[];
  howWeUseTitle: string;
  howWeUseTitleAccent: string;
  timelineItems: TimelineItem[];
};

export type DevicesCopy = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    breadcrumbLabel: string;
    backgroundImage: { src: string; alt: string };
  };
  intro: string;
  technologies: DeviceTechnology[];
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

export const devicesCopy: DevicesCopy = {
  hero: {
    titleLine1: "Clinical",
    titleLine2: "Aesthetic Technologies",
    breadcrumbLabel: "Devices",
    backgroundImage: {
      src: "/images/devices/hero.png",
      alt: "Clinical aesthetic technologies",
    },
  },

  intro:
    "We use FDA- and Health Canada\u2013approved technologies to deliver safe, precise, and results-driven aesthetic treatments.",

  technologies: [
    {
      id: "inmode",
      testId: "devices-tech-inmode",
      title: "InMode\u00AE Technology",
      image: {
        src: "/images/devices/inmode.png",
        alt: "InMode device",
      },
      descriptionParagraphs: [
        "Powered by InMode, a globally recognized medical aesthetic technology provider, trusted by clinics and physicians worldwide.",
        "InMode specializes in radiofrequency (RF)\u2013based technologies designed to improve skin quality, firmness, and contours in a safe, non-surgical way.",
      ],
      whyTitle: "Why",
      whyBullets: [
        "Health Canada\u2013approved medical devices",
        "Clinically tested, results-driven technology",
        "Precise energy delivery with temperature monitoring",
        "Suitable for face and body treatments",
        "Minimal downtime, high safety profile",
      ],
      howWeUseTitle: "How We Use",
      howWeUseTitleAccent: "Inmode Technology",
      timelineItems: [
        {
          id: "inmode-ipl",
          title: "IPL",
          description:
            "Improves dullness, redness, and uneven skin tone for overall brightening",
        },
        {
          id: "inmode-forma",
          title: "Forma",
          description:
            "Radiofrequency treatment to stimulate collagen and tighten localized facial areas",
        },
        {
          id: "inmode-bodyfx",
          title: "BodyFX",
          description:
            "Personalized body shaping for smoother, firmer-looking skin",
        },
        {
          id: "inmode-morpheus8",
          title: "Morpheus8",
          description:
            "RF microneedling technology to remodel collagen, improve texture, pores, and skin firmness",
        },
      ],
    },
    {
      id: "thermage",
      testId: "devices-tech-thermage",
      title: "Thermage\u00AE Technology",
      image: {
        src: "/images/devices/thermage.png",
        alt: "Thermage device",
      },
      descriptionParagraphs: [
        "Powered by Thermage\u00AE, a clinically trusted monopolar radiofrequency (RF) technology used to improve skin firmness and overall texture.",
        "Thermage delivers controlled heat into deeper dermal layers to support collagen remodeling\u2014helping create a smoother, tighter-looking appearance without surgery.",
      ],
      whyTitle: "Why",
      whyBullets: [
        "Non-surgical skin tightening & contour support",
        "Helps improve firmness, texture, and elasticity",
        "Suitable for face, jawline, neck, and eye area",
        "Minimal downtime, customizable treatment settings",
      ],
      howWeUseTitle: "How We Use",
      howWeUseTitleAccent: "Thermage Technology",
      timelineItems: [
        {
          id: "thermage-900ct",
          title: "900CT",
          description:
            "Comprehensive Thermage treatment for the full face and neck to improve skin firmness, elasticity, and overall contour.",
        },
        {
          id: "thermage-600ct",
          title: "600CT",
          description:
            "Targeted Thermage treatment for localized areas to enhance firmness and definition.",
        },
        {
          id: "thermage-300ct",
          title: "300CT",
          description:
            "Focused treatment for small areas to refine skin texture and address mild skin laxity.",
        },
        {
          id: "thermage-450ct-eye",
          title: "450CT(Eye)",
          description:
            "Specialized Thermage treatment for the eye area to tighten delicate skin and smooth fine lines around the eyes.",
        },
      ],
    },
    {
      id: "sofwave",
      testId: "devices-tech-sofwave",
      title: "Sofwave\u2122 Technology",
      image: {
        src: "/images/devices/sofwave.png",
        alt: "Sofwave device",
      },
      descriptionParagraphs: [
        "We utilize a curated selection of medical-grade aesthetic technologies to support non-surgical skin rejuvenation, contour refinement, and overall skin quality improvement.",
        "Each device is selected based on clinical reliability, safety standards, and proven performance, allowing treatments to target deeper structural concerns while maintaining skin integrity.",
      ],
      whyTitle: "Why",
      whyBullets: [
        "Non-invasive ultrasound-based treatment",
        "Supports collagen regeneration and skin tightening",
        "Suitable for face and neck areas",
        "No needles, no surgery, minimal downtime",
      ],
      howWeUseTitle: "How We Use",
      howWeUseTitleAccent: "Sofwave Technology",
      timelineItems: [
        {
          id: "sofwave-face-neck",
          title: "Face+Neck",
          description:
            "Comprehensive RF treatment designed to tighten and firm both facial and neck skin while supporting long-term collagen renewal.",
        },
        {
          id: "sofwave-full-face",
          title: "Full Face",
          description:
            "A full-face monopolar RF treatment that improves overall skin firmness, elasticity, and facial contour definition.",
        },
        {
          id: "sofwave-one-party",
          title: "One Party",
          description:
            "Targeted RF treatment focused on a single facial area to address localized skin laxity and refine contours.",
        },
      ],
    },
  ],

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Devices consultation banner",
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
