module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#ffffff',
        twitter: '#1D9BF0',
        dim: '#15202B',
        lightsOut: '#000000',
      },
      backgroundImage: {
        'twitter-home':
          "url('https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png')",
      },
    },
  },
  plugins: [],
};
