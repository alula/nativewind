/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  roots: ["src"],
  setupFiles: ["@alula/react-native-css-interop/test/setup"],
  setupFilesAfterEnv: ["@alula/react-native-css-interop/test/setupAfterEnv"],
  modulePathIgnorePatterns: ["<rootDir>/src/test"],
  moduleNameMapper: {
    "^@alula/react-native-css-interop$": "<rootDir>/../react-native-css-interop/src",
    "^@alula/react-native-css-interop/jsx-runtime$":
      "<rootDir>/../react-native-css-interop/src/runtime/jsx-runtime",
    "^@alula/react-native-css-interop/test$":
      "<rootDir>/../react-native-css-interop/src/test",
  },
};
