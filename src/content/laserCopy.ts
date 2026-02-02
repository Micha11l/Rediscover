/**
 * Laser & Light Therapy Treatment Copy
 *
 * Centralized content module for Laser & Light Therapy sections.
 */

export type LaserSectionId = "lumecca" | "pigmentation" | "hair-removal";

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type RecommendedItem = {
  id: string;
  text: string;
};

export type LayoutTweaks = {
  leftTopPx?: number;
  leftHeightPx?: number;
  rightTopPx?: number;
  rightHeightPx?: number;
  rightTranslateYPx?: number;
  rightWidthPx?: number;
  rightScale?: number;
  rightShiftPx?: number;
};

export type LaserCopy = {
  hero: {
    title: string;
    subtitle: string;
    processItems: Array<{ id: LaserSectionId; label: string; href: string }>;
    image: { src: string; alt: string };
  };
  lumecca: {
    about: {
      title: string;
      subtitle: string;
      paragraphs: Paragraph[];
    };
    recommended: {
      items: RecommendedItem[];
    };
    processText: string;
    benefits: string[];
    helpsWith: string[];
    beforeAfter: {
      beforeSrc: string;
      afterSrc: string;
      beforeAlt: string;
      afterAlt: string;
    };
    images: {
      left: { src: string; alt: string };
      right: { src: string; alt: string };
    };
    layoutTweaks?: LayoutTweaks;
  };
  pigmentation: {
    about: {
      title: string;
      subtitle: string;
      paragraphs: Paragraph[];
    };
    recommended: {
      items: RecommendedItem[];
    };
    processText: string;
    benefits: string[];
    helpsWith: string[];
    beforeAfter: {
      beforeSrc: string;
      afterSrc: string;
      beforeAlt: string;
      afterAlt: string;
    };
    images: {
      left: { src: string; alt: string };
      right: { src: string; alt: string };
    };
    layoutTweaks?: LayoutTweaks;
  };
  hairRemoval: {
    title: string;
    description: string;
    rows: Array<{ label: string; price: string }>;
  };
  faq: {
    items: Array<{ id: string; question: string; answer: string }>;
  };
  cta: {
    title: string;
    titleParts: { primary: string; accent: string };
    body: string;
    buttonText: string;
    image: { src: string; alt: string };
  };
  carePromise: {
    title: string;
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

export const laserCopy: LaserCopy = {
  hero: {
    title: "Laser & Light Therapy",
    subtitle:
      "Targeted laser and light-based treatments to brighten skin, improve tone, and address common pigmentation and hair concerns.",
    processItems: [
      { id: "lumecca", label: "Lumecca Photo Facial", href: "#lumecca" },
      { id: "pigmentation", label: "Pigmentation Removal", href: "#pigmentation" },
      { id: "hair-removal", label: "Hair Removal", href: "#hair-removal" },
    ],
    image: {
      src: "/images/laser/laser-hero.png",
      alt: "Laser and light therapy treatment imagery",
    },
  },
  lumecca: {
    about: {
      title: "Lumecca® Photo Facial",
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Lumecca® Photo Facial is " },
            { text: "an advanced Intense Pulsed Light (IPL) treatment", bold: true },
            { text: " that targets uneven tone, discoloration, and sun damage." },
          ],
        },
        {
          segments: [
            { text: "By delivering " },
            { text: "optimized high-energy pulses", bold: true },
            { text: ", it helps reveal a clearer, brighter-looking complexion." },
          ],
        },
      ],
    },
    recommended: {
      items: [
        { id: "lumecca-rec-1", text: "Those who want to improve pigmentation and sun damage" },
        { id: "lumecca-rec-2", text: "Those experiencing redness, rosacea, or broken capillaries" },
        { id: "lumecca-rec-3", text: "Those seeking brighter, clearer skin with minimal downtime" },
        { id: "lumecca-rec-4", text: "Those looking for fast, visible results with non-invasive treatment" },
      ],
    },
    processText: "Relaxation Back Massage (10 mins) ---> Cleansing ---> Peeling ---> Steaming ---> Extraction ---> Eyebrow Shaping ---> Face Massage (15 mins) ---> IPL Machine (Neck + Face + Eye Area) (20 mins)  ---> Double Masks ---> Shoulder, Head & Hand Massage (Included)",
    benefits: [
      "Improves pigmentation, sun spots, and uneven skin tone",
      "Reduces redness and vascular concerns",
      "Enhances overall skin clarity and radiance",
      "Non-invasive treatment with minimal downtime",
      "Suitable for face and select body areas",
    ],
    helpsWith: [
      "Sun spots and age spots",
      "Redness and rosacea",
      "Broken capillaries",
      "Uneven skin tone",
      "Dull or tired-looking skin",
    ],
    beforeAfter: {
      beforeSrc: "/images/laser/lumecca-before.png",
      afterSrc: "/images/laser/lumecca-after.png",
      beforeAlt: "Before Lumecca treatment",
      afterAlt: "After Lumecca treatment",
    },
    images: {
      left: {
        src: "/images/laser/lumecca-left.png",
        alt: "Lumecca device front view",
      },
      right: {
        src: "/images/laser/lumecca-right.png",
        alt: "Lumecca device angled view",
      },
    },
    layoutTweaks: {
      rightWidthPx: 500,
      rightHeightPx: 500,
      rightTopPx: 100,
      rightTranslateYPx: 60,
      rightScale: 0.85,
      rightShiftPx: 80,
    },
  },
  pigmentation: {
    about: {
      title: "Pigmentation Removal",
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Pigmentation Removal uses " },
            { text: "Lumecca® IPL (Intense Pulsed Light) technology", bold: true },
            { text: " to target stubborn discoloration and uneven skin tone." },
          ],
        },
        {
          segments: [
            { text: "The treatment delivers " },
            { text: "high-intensity light energy", bold: true },
            { text: " to break down excess pigment for a more even complexion." },
          ],
        },
      ],
    },
    recommended: {
      items: [
        { id: "pigmentation-rec-1", text: "Those who want to reduce sun spots, age spots, and freckles caused by UV damage" },
        { id: "pigmentation-rec-2", text: "Those who want to reduce sun spots, age spots, and freckles caused by UV damage" },
        { id: "pigmentation-rec-3", text: "Those who want brighter, clearer-looking skin with minimal downtime" },
        { id: "pigmentation-rec-4", text: "Those who are seeking a non-invasive solution for pigmentation correction" },
      ],
    },
    processText: "",
    benefits: [
      "Targets sun spots, age spots, and freckles",
      "Improves uneven skin tone and discoloration",
      "Fewer sessions compared to traditional IPL",
      "Non-invasive with minimal downtime",
      "Suitable for face and selected body areas",
    ],
    helpsWith: [
      "Sun damage and UV-related pigmentation",
      "Age spots and freckles",
      "Uneven skin tone",
      "Dull or blotchy complexion",
    ],
    beforeAfter: {
      beforeSrc: "/images/laser/pigmentation-before.png",
      afterSrc: "/images/laser/pigmentation-after.png",
      beforeAlt: "Before pigmentation removal treatment",
      afterAlt: "After pigmentation removal treatment",
    },
    images: {
      left: {
        src: "/images/laser/pigmentation-left.png",
        alt: "Pigmentation removal device front view",
      },
      right: {
        src: "/images/laser/pigmentation-right.png",
        alt: "Pigmentation removal device angled view",
      },
    },
    layoutTweaks: {
      rightWidthPx: 500,
      rightHeightPx: 500,
      rightTopPx: 100,
      rightTranslateYPx: 60,
      rightScale: 0.85,
      rightShiftPx: 80,
    },
  },
  hairRemoval: {
    title: "Laser Hair Removal",
    description: "A light-based treatment designed to reduce unwanted hair by targeting hair follicles, helping achieve smoother skin with long-term results.\n\nAll prices are based on six treatment sessions for optimal results.",
    rows: [
      { label: "Upper Lip", price: "$190" },
      { label: "Jaw Line", price: "$290" },
      { label: "Forehead", price: "$290" },
      { label: "Full Face", price: "$590" },
      { label: "Underarms", price: "$390" },
      { label: "Forearms", price: "$390" },
      { label: "Fullarms", price: "$590" },
      { label: "Bikini", price: "$390" },
      { label: "Brazilian", price: "$590" },
      { label: "Lower Legs", price: "$690" },
      { label: "Thighs", price: "$790" },
      { label: "Full Legs", price: "$1280" },
      { label: "Full Back", price: "$980" },
    ],
  },
  faq: {
    items: [
      { id: "faq-suitable", question: "TODO_FAQ_COPY", answer: "TODO_FAQ_COPY" },
      { id: "faq-prepare", question: "TODO_FAQ_COPY", answer: "TODO_FAQ_COPY" },
      { id: "faq-downtime", question: "TODO_FAQ_COPY", answer: "TODO_FAQ_COPY" },
    ],
  },
  cta: {
    title: "Rediscover Beauty Begins Here",
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Laser and light therapy consultation banner",
    },
  },
  carePromise: {
    title: "Our Care Promise",
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care — guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};
