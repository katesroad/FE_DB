const { defaults } = require('jest-config')

module.exports = {
  verbose: true,
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test))\\.(ts|tsx|js)$',
  /**
   * Enable import css/scss when testing
   * Doc: https://jestjs.io/docs/webpack#mocking-css-modules
   */
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    /**
     * Testing with Jest and Webpack aliases
     * Solution: https://stackoverflow.com/questions/42629925/testing-with-jest-and-webpack-aliases
     */
    '^components(.*)$': '<rootDir>/src/components$1',
    // '^constant(.*)$': '<rootDir>/src/constant$1',
    '^context(.*)$': '<rootDir>/src/context$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
  },
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'json',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
