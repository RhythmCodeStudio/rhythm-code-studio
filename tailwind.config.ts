import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
      },
      width: {
        100: '25rem',   // 400px
        128: '32rem',  // 512px
        144: '36rem',  // 576px
        160: '40rem',  // 640px
        180: '44rem',  // 704px
        200: '48rem',  // 768px
        300: '64rem',  // 1024px
        400: '76rem',  // 1216px
        500: '88rem',  // 1408px
        600: '96rem',  // 1536px
        700: '104rem', // 1664px
        800: '112rem', // 1792px
        900: '120rem', // 1920px 
      },
      maxWidth: {
        128: '32rem',  // 512px
        144: '36rem',  // 576px
        160: '40rem',  // 640px
        180: '44rem',  // 704px
        200: '48rem',  // 768px
        300: '64rem',  // 1024px
        400: '76rem',  // 1216px
        500: '88rem',  // 1408px
        600: '96rem',  // 1536px
        700: '104rem', // 1664px
        800: '112rem', // 1792px
        900: '120rem', // 1920px
        1000: '128rem', // 2048px
        1200: '144rem', // 2304px
        1400: '160rem', // 2560px
        1600: '176rem', // 2816px
        1800: '192rem', // 3072px
        2000: '208rem', // 3328px
      },
    },
  },
  plugins: [],
};
export default config;
