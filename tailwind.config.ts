import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#F7F7F5",
          surface: "#FFFFFF",
          surfaceMuted: "#FBFBFC",
          text: "#1F2937",
          secondary: "#4B5563",
          muted: "#6B7280",
          subtle: "#9CA3AF",
          border: "#D5DBE1",
          borderStrong: "#C7CED6",
          dark: "#0F172A",
          darkDeep: "#0B1220",
          darkText: "#F9FAFB",
          darkMuted: "rgba(255,255,255,0.78)",
          accent: "#FF8F00",
          accentHover: "#F57C00",
          accentDeep: "#E56A00",
          accentPale: "#FFF4E5",
        },
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
