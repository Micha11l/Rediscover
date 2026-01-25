import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        /* Brand colors */
        brand: {
          primary: "var(--color-brand-primary)",
          "primary-muted": "var(--color-brand-primary-muted)",
          secondary: "var(--color-brand-secondary)",
          "secondary-light": "var(--color-brand-secondary-light)",
        },

        /* Surface colors (backgrounds) */
        surface: {
          base: "var(--color-surface-base)",
          elevated: "var(--color-surface-elevated)",
          muted: "var(--color-surface-muted)",
          accent: "var(--color-surface-accent)",
        },

        /* Text colors */
        text: {
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
          inverse: "var(--color-text-inverse)",
        },

        /* Border colors */
        border: {
          DEFAULT: "var(--color-border-default)",
          muted: "var(--color-border-muted)",
        },

        /* Interactive colors */
        interactive: {
          primary: "var(--color-interactive-primary)",
          hover: "var(--color-interactive-hover)",
        },

        /* Utility */
        white: "var(--color-white)",
        overlay: "var(--color-overlay)",

        /* Legacy aliases (backward compatibility) */
        bg: "var(--color-bg)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-soft": "var(--color-accent-soft)",
        primary: "var(--color-primary)",
        "primary-20": "var(--color-primary-20)",
        secondary: "var(--color-secondary)",
      },

      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        /* Legacy aliases */
        sans: ["var(--font-heading)"],
        display: ["var(--font-heading)"],
      },

      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      fontSize: {
        /* Display */
        display: [
          "var(--text-display-size)",
          {
            lineHeight: "var(--text-display-line)",
            fontWeight: "var(--text-display-weight)",
          },
        ],

        /* Headings */
        "heading-xl": [
          "var(--text-heading-xl-size)",
          {
            lineHeight: "var(--text-heading-xl-line)",
            fontWeight: "var(--text-heading-xl-weight)",
          },
        ],
        "heading-lg": [
          "var(--text-heading-lg-size)",
          {
            lineHeight: "var(--text-heading-lg-line)",
            fontWeight: "var(--text-heading-lg-weight)",
          },
        ],
        "heading-md": [
          "var(--text-heading-md-size)",
          {
            lineHeight: "var(--text-heading-md-line)",
            fontWeight: "var(--text-heading-md-weight)",
          },
        ],
        "heading-sm": [
          "var(--text-heading-sm-size)",
          {
            lineHeight: "var(--text-heading-sm-line)",
            fontWeight: "var(--text-heading-sm-weight)",
          },
        ],

        /* Body */
        "body-lg": [
          "var(--text-body-lg-size)",
          {
            lineHeight: "var(--text-body-lg-line)",
            fontWeight: "var(--text-body-lg-weight)",
          },
        ],
        body: [
          "var(--text-body-size)",
          {
            lineHeight: "var(--text-body-line)",
            fontWeight: "var(--text-body-weight)",
          },
        ],

        /* Button */
        button: [
          "var(--text-button-size)",
          {
            lineHeight: "var(--text-button-line)",
            fontWeight: "var(--text-button-weight)",
          },
        ],

        /* Caption */
        caption: [
          "var(--text-caption-size)",
          {
            lineHeight: "var(--text-caption-line)",
            fontWeight: "var(--text-caption-weight)",
          },
        ],
      },

      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        base: "var(--shadow-base)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      spacing: {
        /* Named spacing tokens */
        0: "var(--space-0)",
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        14: "var(--space-14)",
        16: "var(--space-16)",
        18: "var(--space-18)",
        20: "var(--space-20)",
        22: "var(--space-22)",
        24: "var(--space-24)",
        25: "var(--space-25)",

        /* Layout tokens */
        "container-pad": "var(--container-padding)",
        "section-x": "var(--section-padding-x)",
        "section-y": "var(--section-padding-y)",
        "section-y-lg": "var(--section-padding-y-lg)",
      },

      maxWidth: {
        container: "var(--container-max)",
      },

      gap: {
        xs: "var(--gap-xs)",
        sm: "var(--gap-sm)",
        md: "var(--gap-md)",
        lg: "var(--gap-lg)",
        xl: "var(--gap-xl)",
      },

      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
