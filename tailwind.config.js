export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      brown: "#703E32",
      skin: "#F0E8D5",
      darkSkin:'#D8CDB6',
      lightbrown: "#997337",
    },
    fontFamily: {
      mainFamily : ['Karla', 'sans-serif']
    }
  },
  plugins: [],
};
