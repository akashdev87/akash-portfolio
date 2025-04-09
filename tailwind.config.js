module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "white/10": "rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        lg: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
