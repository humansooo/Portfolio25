import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
        bytesized: ["var(--font-bytesized)"],
        "geist-mono": ["var(--font-geist-mono)"],
        montserrat: ["var(--font-montserrat)"],
        bohme: ["var(--font-bohme)"],
        "racing-sans-one": ["var(--font-racing-sans-one)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "animate-grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, -20%)" },
          "30%": { transform: "translate(-5%, -10%)" },
          "40%": { transform: "translate(-15%, -20%)" },
          "50%": { transform: "translate(-5%, -10%)" },
          "60%": { transform: "translate(-15%, -20%)" },
          "70%": { transform: "translate(-5%, -10%)" },
          "80%": { transform: "translate(-15%, -20%)" },
          "90%": { transform: "translate(-5%, -10%)" },
          "100%": { transform: "translate(-15%, -20%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backdropBlur: {
        hazy: "8px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-shadow-gloom": {
          textShadow:
            "0 0 8px currentColor, 0 0 16px currentColor, 0 0 24px currentColor",
          filter: "blur(0.3px)",
          opacity: "0.85",
        },
        ".text-shadow-hazy": {
          textShadow: "0 0 4px currentColor, 0 0 8px currentColor",
          filter: "blur(0.2px)",
          opacity: "0.9",
        },
        ".text-shadow-gloom-strong": {
          textShadow:
            "0 0 12px currentColor, 0 0 24px currentColor, 0 0 36px currentColor, 0 0 48px currentColor",
          filter: "blur(0.5px)",
          opacity: "0.8",
        },
        ".hazy": {
          textShadow:
            "0 0 8px #ff00cc, 0 0 16px #3333ff, 0 0 24px #00ffcc, 0 0 32px #ffcc00",
          // textShadow: "0 0 36px currentColor, 0 0 36px currentColor"
          filter: "blur(10px)",
          opacity: "0.05",
        },
        ".super-gloom": {
          textShadow: "0 0 30px currentColor",
          filter: "blur(0.3px)",
          opacity: "0.85",
        },
        ".gloom": {
          // textShadow: "0 0 45px currentColor",
          textShadow: "0 0 45px currentColor",
          filter: "blur(0.4px)",
          opacity: "0.8",
        },
        ".sodo": {
          textShadow: " 7px 7px 7px currentColor",
          filter: "blur(0.3px)",
          opacity: "0.9",
        },
        ".sodo-half": {
          textShadow: " 0 0 5px currentColor",
          filter: "blur(0.1px)",
          opacity: "0.9",
        },
        ".sodo-box": {
          boxShadow: " 5px 5px 5px currentColor",
          filter: "blur(0.3px)",
          backdropFilter: "blur(0.1px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          opacity: "0.9",
        },
        ".sodo-box-half": {
          boxShadow: " 0 0 300px currentColor",
          filter: "blur(0.3px)",
          backdropFilter: "blur(0.3px)",
          opacity: "0.4",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
