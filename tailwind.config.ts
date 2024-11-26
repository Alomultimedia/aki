import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'spin-once': 'spin-once 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#3B3838",
        secondary:"#FF9933"
      },
      backgroundImage: {
        'hero-image': "url('/images/QDcme-home-mockup_v3 1.png')",
      },
      fontFamily: {
        'sans-black': ['var(--font-source-sans-black)'],
        'sans-bold': ['var(--font-source-sans-bold)'],
        'sans-semibold': ['var(--font-source-sans-semibold)'],
        'sans-regular': ['var(--font-source-sans-regular)'],
        'sans-light': ['var(--font-source-sans-light)'],
        'inter': ['var(--font-inter)'],  
      }
    },
  },
  plugins: [],
};
export default config;
