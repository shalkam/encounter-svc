const { resolvers: primitiveTypes } = require('graphql-fhir-primitive-types')

const resolvers = {
  ...primitiveTypes,
  Query: {
    encounter: (_, { id }, { prisma }, info) =>
      prisma.query.encounterModel({ where: { id } }, info),
    encounters: (_, args, { prisma, req }, info) => {
      console.log(Object.keys(req.request.headers), req.request.headers.test)
      return prisma.query.encounterModelsConnection({}, info)
    }
  },
  Mutation: {
    createEncounter: (_, { data }, { prisma }, info) => {
      return null
      // if (data.name) {
      //   data.name = {
      //     create: data.name.map(name => {
      //       if (name.given) name.given = { set: name.given }
      //       return name
      //     })
      //   }
      // }
      // if (data.mariatalStatus) {
      //   if (data.mariatalStatus.coding) {
      //     data.mariatalStatus.coding = { create: data.mariatalStatus.coding }
      //   }
      //   data.mariatalStatus = {
      //     create: data.mariatalStatus
      //   }
      // }
      // if (data.identifier) data.identifier = { create: data.identifier }
      // if (data.telecom) data.telecom = { create: data.telecom }
      // if (data.address) data.address = { create: data.address }
      // return prisma.mutation.createEncounterModel({ data }, info)
    }
  }
}

module.exports = resolvers
