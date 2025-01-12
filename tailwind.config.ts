/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['var(--font-libre-baskerville)'],
        'caveat': ['var(--font-caveat)'],
      },
    },
  },
  plugins: [],
}

