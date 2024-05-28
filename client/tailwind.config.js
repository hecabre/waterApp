const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-sapphire": {
          50: "#edf6ff",
          100: "#d7e9ff",
          200: "#b8dbff",
          300: "#88c5ff",
          400: "#50a4ff",
          500: "#277fff",
          600: "#105dff",
          700: "#0947ec",
          800: "#0f39be",
          900: "#133695",
          950: "#122562",
        },
      },
    },
  },
  plugins: [],
});
