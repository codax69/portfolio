export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
