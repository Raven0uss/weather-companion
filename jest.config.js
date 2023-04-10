module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts?(x)",
    "!src/**/*.d.ts?(x)",
    "!src/index.tsx",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
        diagnostics: {
          warnOnly: true,
        },
      },
    ],
  },
};
