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
      },

    },
  },
  plugins: [
      typography,
      lineClamp,
    ],
}