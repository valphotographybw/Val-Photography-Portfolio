module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#100e0c',
        secondary: '#b8afa4',
        tertiary: '#211b17',
        'black-100': '#171412',
        'black-200': '#0c0a08',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
