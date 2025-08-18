/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           // ton fichier principal
    "./src/**/*.{js,ts,jsx,tsx}", // tous tes fichiers React/Vite
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4F46E5", // une couleur perso (ex: bleu indigo)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
