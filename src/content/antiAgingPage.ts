export type ImageRef = { src: string; alt: string };

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type Benefit = {
  title: string;
  text: string;
};

export type RecommendedItem = {
  id: string;
  text: string;
};

export type BeforeAfterImage = ImageRef & { id: string };

export type TreatmentId = "sofwave" | "thermage" | "morpheus8" | "forma";

export type TreatmentBlock = {
  id: TreatmentId;
  title: string;
  about: {
    subtitle: string;
    paragraphs: Paragraph[];
    leftImage: ImageRef;
    rightImage: ImageRef;
  };
  recommendedFor: RecommendedItem[];
  faqBlock: {
    benefits: Benefit[];
    helpsWith: string[];
  };
  beforeAfter: BeforeAfterImage[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type AntiAgingPageContent = {
  hero: {
    title: string;
    description: string;
    image: ImageRef;
    navItems: Array<{ id: TreatmentId; label: string; href: string }>;
  };
  treatments: TreatmentBlock[];
  testimonials: Testimonial[];
  faq: FaqItem[];
};

export const antiAgingContent: AntiAgingPageContent = {
  hero: {
    title: "Anti-Aging",
    description:
      "Advanced technologies designed to lift, tighten, and support skin at a deeper structural level.",
    image: {
      src: "/images/anti-aging/hero.png",
      alt: "Anti-aging facial treatment visualization showing skin lifting and tightening effects",
    },
    navItems: [
      { id: "sofwave", label: "Sofwave", href: "#sofwave" },
      { id: "thermage", label: "Thermage FLX", href: "#thermage" },
      { id: "morpheus8", label: "Morpheus8", href: "#morpheus8" },
      { id: "forma", label: "Forma", href: "#forma" },
    ],
  },

  treatments: [
    {
      id: "sofwave",
      title: "Sofwave",
      about: {
        subtitle:
          "Non-invasive ultrasound technology for skin tightening and natural lifting.",
        paragraphs: [
          {
            segments: [
              {
                text: "Sofwave is a non-invasive aesthetic treatment that uses advanced ",
              },
              {
                text: "SUPERB (Synchronous Ultrasound Parallel Beam)",
                bold: true,
              },
              {
                text: " technology to improve skin firmness, reduce fine lines, and restore a naturally lifted appearance.",
              },
            ],
          },
          {
            text: "By delivering controlled ultrasound energy into the mid-dermis, Sofwave stimulates the body's natural production of collagen and elastin—resulting in gradual, natural-looking rejuvenation with minimal downtime.",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/about-left.png",
          alt: "Sofwave device front view",
        },
        rightImage: {
          src: "/images/anti-aging/about-right.png",
          alt: "Sofwave device angled view",
        },
      },
      recommendedFor: [
        {
          id: "sofwave-1",
          text: "Those who want lifting improvement without worrying about cheek hollowing or depression",
        },
        {
          id: "sofwave-2",
          text: "Those who want direct targeted care of the dermal layer, the source of wrinkles",
        },
        {
          id: "sofwave-3",
          text: "Those in their 30s to 50s and beyond who want age-appropriate collagen regeneration lifting",
        },
        {
          id: "sofwave-4",
          text: "Those who need care for smile lines, eye wrinkles, nasolabial folds, and marionette lines",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "Non-Invasive Treatment",
            text: "No needles, no surgery, and no incisions required.",
          },
          {
            title: "Skin Tightening & Lifting",
            text: "Helps improve mild to moderate skin laxity and soft tissue sagging.",
          },
          {
            title: "Versatile Treatment Areas",
            text: "Effective for facial fine lines, wrinkles, brow lifting, neck tightening, and submental (under-chin) areas.",
          },
          {
            title: "Safe for All Skin Types",
            text: "Clinically proven to be safe and effective across all skin tones.",
          },
          {
            title: "Minimal Downtime",
            text: "Most patients return to daily activities immediately after treatment.",
          },
        ],
        helpsWith: [
          "Skin laxity and loss of firmness",
          "Fine lines and wrinkles",
          "Mild sagging in the lower face and jawline",
          "Brow drooping",
          "Neck and submental skin laxity",
          "Early signs of aging",
        ],
      },
      beforeAfter: [
        {
          id: "sofwave-ba-1",
          src: "/images/anti-aging/sofwave-before-after-1.png",
          alt: "Sofwave treatment results showing neck and jawline improvement - before and after comparison",
        },
        {
          id: "sofwave-ba-2",
          src: "/images/anti-aging/sofwave-before-after-2.png",
          alt: "Sofwave treatment results showing facial skin tightening - before and after comparison",
        },
      ],
    },

    {
      id: "thermage",
      title: "Thermage FLX",
      about: {
        subtitle:
          "Radiofrequency technology for deep collagen remodeling and skin tightening.",
        paragraphs: [
          {
            segments: [
              { text: "Thermage FLX uses " },
              { text: "patented radiofrequency (RF) technology", bold: true },
              {
                text: " to heat the deeper layers of skin, stimulating collagen production and creating a tightening effect that continues to improve over time.",
              },
            ],
          },
          {
            text: "With its unique comfort pulse technology and optimized treatment algorithms, Thermage FLX delivers consistent results with improved patient comfort—ideal for treating the face, eyes, and body.",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/thermage-device-left.png",
          alt: "Thermage FLX device - front view",
        },
        rightImage: {
          src: "/images/anti-aging/thermage-device-right.png",
          alt: "Thermage FLX device - treatment handpiece",
        },
      },
      recommendedFor: [
        {
          id: "thermage-1",
          text: "Those with thin, weak skin who have postponed lifting treatment",
        },
        {
          id: "thermage-2",
          text: "Those concerned about fine lines and enlarged pores",
        },
        {
          id: "thermage-3",
          text: "Those who want elasticity care for rough skin texture",
        },
        {
          id: "thermage-4",
          text: "Those who want subtle anti-aging and overall facial elasticity improvement",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "Latest-Generation Technology",
            text: "Thermage FLX represents the most advanced evolution of Thermage, offering improved comfort and precision.",
          },
          {
            title: "Eye-Area Safe & Proven",
            text: "Globally recognized as the only non-invasive skin tightening treatment approved for delicate eye areas.",
          },
          {
            title: "Non-Invasive Treatment",
            text: "No needles, no injections, and no skin breakage required.",
          },
          {
            title: "Skin Tightening & Firming",
            text: "Stimulates collagen boosting and regeneration to improve laxity and contour.",
          },
          {
            title: "Minimal Downtime",
            text: "Most patients return to daily activities immediately after treatment.",
          },
        ],
        helpsWith: [
          "Skin laxity and loss of firmness",
          "Fine lines and wrinkles",
          "Eye-area skin looseness and crepiness",
          "Jawline and lower face sagging",
          "Neck skin laxity",
          "Early signs of aging",
        ],
      },
      beforeAfter: [
        {
          id: "thermage-ba-1",
          src: "/images/anti-aging/thermage-before-after-1.jpg",
          alt: "Thermage FLX treatment results - before and after comparison",
        },
        {
          id: "thermage-ba-2",
          src: "/images/anti-aging/thermage-before-after-2.jpg",
          alt: "Thermage FLX treatment results - before and after comparison",
        },
      ],
    },

    {
      id: "morpheus8",
      title: "Morpheus8",
      about: {
        subtitle:
          "Fractional radiofrequency microneedling for deep skin rejuvenation.",
        paragraphs: [
          {
            segments: [
              { text: "Morpheus8 combines " },
              {
                text: "microneedling with fractional radiofrequency (RF)",
                bold: true,
              },
              {
                text: " energy to penetrate deep into the skin and fat, triggering the body's natural healing response and collagen production.",
              },
            ],
          },
          {
            text: "This versatile treatment addresses fine lines, wrinkles, acne scars, and skin laxity on both the face and body—delivering dramatic results with minimal downtime.",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/morpheus8-device-left.png",
          alt: "Morpheus8 device - control unit",
        },
        rightImage: {
          src: "/images/anti-aging/morpheus8-device-right.png",
          alt: "Morpheus8 device - treatment handpiece with microneedles",
        },
      },
      recommendedFor: [
        {
          id: "morpheus8-1",
          text: "Those seeking deep skin remodeling for acne scars and uneven texture",
        },
        {
          id: "morpheus8-2",
          text: "Those who want to address both skin laxity and fat reduction in one treatment",
        },
        {
          id: "morpheus8-3",
          text: "Those looking for dramatic improvement in fine lines and deeper wrinkles",
        },
        {
          id: "morpheus8-4",
          text: "Those who prefer a minimally invasive alternative to surgical procedures",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "Minimally Invasive Treatment",
            text: "Controlled skin penetration allows for deeper and more effective remodeling than non-invasive options.",
          },
          {
            title: "Comprehensive Skin Renewal",
            text: "Improves texture, tone, firmness, and overall skin quality.",
          },
          {
            title: "Customizable & Versatile",
            text: "Suitable for different skin types and treatment goals on the face and body.",
          },
          {
            title: "Long-Lasting Results",
            text: "Gradual improvement continues as collagen regenerates over several weeks.",
          },
        ],
        helpsWith: [
          "Skin laxity and loss of firmness",
          "Fine lines and wrinkles",
          "Acne scars and uneven skin texture",
          "Enlarged pores",
          "Uneven skin tone",
          "Mild to moderate sagging in facial and body areas",
          "Overall skin quality and structure improvement",
        ],
      },
      beforeAfter: [
        {
          id: "morpheus8-ba-1",
          src: "/images/anti-aging/morpheus8-before-after-1.png",
          alt: "Morpheus8 treatment results showing skin texture improvement - before and after comparison",
        },
        {
          id: "morpheus8-ba-2",
          src: "/images/anti-aging/morpheus8-before-after-2.png",
          alt: "Morpheus8 treatment results showing acne scar reduction - before and after comparison",
        },
      ],
    },

    {
      id: "forma",
      title: "Forma",
      about: {
        subtitle:
          "Non-invasive radiofrequency for gentle skin tightening and contouring.",
        paragraphs: [
          {
            segments: [
              { text: "Forma uses " },
              { text: "bipolar radiofrequency technology", bold: true },
              {
                text: " to deliver gentle, uniform heating to the skin's deeper layers, stimulating collagen formation and improving skin elasticity.",
              },
            ],
          },
          {
            text: "With real-time temperature monitoring, Forma ensures safe and comfortable treatments while delivering noticeable improvements in skin firmness and texture—perfect for maintaining youthful skin.",
          },
        ],
        leftImage: {
          src: "/images/anti-aging/forma-device-left.png",
          alt: "Forma device - treatment system",
        },
        rightImage: {
          src: "/images/anti-aging/forma-device-right.png",
          alt: "Forma device - handpiece in use",
        },
      },
      recommendedFor: [
        {
          id: "forma-1",
          text: "Those seeking gentle, comfortable skin tightening with no downtime",
        },
        {
          id: "forma-2",
          text: "Those who want to maintain and enhance previous treatment results",
        },
        {
          id: "forma-3",
          text: "Those in their 30s and 40s looking for preventative anti-aging care",
        },
        {
          id: "forma-4",
          text: "Those who prefer gradual, natural-looking improvement over time",
        },
      ],
      faqBlock: {
        benefits: [
          {
            title: "Non-Invasive Treatment",
            text: "No needles, no incisions, and no recovery time required.",
          },
          {
            title: "Comfortable & Relaxing",
            text: "Warm, soothing sensation throughout the session.",
          },
          {
            title: "Targeted Treatment Areas",
            text: "Ideal for localized facial zones such as cheeks, jawline, and lower face.",
          },
          {
            title: "Safe for All Skin Types",
            text: "Suitable for a wide range of skin tones and conditions.",
          },
          {
            title: "Gradual, Natural Improvement",
            text: "Skin appears firmer, smoother, and more refined over time.",
          },
        ],
        helpsWith: [
          "Mild to moderate skin laxity",
          "Loss of firmness and elasticity",
          "Early aging concerns",
          "Dull or tired-looking skin",
          "Localized facial contour refinement",
        ],
      },
      beforeAfter: [
        {
          id: "forma-ba-1",
          src: "/images/anti-aging/forma-before-after-1.png",
          alt: "Forma treatment results showing skin tightening - before and after comparison",
        },
        {
          id: "forma-ba-2",
          src: "/images/anti-aging/forma-before-after-2.png",
          alt: "Forma treatment results showing improved skin elasticity - before and after comparison",
        },
      ],
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "I noticed a visible lift and firmness after my treatment, especially around my jawline and lower face. The consultation was thorough and professional, and everything felt very precise and safe. I love that the results continued to improve over the following weeks.",
      name: "Emily R.",
      role: "Thermage Client",
    },
    {
      id: "testimonial-2",
      quote:
        "My skin looked brighter, smoother, and more even after just one session. What I appreciated most was how personalized the treatment felt — it wasn't one-size-fits-all. The team really understands skin.",
      name: "Sofia W.",
      role: "Photo Facial Client",
    },
    {
      id: "testimonial-3",
      quote:
        "This was my first time trying a medical aesthetic treatment, and I felt completely at ease. Everything was clearly explained, and the results looked natural and refreshed — exactly what I was hoping for.",
      name: "Jenna L.",
      role: "First-Time Client",
    },
  ],

  faq: [
    {
      id: "faq-suitable",
      question: "Are these treatments suitable for everyone?",
      answer:
        "Most of our treatments are suitable for a wide range of clients. However, certain conditions or medications may require special consideration. During your consultation, our specialists will review your medical history and recommend the most appropriate options for you.",
    },
    {
      id: "faq-prepare",
      question: "Do I need to prepare before my appointment?",
      answer:
        "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consultation.",
    },
    {
      id: "faq-downtime",
      question: "Is there any downtime after treatment?",
      answer:
        "Most of our non-invasive treatments have minimal to no downtime. You may experience temporary redness or mild swelling, but these typically resolve within hours to a few days depending on the treatment.",
    },
  ],
};

export const TREATMENT_ORDER: TreatmentId[] = [
  "sofwave",
  "thermage",
  "morpheus8",
  "forma",
];
