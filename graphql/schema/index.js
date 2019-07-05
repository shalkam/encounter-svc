const path = require('path')
const fs = require('fs')
const { importSchema } = require('graphql-import')
const { schema: directives } = require('graphql-fhir-directives')
const { typeDefs: primitiveTypes } = require('graphql-fhir-primitive-types')
const schemaPath = path.resolve(__dirname, 'schema.graphql')
// console.log(directives)
const typeDefs = importSchema(
  `${primitiveTypes}
${fs.readFileSync(schemaPath)}`,
  {
    directives
  }
)
module.exports = typeDefs
