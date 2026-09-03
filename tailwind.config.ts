import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#060813",
        surface: "#0b0f24",
        "surface-card": "#101633",
        "surface-card-hover": "#171e42",
        "border-glow": "rgba(0, 240, 255, 0.15)",
        cyan: {
          400: "#22d3ee",
          500: "#00f0ff",
          600: "#0891b2",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        electric: {
          blue: "#3b82f6",
          cyan: "#00f0ff",
          purple: "#9333ea",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "glow-slow": "glow 4s ease-in-out infinite alternate",
        "laser-sweep": "laserSweep 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(32px)" },
        },
        laserSweep: {
          "0%": { transform: "translateX(-100%)", opacity: "0.2" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0.2" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
export default config;
