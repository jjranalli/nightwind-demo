const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  
  theme: {
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    },
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    nightwind: {
      colors: {
        white: "gray.900",
        black: "gray.50",
        rose: {
          default: 'blue',
          100: 'yellow.300'
        },
      },
    },
    extend: {
      colors: {
        'primary': {
          50: '#caf0f8',
          300: '#90e0ef',
          600: '#0077b6',
          900: '#03045e',
        }
      },
      transitionDuration: {
        // 'nightwind': '200ms' // default '300ms'
      }
    },
  },
  purge: {
  // enabled: true,
  enabled: false,
  content: [
    './pages/**/*.tsx',
    './pages/**/*.js',
    './components/**/*.js',
    './components/**/*.jsx',
    './components/**/*.tsx',
    './components/**/*.scss',
    './layouts/**/*.tsx',
    './layouts/**/*.js',
    './layouts/**/*.scss',
    './styles/**/*.scss'
    ],
    options: {
      safelist: [
        'text-red-300', 'text-red-400', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
        'text-orange-300', 'text-orange-400', 'text-orange-500', 'text-orange-600', 'text-orange-700', 'text-orange-800', 'text-orange-900',
        'text-amber-300', 'text-amber-400', 'text-amber-500', 'text-amber-600', 'text-amber-700', 'text-amber-800', 'text-amber-900',
        'text-yellow-300', 'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
        'text-lime-300', 'text-lime-400', 'text-lime-500', 'text-lime-600', 'text-lime-700', 'text-lime-800', 'text-lime-900',
        'text-green-300', 'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
        'text-emerald-300', 'text-emerald-400', 'text-emerald-500', 'text-emerald-600', 'text-emerald-700', 'text-emerald-800', 'text-emerald-900',
        'text-teal-300', 'text-teal-400', 'text-teal-500', 'text-teal-600', 'text-teal-700', 'text-teal-800', 'text-teal-900',
        'text-cyan-300', 'text-cyan-400', 'text-cyan-500', 'text-cyan-600', 'text-cyan-700', 'text-cyan-800', 'text-cyan-900',
        'text-lightBlue-300', 'text-lightBlue-400', 'text-lightBlue-500', 'text-lightBlue-600', 'text-lightBlue-700', 'text-lightBlue-800', 'text-lightBlue-900',
        'text-blue-300', 'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
        'text-indigo-300', 'text-indigo-400', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800', 'text-indigo-900',
        'text-violet-300', 'text-violet-400', 'text-violet-500', 'text-violet-600', 'text-violet-700', 'text-violet-800', 'text-violet-900',
        'text-purple-300', 'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
        'text-fuchsia-300', 'text-fuchsia-400', 'text-fuchsia-500', 'text-fuchsia-600', 'text-fuchsia-700', 'text-fuchsia-800', 'text-fuchsia-900',
        'text-pink-300', 'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800', 'text-pink-900',
        'text-rose-300', 'text-rose-400', 'text-rose-500', 'text-rose-600', 'text-rose-700', 'text-rose-800', 'text-rose-900',
        'border-red-300', 'border-red-400', 'border-red-500', 'border-red-600', 'border-red-700', 'border-red-800', 'border-red-900',
        'border-orange-300', 'border-orange-400', 'border-orange-500', 'border-orange-600', 'border-orange-700', 'border-orange-800', 'border-orange-900',
        'border-amber-300', 'border-amber-400', 'border-amber-500', 'border-amber-600', 'border-amber-700', 'border-amber-800', 'border-amber-900',
        'border-yellow-300', 'border-yellow-400', 'border-yellow-500', 'border-yellow-600', 'border-yellow-700', 'border-yellow-800', 'border-yellow-900',
        'border-lime-300', 'border-lime-400', 'border-lime-500', 'border-lime-600', 'border-lime-700', 'border-lime-800', 'border-lime-900',
        'border-green-300', 'border-green-400', 'border-green-500', 'border-green-600', 'border-green-700', 'border-green-800', 'border-green-900',
        'border-emerald-300', 'border-emerald-400', 'border-emerald-500', 'border-emerald-600', 'border-emerald-700', 'border-emerald-800', 'border-emerald-900',
        'border-teal-300', 'border-teal-400', 'border-teal-500', 'border-teal-600', 'border-teal-700', 'border-teal-800', 'border-teal-900',
        'border-cyan-300', 'border-cyan-400', 'border-cyan-500', 'border-cyan-600', 'border-cyan-700', 'border-cyan-800', 'border-cyan-900',
        'border-lightBlue-300', 'border-lightBlue-400', 'border-lightBlue-500', 'border-lightBlue-600', 'border-lightBlue-700', 'border-lightBlue-800', 'border-lightBlue-900',
        'border-blue-300', 'border-blue-400', 'border-blue-500', 'border-blue-600', 'border-blue-700', 'border-blue-800', 'border-blue-900',
        'border-indigo-300', 'border-indigo-400', 'border-indigo-500', 'border-indigo-600', 'border-indigo-700', 'border-indigo-800', 'border-indigo-900',
        'border-violet-300', 'border-violet-400', 'border-violet-500', 'border-violet-600', 'border-violet-700', 'border-violet-800', 'border-violet-900',
        'border-purple-300', 'border-purple-400', 'border-purple-500', 'border-purple-600', 'border-purple-700', 'border-purple-800', 'border-purple-900',
        'border-fuchsia-300', 'border-fuchsia-400', 'border-fuchsia-500', 'border-fuchsia-600', 'border-fuchsia-700', 'border-fuchsia-800', 'border-fuchsia-900',
        'border-pink-300', 'border-pink-400', 'border-pink-500', 'border-pink-600', 'border-pink-700', 'border-pink-800', 'border-pink-900',
        'border-rose-300', 'border-rose-400', 'border-rose-500', 'border-rose-600', 'border-rose-700', 'border-rose-800', 'border-rose-900',
        'ring-red-300', 'ring-red-400', 'ring-red-500', 'ring-red-600', 'ring-red-700', 'ring-red-800', 'ring-red-900',
        'ring-orange-300', 'ring-orange-400', 'ring-orange-500', 'ring-orange-600', 'ring-orange-700', 'ring-orange-800', 'ring-orange-900',
        'ring-amber-300', 'ring-amber-400', 'ring-amber-500', 'ring-amber-600', 'ring-amber-700', 'ring-amber-800', 'ring-amber-900',
        'ring-yellow-300', 'ring-yellow-400', 'ring-yellow-500', 'ring-yellow-600', 'ring-yellow-700', 'ring-yellow-800', 'ring-yellow-900',
        'ring-lime-300', 'ring-lime-400', 'ring-lime-500', 'ring-lime-600', 'ring-lime-700', 'ring-lime-800', 'ring-lime-900',
        'ring-green-300', 'ring-green-400', 'ring-green-500', 'ring-green-600', 'ring-green-700', 'ring-green-800', 'ring-green-900',
        'ring-emerald-300', 'ring-emerald-400', 'ring-emerald-500', 'ring-emerald-600', 'ring-emerald-700', 'ring-emerald-800', 'ring-emerald-900',
        'ring-teal-300', 'ring-teal-400', 'ring-teal-500', 'ring-teal-600', 'ring-teal-700', 'ring-teal-800', 'ring-teal-900',
        'ring-cyan-300', 'ring-cyan-400', 'ring-cyan-500', 'ring-cyan-600', 'ring-cyan-700', 'ring-cyan-800', 'ring-cyan-900',
        'ring-lightBlue-300', 'ring-lightBlue-400', 'ring-lightBlue-500', 'ring-lightBlue-600', 'ring-lightBlue-700', 'ring-lightBlue-800', 'ring-lightBlue-900',
        'ring-blue-300', 'ring-blue-400', 'ring-blue-500', 'ring-blue-600', 'ring-blue-700', 'ring-blue-800', 'ring-blue-900',
        'ring-indigo-300', 'ring-indigo-400', 'ring-indigo-500', 'ring-indigo-600', 'ring-indigo-700', 'ring-indigo-800', 'ring-indigo-900',
        'ring-violet-300', 'ring-violet-400', 'ring-violet-500', 'ring-violet-600', 'ring-violet-700', 'ring-violet-800', 'ring-violet-900',
        'ring-purple-300', 'ring-purple-400', 'ring-purple-500', 'ring-purple-600', 'ring-purple-700', 'ring-purple-800', 'ring-purple-900',
        'ring-fuchsia-300', 'ring-fuchsia-400', 'ring-fuchsia-500', 'ring-fuchsia-600', 'ring-fuchsia-700', 'ring-fuchsia-800', 'ring-fuchsia-900',
        'ring-pink-300', 'ring-pink-400', 'ring-pink-500', 'ring-pink-600', 'ring-pink-700', 'ring-pink-800', 'ring-pink-900',
        'ring-rose-300', 'ring-rose-400', 'ring-rose-500', 'ring-rose-600', 'ring-rose-700', 'ring-rose-800', 'ring-rose-900',
      ]
    },
  },

  

  variants: {
    'nightwind': {
      // 'variants': ['focus'],
      'colorClasses': ['gradient', 'ring', 'ring-offset']  // 'divide', 'placeholder', 'ring', 'ring-offset']
    },
    textColor: ({ after }) => after(['group-hover']),
    ringOpacity: ({ after }) => after(['hover']),
    rotate: ['group-hover']
  },

  plugins: [
    require('nightwind')
  ]
}