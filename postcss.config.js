module.exports = {
  plugins: {
    'postcss-import': {},
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}