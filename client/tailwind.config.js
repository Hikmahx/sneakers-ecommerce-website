module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        inherit: "inherit",
        22: "5.5rem",
      },
      minHeight: {
        xs: "16rem",
      },
      lineHeight: {
        0: "0",
      },
      width: {
        22: "5.5rem",
      },
      maxWidth: {
        "3xl": "51.7rem",
        "8xl": "84rem",
      },
      minWidth: {
        md: "28rem",
      },
      fontSize: {
        "4xl": "2.75rem",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1500px",
      },
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "very-dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(222, 4%, 48%)",
      "grayish-blue": "hsl(230, 4%, 72%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      "orange-shadow": "hsl(27, 100%, 80%)",
      "transparent": "transparent"
    },
    fontFamily: {
      "kumbh-sans": ['"Kumbh Sans"', "sans-serif"],
    },
  },
  plugins: [],
};