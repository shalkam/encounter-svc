const express = require('express')
const path = require('path')
const fs = require('fs')

const playground = (app, url) => {
  app.use(
    '/playground/static',
    express.static(path.resolve(__dirname, './static'))
  )
  app.get('/playground', function (req, res) {
    fs.readFile(path.resolve(__dirname, './static/index.html'), (err, data) => {
      if (err) console.log(err)
      res.send(data.toString().replace('__ENDPOINT__', url))
    })
  })
}

module.exports = playground
