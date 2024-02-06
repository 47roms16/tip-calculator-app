/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", ".{js}"],
  theme: {
    fontFamily: {
      "space-mono": ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        "dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "reset-btn": "hsl(183, 80%, 24%)",
        "reset-color": "hsl(183, 94%, 20%)",
        "btn-hover": "hsl(173, 61%, 77%)",
        error: "hsl(12, 46%, 63%)",
      },

      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
