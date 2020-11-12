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
  purge: [
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

  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      },
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
        // 'nightwind': '1000ms' // default '300ms'
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