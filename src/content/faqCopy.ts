export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCopy = {
  hero: {
    title: string;
    subtitle: string;
  };
  items: FaqItem[];
  carePromise: {
    titleParts: { primary: string; accent: string };
    body: string;
    image: { src: string; alt: string };
  };
};

export const faqCopy: FaqCopy = {
  hero: {
    title: "Frequently Asked Questions",
    subtitle:
      "Clear answers for a comfortable and confident experience",
  },

  items: [
    {
      id: "faq-first-visit",
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit will begin with a professional consultation and assessment of your skin, facial structure, and aesthetic goals. This allows us to recommend the most suitable treatments and answer any questions you may have before starting.",
    },
    {
      id: "faq-prices",
      question: "Are your prices listed online final?",
      answer:
        "All prices displayed on our website are before tax and subject to applicable federal and provincial tax. Final charges are confirmed at the time of service and may vary based on treatment plans and professional assessment.",
    },
    {
      id: "faq-booking",
      question: "How do I book, reschedule, or cancel an appointment?",
      answer:
        "Appointments can be made by phone, messaging, email, or in person.\nPlease notify us at least 24 hours before your scheduled time if you need to reschedule or cancel. Late cancellations and no-shows may result in a fee.",
    },
    {
      id: "faq-payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept:\n• Cash\n• Debit\n• Credit Cards (Visa, Mastercard)\n• E-transfer\n\nFull payment is required at the time of service unless other arrangements have been made.",
    },
    {
      id: "faq-downtime",
      question: "Do your treatments require downtime?",
      answer:
        "Most of our treatments are non-invasive and have minimal to no downtime. Some advanced procedures may require temporary recovery or specific aftercare, which will be explained during consultation.",
    },
    {
      id: "faq-technicians",
      question: "Are your technicians medically trained?",
      answer:
        "All treatments are performed by trained, experienced professionals. For advanced or injectable procedures, consultations are conducted to ensure safety, suitability, and personalized treatment planning.",
    },
    {
      id: "faq-combine",
      question: "Can I combine multiple treatments?",
      answer:
        "Yes \u2014 many of our treatments can be combined based on your goals and professional assessment. Your provider will recommend appropriate combinations or treatment sequences tailored to you.",
    },
    {
      id: "faq-results",
      question: "When will I see results?",
      answer:
        "Treatment results vary depending on the type of service, individual skin condition, and treatment plan. Some improvements may be noticeable immediately, while others develop gradually over time.",
    },
    {
      id: "faq-minors",
      question: "Do you accept minors as clients?",
      answer:
        "Clients under the age of 18 must be accompanied by a parent or legal guardian and have documented consent to receive any services.",
    },
    {
      id: "faq-medical",
      question: "What if I have special medical conditions?",
      answer:
        "Please disclose any medical conditions, medications, or allergies during your consultation. Certain conditions may affect treatment recommendations, and your safety is our priority.",
    },
    {
      id: "faq-packages",
      question: "Do you offer packages or promotions?",
      answer:
        "Yes, we periodically provide packages and promotions for select treatments. These offers are subject to change and may have specific terms, which will be explained when booking.",
    },
    {
      id: "faq-unsure",
      question: "What if I\u2019m unsure which treatment I need?",
      answer:
        "We recommend booking a consultation so that we can assess your concerns and guide you through your options. Our goal is to recommend what is safest and most effective for you.",
    },
  ],

  carePromise: {
    titleParts: { primary: "Our Care", accent: "Promise" },
    body: "We believe in thoughtful, personalized care \u2014 guided by expertise, transparency, and respect for your natural beauty.\n\nAll treatments are delivered by trained and certified professionals.",
    image: {
      src: "/images/newsletter.png",
      alt: "Care promise banner",
    },
  },
};
