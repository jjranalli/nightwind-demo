// import { whitelistedClasses } from './layouts/background/lines.tsx'

module.exports = {
  experimental: {
    applyComplexClasses: true,
    darkModeVariant: true
  },
  dark: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
  enabled: true,
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
      whitelist: [
        'text-red-300', 'text-red-400', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
        'text-orange-300', 'text-orange-400', 'text-orange-500', 'text-orange-600', 'text-orange-700', 'text-orange-800', 'text-orange-900',
        'text-yellow-300', 'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
        'text-green-300', 'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
        'text-teal-300', 'text-teal-400', 'text-teal-500', 'text-teal-600', 'text-teal-700', 'text-teal-800', 'text-teal-900',
        'text-blue-300', 'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
        'text-indigo-300', 'text-indigo-400', 'text-indigo-500', 'text-indigo-600', 'text-indigo-700', 'text-indigo-800', 'text-indigo-900',
        'text-purple-300', 'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900',
        'text-pink-300', 'text-pink-400', 'text-pink-500', 'text-pink-600', 'text-pink-700', 'text-pink-800', 'text-pink-900'
      ]
    },
  },

  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#caf0f8',
          300: '#90e0ef',
          500: '#00b4d8',
          700: '#0077b6',
          900: '#03045e',
        }
      },
      transitionDuration: {
        // 'nightwind': '500ms' // default '300ms'
      }
    },
  },

  variants: {
    'nightwind': ['hover', 'focus'],
    textColor: ({ after }) => after(['group-hover'])
  },

  plugins: [
    require('nightwind')
  ]
}