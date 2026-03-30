import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        resonate: ["Resonate", "sans-serif"],
        "stk-bureau": ['"STK Bureau Serif"', "serif"],
      },
    },
  },
};

export default config;
