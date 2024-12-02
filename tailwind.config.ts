import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      borderRadius: {
        sm: "var(--rounded-sm)",
        md: "var(--rounded-md)",
        lg: "var(--rounded-lg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
