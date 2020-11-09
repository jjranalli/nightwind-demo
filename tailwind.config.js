module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './node_modules/nightwind/src/index.js',
    './pages/**/*.tsx',
    './pages/**/*.js',
    './components/**/*.tsx',
    './components/**/*.js',
    './components/**/*.scss',
    './layouts/**/*.tsx',
    './layouts/**/*.js',
    './layouts/**/*.scss',
    './styles/**/*.scss'
  ],

  theme: {
    extend: {
      screens: {},
      colors: {},
    },
  },

  variants: {
    'nightwind': ['hover', 'focus'],

    // Enable overrides
    textColor: ({ after }) => after(['dark', 'dark-hover', 'dark-focus', 'dark-placeholder']),
    backgroundColor: ({ after }) => after(['dark', 'dark-hover', 'dark-focus', 'dark-placeholder']),
    borderColor: ({ after }) => after(['dark', 'dark-hover', 'dark-focus', 'dark-placeholder'])
  },

  plugins: [
    require('nightwind')
  ]
}
