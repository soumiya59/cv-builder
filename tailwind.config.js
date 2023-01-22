/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
    "./resources/**/*.tsx",
    "./resources/**/**/*.jsx",
    "./resources/**/**/*.js",
    "./resources/**/**/*.tsx",
  ],
  theme: {
    fontFamily:{
     'pop': ['Poppins', 'sans-serif'],
     'mont': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
      verydarkblue : '#134982',
      lightgreen : '#00BDC9',
      darkpink : '#EC639E',
      verylightpink : '#fff4fb',
      lightblue :'#afe3ff',
      verylightblue :'#e2f1ff',
      mediumblue: '#73acff',
      darkblue : '#3078cb',
    },
    },
  },
  plugins: [],
}