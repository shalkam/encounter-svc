// apollo-environment
const NodeEnvironment = require('jest-environment-node')
const server = require('../graphql/server')

class ApolloEnvironment extends NodeEnvironment {
  constructor (config, context) {
    super(config, context)
    this.testPath = context.testPath
  }

  async setup () {
    await super.setup()
    this.global.__APP__ = await server.start(({ port, endpoint }) => {
      this.global.__ENDPOINT__ = `http://localhost:${port}${endpoint}`
    })
  }

  async teardown () {
    await this.global.__APP__.close()
    await super.teardown()
  }

  runScript (script) {
    return super.runScript(script)
  }
}

module.exports = ApolloEnvironment
