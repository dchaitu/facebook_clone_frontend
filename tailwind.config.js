/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        facebook: {
          100: '#f0f2f5',
          200: '#e4e6eb',
          300: '#bcc0c4',
          400: '#8a8d91',
          500: '#65676b',
          600: '#4b4f56',
          700: '#3e4042',
          800: '#242526',
          900: '#18191a',
          blue: '#1877f2',
          'blue-hover': '#166fe5',
          'blue-light': '#e7f3ff',
          green: '#42b72a',
          'green-hover': '#36a420',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'post': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'header': '0 1px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
