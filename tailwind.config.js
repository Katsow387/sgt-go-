/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2A5B",
          deep: "#071A3D",
          light: "#12397D",
        },
        route: "#1768D1",
        sky: {
          DEFAULT: "#EAF2FC",
          mid: "#CFE2FA",
        },
        signal: "#F5A623",
        ink: "#0F1E3A",
        slate: "#5B6B87",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(11,42,91,0.18)",
        float: "0 16px 40px -12px rgba(11,42,91,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
