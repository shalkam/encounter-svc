const { resolvers: primitiveTypes } = require('graphql-fhir-primitive-types')

const resolvers = {
  ...primitiveTypes,
  Query: {
    patient: (_, { id }, { prisma }, info) =>
      prisma.query.patientModel({ where: { id } }, info),
    patients: (_, args, { prisma, req }, info) => {
      console.log(Object.keys(req.request.headers), req.request.headers.test)
      return prisma.query.patientModelsConnection({}, info)
    }
  },
  Mutation: {
    createPatient: (_, { data }, { prisma }, info) => {
      if (data.name) {
        data.name = {
          create: data.name.map(name => {
            if (name.given) name.given = { set: name.given }
            return name
          })
        }
      }
      if (data.mariatalStatus) {
        if (data.mariatalStatus.coding) {
          data.mariatalStatus.coding = { create: data.mariatalStatus.coding }
        }
        data.mariatalStatus = {
          create: data.mariatalStatus
        }
      }
      if (data.identifier) data.identifier = { create: data.identifier }
      if (data.telecom) data.telecom = { create: data.telecom }
      if (data.address) data.address = { create: data.address }
      return prisma.mutation.createPatientModel({ data }, info)
    }
  }
}

module.exports = resolvers
