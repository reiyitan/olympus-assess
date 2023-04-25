/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            background: "#19191C",
            input: "#232329",
            border: "#8D8D9C",
            gold: "#E6C466",
            white: "#ECEFF4",
            red: "#FF6565"
        }
    },
  },
  plugins: [],
}

