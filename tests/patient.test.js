const { request } = require('graphql-request')

describe('A patient', () => {
  it('should be created', async done => {
    const data = await request(
      global.__ENDPOINT__,
      `mutation {
        createPatient(
          data: {
            name: [{ family: "Sholkamy", given: ["Mostafa", "Sayed"] }]
            mariatalStatus: { text: "Married", coding: { code: "A" } }
            identifier: [{ value: "123" }]
            address: [{ text: "test address" }]
          }
        ) {
          name {
            family
            given
          }
          mariatalStatus {
            text
          }
          identifier {
            value
            system
          }
        }
      }`
    )
    expect(data.createPatient.name.length).toBe(1)
    done()
  })
})
