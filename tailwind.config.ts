import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0077B6',
        'aqua-cyan': '#00B4D8',
        'deep-ocean': '#03045E',
        'coral-orange': '#FF6F61',
        'sand-beige': '#FFEBC1',
      },
      fontFamily: {
        'heading': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'Lato', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-ocean': 'linear-gradient(135deg, #03045E 0%, #0077B6 50%, #00B4D8 100%)',
      }
    },
  },
  plugins: [],
}
export default config 