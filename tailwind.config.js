/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // ← Asegura que está capturando todos los archivos de React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00", // Naranja (Energía)
        secondary: "#007BFF", // Azul eléctrico (Resistencia)
        asphalt: "#4E4E50", // Gris (Camino)
        lime: "#A8E000", // Verde lima (Vitalidad)
        white: "#F5F5F5", // Blanco (Contraste)
      },
    },
  },
  plugins: [],
};
