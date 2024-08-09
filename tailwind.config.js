/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import lineClamp from '@tailwindcss/line-clamp';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '10px',
        '50': '70px',
      },
      backgroundColor: {
        'custom': '#E0F1F0',
      },
      }
  },
  plugins: [
      typography,
      lineClamp,
    ],
}