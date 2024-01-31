import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#060B27',
        foreground: '#383C52',
        border: '#383C52',
        primary: {
          DEFAULT: '#055FFC',
          foreground: '#377FFD'
        },
        secondary: '#8F9BB7',
        badge: '#FE5B01'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
export default config
