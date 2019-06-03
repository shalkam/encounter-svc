const path = require('path')

module.exports = {
  verbose: true,
  testEnvironment: path.resolve(__dirname, 'jest/apolloEnv.js')
}
