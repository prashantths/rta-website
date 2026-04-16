/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        // Resilience Talent Advisory brand palette
        brand: {
          teal:        "#2E7D7B",
          "teal-dark": "#1E5C5A",
          "teal-deep": "#174745",
          "teal-light":"#E4F0F0",
          amber:       "#E9A832",
          "amber-dark":"#C48A1A",
          "amber-light":"#FDF5E0",
          charcoal:    "#1A2424",
          text:        "#2A3535",
          "text-muted":"#5F7272",
          border:      "#D4E0DF",
          "off-white": "#F8FAF9",
        },
        // Convenience aliases used in hover states
        navy:    "#2E7D7B",
        charcoal:"#1A2424",
      },
      backgroundImage: {
        // Gradient classes referenced in JSX (supplements the @layer utilities in globals.css)
        "hero-gradient":
          "linear-gradient(135deg, #1A2424 0%, #174745 60%, #1E5C5A 100%)",
        "teal-gradient":
          "linear-gradient(135deg, #1E5C5A 0%, #2E7D7B 100%)",
      },
    },
  },
  plugins: [],
};
