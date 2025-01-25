import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        spinner: "spinner 1s linear infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite"
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" }
        },
        spinner: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0.7" },
          "20%": { opacity: "0.3" },
          "35%": { opacity: "0.2" },
          "50%": { opacity: "0.1" },
          "75%": { opacity: "0.05" },
          "100%": { opacity: "0" }
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        textBolder: "var(--text-bolder)",
        textBold: "var(--text-bold)",
        textMedium: "var(--text-medium)",
        textForeground: "var(--text-foreground)",
        textLight: "var(--text-light)",
        textLighter: "var(--text-lighter)",
        border: "var(--border)",
        borderPrimary: "var(--border-primary)",
        inputBackground: "var(--input-background)",
        danger: "var(--danger)",
        success: "var(--success)"
      },
      borderRadius: {
        sm: "var(--rounded-sm)",
        md: "var(--rounded-md)",
        lg: "var(--rounded-lg)"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true })
  ]
} satisfies Config;
