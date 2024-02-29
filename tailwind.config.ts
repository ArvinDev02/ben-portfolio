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
    },
    // Add dark mode configuration here
    darkMode: 'class', // or 'media' or 'class' depending on your preference
    // If you choose 'class', you need to add a class to your <html> element
    // to toggle dark mode, such as 'dark'
  },
  plugins: [],
};
export default config;
