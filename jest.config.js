module.exports = {
 verbose: true,
 testEnvironment: "node",
 projects: [
  {
   displayName: "cdk",
   transform: {
    "^.+\\.tsx?$": "ts-jest"
   },
   setupFilesAfterEnv: [
    "<rootDir>/packages/cdk/jest.setup.js"
   ],
   testMatch: [
    "<rootDir>/packages/cdk/**/*.test.ts"
   ]
  }
 ]
}
