/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(234,231,255,1) 0%, rgba(221,202,238,1) 64%);",
        "button-gradient":
          "linear-gradient(90deg, rgba(168,52,244,1) 0%, rgba(130,57,243,1) 50%, rgba(99,60,244,1) 100%)",
        "text-gradient":
          "linear-gradient(90deg, rgba(168,52,244,1) 0%, rgba(130,57,243,1) 50%, rgba(99,60,244,1) 100%)",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};
