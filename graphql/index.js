const server = require('./server')
const playground = require('../playground')

server.start(({ port, endpoint }) => {
  const url = `http://localhost:${port}${endpoint}`
  playground(server.express, url)
  console.log(`Server is running on ${url}`)
  console.log(`Playground on http://localhost:${port}/playground`)
})
