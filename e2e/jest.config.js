/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './html-report',
      filename: 'jest_html_reporters.html',
      expand: true,
    }],
  ],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};
