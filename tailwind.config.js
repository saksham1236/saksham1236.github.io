/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
    "./lib/**/*.{js,ts,jsx,tsx}", // Include all files in the lib directory
  ],
  theme: {
    extend: {
      colors: {
        "media-brand": "rgb(var(--media-brand) / <alpha-value>)",
        "media-focus": "rgb(var(--media-focus) / <alpha-value>)",
      },
      screens: {
        'uhd': '1200px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@vidstack/react/tailwind.cjs")({
      prefix: "media",
    }),
    customVariants,
  ],
}

function customVariants({ addVariant, matchVariant }) {
  // Strict version of `.group` to help with nesting.
  matchVariant("parent-data", (value) => `.parent[data-${value}] > &`)
  addVariant("hocus", ["&:hover", "&:focus-visible"])
  addVariant("group-hocus", [".group:hover &", ".group:focus-visible &"])
  addVariant("children", "&>*")
  addVariant("children-secondary", "& > .secondary")
}
