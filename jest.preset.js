const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  testEnvironment: 'jsdom',
};
