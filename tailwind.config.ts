import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        heading: ['var(--font-raleway)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translate(-50%, 0)', opacity: '0' },
          '40%': { opacity: '1' },
          '80%': { transform: 'translate(-50%, 20px)', opacity: '0' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        'scroll': 'scroll 2s infinite'
      }
    },

  },
  plugins: [],
} satisfies Config;
