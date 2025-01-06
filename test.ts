module.exports = {
  theme: {
    extend: {
      animation: {
        "smooth-move": "smoothMove 3s ease-in-out infinite",
      },
      keyframes: {
        smoothMove: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
