/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50:'#F9FAFB',
          100: '#D6D7DA',
          150: '#62717A',
          200:'#E1E1E1',
          300: '#F2F4F7',
          400: '#D0D5DD',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: ' #F4F4F4;',
          900: '#101828'
        },
        primary: {
          100: '#F72585',
          200: '#D9D9D9',
          300: '#FB5029',
          400: 'rgba(48, 51, 255, 0.06)',
          500: 'rgba(3, 1, 3, 0.10)',
          700: 'rgba(255, 255, 255, 0.10)',
        },
        success: {
          500: '#12B76A'
        },
        brown: {
          100: '#2F2A26'
        },
        blue: {
          100: '#5856D6'
        },
        black: {
          DEFAULT: '#000000',
          100: '#030103',
          200: '#0B0B0B',
        }
      },
      boxShadow: {
        custom: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        lg:  '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
      }
    },
  },
  plugins: [],
};
