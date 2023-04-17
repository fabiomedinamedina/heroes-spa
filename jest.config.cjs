module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // setupFiles: ['./jest.setup.js']
  transform: {},
  moduleNameMapper: {
    "^animate.css$": "/mocks/animate.css.js",
  },
  transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
}