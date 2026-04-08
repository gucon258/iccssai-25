/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathing: {
          "0%, 100%": { filter: "drop-shadow(0px 0px 5px rgba(255, 0, 0, 1))" },
          "50%": { filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 1)) brightness(1.3)" }
        },
        cmtFadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        breathing: "breathing 1.5s infinite ease-in-out",
        cmtFadeIn: "cmtFadeIn 0.6s ease-out both"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
