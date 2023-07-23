/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1366px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

      fontFamily:{
        "Roboto_con":['Roboto Condensed','sans-serif'],
        "Staatliches":['Staatliches', 'cursive'],
        "Inter":['Inter','sans-serif'],
        "Poppins":['Poppins','sans-serif'],
        "Arimo":['Arimo','sans-serif'],
        "Roboto":['Roboto','sans-serif'],
        "opensans":['Open Sans','sans-serif'],
        'firasans':['Fira Sans','sans-serif']
       },

       boxShadow:{
        'hero':'	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)'
       }
    },
  },
  plugins: [],
}

