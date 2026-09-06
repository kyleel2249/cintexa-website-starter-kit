import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cx: {
          deep: "var(--cx-bg-deep)",
          dark: "var(--cx-bg-dark)",
          mid: "var(--cx-bg-mid)",
          light: "var(--cx-bg-light)",
          surface: "var(--cx-surface)",
          border: "var(--cx-border)",
          "border-glow": "var(--cx-border-glow)",
          primary: {
            DEFAULT: "var(--cx-primary)",
            light: "var(--cx-primary-light)",
            dark: "var(--cx-primary-dark)",
            glow: "var(--cx-primary-glow)",
          },
          accent: {
            DEFAULT: "var(--cx-accent)",
            light: "var(--cx-accent-light)",
            glow: "var(--cx-accent-glow)",
          },
          secondary: {
            DEFAULT: "var(--cx-secondary)",
            glow: "var(--cx-secondary-glow)",
          },
          text: {
            primary: "var(--cx-text-primary)",
            secondary: "var(--cx-text-secondary)",
            muted: "var(--cx-text-muted)",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.15)",
        "glow-lg": "0 0 60px rgba(59, 130, 246, 0.2)",
        "glow-accent": "0 0 40px rgba(6, 182, 212, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        glass: "20px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 35s linear infinite reverse",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "data-flow": "dataFlow 3s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ripple": "ripple 2s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { 
            boxShadow: "0 0 60px rgba(59, 130, 246, 0.3), 0 0 120px rgba(59, 130, 246, 0.1)" 
          },
          "50%": { 
            boxShadow: "0 0 80px rgba(59, 130, 246, 0.4), 0 0 160px rgba(59, 130, 246, 0.15)" 
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.02)" },
        },
        dataFlow: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "0.6" },
          "100%": { opacity: "0.2" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      perspective: {
        "near": "600px",
        "normal": "1200px",
        "far": "2000px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

export default config;
