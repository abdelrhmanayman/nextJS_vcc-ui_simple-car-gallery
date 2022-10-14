const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

const customJestConfig = {
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/(.*)$': '<rootDir>/src/$1',

        '^@/public/(.*)$': '<rootDir>/public/$1',
    },
    setupFilesAfterEnv: ['./jest.setup.js', 'react-intersection-observer/test-utils', '@testing-library/jest-dom/extend-expect'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './src/**/*.{js,jsx,ts,tsx}',
        '!./src/**/_*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = async () => ({
    /**
     * Using ...(await createJestConfig(customJestConfig)()) to override transformIgnorePatterns
     * provided byt next/jest.
     * 
     * @link https://github.com/vercel/next.js/issues/36077#issuecomment-1096635363
     */
    ...(await createJestConfig(customJestConfig)()),
    /**
     * Swiper uses ECMAScript Modules (ESM) and Jest provides some experimental support for it
     * but "node_modules" are not transpiled by next/jest yet.
     *
     * @link https://github.com/vercel/next.js/issues/36077#issuecomment-1096698456
     * @link https://jestjs.io/docs/ecmascript-modules
     */
    transformIgnorePatterns: [
        'node_modules/(?!(swiper|ssr-window|dom7)/)',
    ]
})