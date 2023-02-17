
module.exports = {
  clearMocks: true,
  coverageProvider: "babel",
  moduleDirectories: [
    "node_modules"
  ],
  testMatch: [
    "**/__tests__/**/*.mjs",
    "**/?(*.)+(spec|test).[mtj]s"
  ],

	transform: {
    "^.+\\.mjs$": "babel-jest",
  },
};
