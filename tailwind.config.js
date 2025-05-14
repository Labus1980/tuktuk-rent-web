/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#81D8D0', // Tiffany Blue
        secondary: '#000000', // Black
        dark: '#1B1B1B', // Black for text
        'gray-light': '#F5F5F7', // Light gray for background
        'gray-medium': '#E5E5E5',
        tiffany: {
          DEFAULT: '#81D8D0',
          light: '#A5E4DE',
          dark: '#6BC9C0',
        }
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '64': '16rem',
      },
    },
  },
  plugins: [],
};