import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      width: {
        'calc-100vw': 'calc(100vw)',
      }
    },
  },
  plugins: [
    flowbitePlugin
  ],
}