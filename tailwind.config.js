/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            background: "#19191C",
            border: "#8D8D9C",
            gold: "#E6C466",
            red: "#FF6565",
        }
    },
  },
  plugins: [],
}

