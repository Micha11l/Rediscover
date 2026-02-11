/**
 * Body Contouring & Weight Loss Treatment Copy
 *
 * Centralized content module for Body Contouring & Weight Loss sections.
 */

import type { TestimonialItem } from "@/components/sections/service-detail";
import type { TextSegment, Paragraph } from "@/content/skinCareCopy";

export type BodyContouringTreatment = {
  id: string;
  testId: string;
  title: string;
  paragraphs: Paragraph[];
  whatItCanHelpWith: string[];
  recommendedFor: string;
  image: { src: string; alt: string; width: number; height: number };
};

export type BodyContouringCopy = {
  hero: {
    title: string;
    subtitle: string;
    breadcrumbLabel: string;
    image: { src: string; alt: string };
  };
  treatments: BodyContouringTreatment[];
  testimonials: TestimonialItem[];
  faq: {
    items: Array<{ id: string; question: string; answer: string }>;
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

export const bodyContouringCopy: BodyContouringCopy = {
  hero: {
    title: "Body Contouring & Weight Loss",
    subtitle:
      "Personalized skin care and wellness treatments designed to nourish, restore, and maintain healthy skin.",
    breadcrumbLabel: "Body Contouring & Weight Loss",
    image: {
      src: "/images/body/hero.png",
      alt: "Body contouring and weight loss treatment",
    },
  },

  treatments: [
    {
      id: "bodyfx",
      testId: "body-contouring-treatment-bodyfx",
      title: "BodyFX\u00AE",
      paragraphs: [
        {
          segments: [
            { text: "InMode BodyFX is a " },
            { text: "non-invasive body contouring treatment", bold: true },
            { text: " that combines " },
            {
              text: "radiofrequency (RF) energy and deep tissue heating",
              bold: true,
            },
            {
              text: " to reduce stubborn fat and improve skin firmness. It helps reshape the body while enhancing overall skin texture without surgery or downtime.",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "Stubborn fat deposits in areas like the abdomen, flanks, and thighs",
        "Skin laxity and loss of firmness after weight changes or aging",
        "Uneven body contours that are resistant to diet and exercise",
        "Cellulite and skin texture irregularities",
      ],
      recommendedFor:
        "Individuals looking for non-surgical body contouring to address localized fat and improve skin firmness, particularly in the abdomen, flanks, and thighs.",
      image: {
        src: "/images/body/bodyfx.png",
        alt: "BodyFX device",
        width: 274,
        height: 450,
      },
    },
    {
      id: "forma-body",
      testId: "body-contouring-treatment-forma-body",
      title: "Forma\u00AE Body",
      paragraphs: [
        {
          segments: [
            { text: "InMode Forma Body is " },
            {
              text: "a non-invasive skin tightening treatment",
              bold: true,
            },
            { text: " that uses " },
            { text: "radiofrequency (RF) energy", bold: true },
            {
              text: " to gently heat deep skin layers, stimulating collagen production to improve skin firmness, elasticity, and overall tone. It is designed to smooth and tighten the body without targeting fat, with no downtime.",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "Skin laxity and sagging on the body, including arms, abdomen, and thighs",
        "Loss of skin firmness due to aging, weight fluctuations, or post-pregnancy changes",
        "Crepey or thinning skin that lacks elasticity",
        "Uneven skin tone and texture on the body",
      ],
      recommendedFor:
        "Those seeking non-surgical skin tightening and firming without fat reduction, especially for areas with mild to moderate skin laxity.",
      image: {
        src: "/images/body/forma-body.png",
        alt: "Forma Body device",
        width: 265,
        height: 471,
      },
    },
    {
      id: "plus90",
      testId: "body-contouring-treatment-plus90",
      title: "Plus 90\u00AE",
      paragraphs: [
        {
          segments: [
            { text: "Plus 90 is a " },
            { text: "non-invasive body toning treatment", bold: true },
            {
              text: " that uses electrical muscle stimulation to activate targeted muscle groups. By inducing repeated muscle contractions, it helps improve muscle tone, firmness, and definition without surgery or downtime.",
            },
          ],
        },
      ],
      whatItCanHelpWith: [
        "Lack of muscle tone and definition in targeted areas",
        "Loss of firmness or muscle engagement due to a sedentary lifestyle or aging",
        "Body contour refinement alongside fat reduction or skin tightening treatments",
        "Difficulty activating or strengthening specific muscle groups through exercise alone",
      ],
      recommendedFor:
        "Individuals looking to enhance muscle tone and body definition through non-invasive stimulation, either as a standalone treatment or in combination with body contouring procedures.",
      image: {
        src: "/images/body/plus90.png",
        alt: "Plus 90 device",
        width: 530,
        height: 530,
      },
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
        "My skin looked brighter, smoother, and more even after just one session. What I appreciated most was how personalized the treatment felt \u2014 it wasn\u2019t one-size-fits-all. The team really understands skin.",
      name: "Sofia W.",
      role: "Photo Facial Client",
    },
    {
      id: "testimonial-3",
      quote:
        "This was my first time trying a medical aesthetic treatment, and I felt completely at ease. Everything was clearly explained, and the results looked natural and refreshed \u2014 exactly what I was hoping for.",
      name: "Jenna L.",
      role: "First-Time Client",
    },
  ],

  faq: {
    items: [
      {
        id: "faq-suitable",
        question: "Are these treatments suitable for everyone?",
        answer:
          "Most treatments are suitable for a wide range of individuals. However, suitability depends on skin condition, medical history, and personal goals. A professional consultation is required to determine the most appropriate treatment plan and ensure safety and optimal results.",
      },
      {
        id: "faq-prepare",
        question: "Do I need to prepare before my appointment?",
        answer:
          "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consulation.",
      },
      {
        id: "faq-downtime",
        question: "Is there any downtime after treatment?",
        answer:
          "Downtime varies depending on the treatment type. Many procedures have little to no downtime, allowing you to return to normal activities quickly. Mild redness, swelling, or sensitivity may occur after certain treatments and typically resolve within a short period.",
      },
    ],
  },

  cta: {
    titleParts: { primary: "Rediscover Beauty", accent: "Begins Here" },
    body: "Thoughtful aesthetic care, tailored to your skin and body.",
    buttonText: "Request a Consultation",
    image: {
      src: "/images/banner.png",
      alt: "Body contouring consultation banner",
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
