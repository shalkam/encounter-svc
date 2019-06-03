const path = require('path')
const { GraphQLServer } = require('graphql-yoga')
const express = require('express')
const schema = require('./schema')
const resolvers = require('./resolvers/resolvers')
// const schemaDirectives = require('./directives')
const { directives } = require('graphql-fhir-directives')
const context = require('./context')
const server = new GraphQLServer({
  typeDefs: schema,
  resolvers,
  context,
  schemaDirectives: directives,
  playground: false
})
server.express.use(
  '/codeSystems',
  express.static(path.resolve(__dirname, '../codeSystems'))
)

module.exports = server
