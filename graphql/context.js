const path = require('path')
const { Prisma } = require('prisma-binding')

const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  typeDefs: path.resolve(__dirname, '../generated/prisma.graphql')
})

module.exports = req => {
  // console.log(Object.keys(req.request), req.request.headers)
  return {
    req,
    prisma
  }
}
