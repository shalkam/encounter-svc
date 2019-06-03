const path = require('path')
const { importSchema } = require('graphql-import')
const { schema: directives } = require('graphql-fhir-directives')
const { typeDefs: primitiveTypes } = require('graphql-fhir-primitive-types')
const typeDefs = importSchema(path.resolve(__dirname, 'schema.graphql'), {
  directives,
  primitiveTypes
})
module.exports = typeDefs
