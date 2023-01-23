// @ts-nocheck
/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = config;
