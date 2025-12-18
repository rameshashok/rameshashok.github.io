/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#64ffda',
        bg: '#0a0a0a',
        card: '#1a1a1a'
      }
    }
  },
  plugins: []
};
