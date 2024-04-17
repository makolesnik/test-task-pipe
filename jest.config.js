module.exports = {
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1'
      },
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
  };
