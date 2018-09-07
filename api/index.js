const restify = require('restify')

const server = restify.createServer()


server.get('/', (req, res, next) => {
  console.log(req.headers)
  res.send(200, Math.random().toString(36).substr(3, 8))
  next()
})


server.listen(8080)
