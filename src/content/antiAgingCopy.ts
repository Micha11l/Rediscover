/**
 * Anti-Aging Treatment Copy
 *
 * Centralized content module for all anti-aging treatment sections.
 * Keyed by treatment id: sofwave | thermage | morpheus8 | forma
 */

export type TreatmentId = "sofwave" | "thermage" | "morpheus8" | "forma";

export type TextSegment = { text: string; bold?: boolean };

export type Paragraph = {
  text?: string;
  segments?: TextSegment[];
};

export type RecommendedItem = {
  id: string;
  text: string;
};

export type FaqBenefit = {
  title: string;
  text: string;
};

export interface TreatmentCopy {
  about: {
    subtitle: string;
    paragraphs: Paragraph[];
  };
  recommended: {
    items: RecommendedItem[];
  };
  faq: {
    title: string;
    benefits: FaqBenefit[];
    helpsWith: string[];
  };
}

export const antiAgingCopy: Record<TreatmentId, TreatmentCopy> = {
  sofwave: {
    about: {
      subtitle:
        "Non-invasive ultrasound technology for skin tightening and natural lifting.",
      paragraphs: [
        {
          segments: [
            {
              text: "Sofwave® is a non-invasive aesthetic treatment that uses advanced ",
            },
            {
              text: "SUPERB™ (Synchronous Ultrasound Parallel Beam)",
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
    },
    recommended: {
      items: [
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
    },
    faq: {
      title: "Sofwave",
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
  },

  thermage: {
    about: {
      subtitle: "", // hasStandaloneSubtitle: false
      paragraphs: [
        {
          segments: [
            {
              text: "Thermage® FLX is the fourth and latest generation of Thermage non-invasive radiofrequenncy (RF) skin tightening technology.",
              bold: true,
            },
            {
              text: " Released by Solta Medical, it is designed to smooth, firm, and contour skin on the face, eyes, and body without surgery, needles, or downtime.",
            },
          ],
        },
        {
          segments: [
            {
              text: "Globally recognized and clinically established, Thermage FLX is ",
            },
            {
              text: "the only non-invasive skin tightening technology approved for use around the eyes",
              bold: true,
            },
            {
              text: ", making it a trusted choice for delicate areas as well as full-face and neck treatments.",
            },
          ],
        },
        {
          text: "By evenly heating the deeper dermal layers, Thermage FLX stimulates collagen remodeling while tightening existing collagen fibers—resulting in smoother, firmer, and naturally lifted-looking skin with minimal downtime.",
        },
      ],
    },
    recommended: {
      items: [
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
    },
    faq: {
      title: "Thermage FLX",
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
  },

  morpheus8: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            { text: "Morpheus8® is a minimally invasive treatment that " },
            {
              text: "combines microneedling with radiofrequency (RF) energy to target the deeper layers of the skin",
              bold: true,
            },
            {
              text: ". By creating controlled micro-injuries and delivering RF heat beneath the surface, it stimulates collagen and elastin production to improve skin firmness, texture, and overall quality.",
            },
          ],
        },
        {
          segments: [
            { text: "Unlike non-invasive treatments, Morpheus8 " },
            {
              text: "penetrates through the skin barrier",
              bold: true,
            },
            {
              text: ", allowing for deeper remodeling of both skin and underlying tissue. This makes it especially effective for concerns such as skin laxity, enlarged pores, acne scars, and uneven texture.",
            },
          ],
        },
        {
          segments: [
            { text: "Morpheus8 is " },
            {
              text: "fully customizable in depth and intensity",
              bold: true,
            },
            {
              text: ", making it suitable for a wide range of skin types and treatment goals while maintaining a balance between effectiveness and recovery time.",
            },
          ],
        },
      ],
    },
    recommended: {
      items: [
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
    },
    faq: {
      title: "Morpheus8",
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
  },

  forma: {
    about: {
      subtitle: "",
      paragraphs: [
        {
          segments: [
            {
              text: "Forma lifting is a non-invasive cosmetic treatment that uses radiofrequency (RF) energy ",
              bold: true,
            },
            {
              text: "to heat deep skin layers, stimulating new collagen production to tighten, lift, and firm sagging skin on the face, neck, and body, reducing wrinkles and improving texture with minimal downtime.",
            },
          ],
        },
        {
          text: "Unlike invasive procedures or injectable treatments, Forma delivers consistent, comfortable warmth without needles or downtime. Treatments are often described as a \"lunchtime facial,\" as sessions are quick and allow clients to return to daily activities immediately.",
        },
        {
          text: "Forma® is ideal for clients seeking subtle yet effective skin tightening and maintenance, whether as a standalone treatment or as part of a personalized aesthetic program.",
        },
      ],
    },
    recommended: {
      items: [
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
    },
    faq: {
      title: "Forma",
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
  },
};
