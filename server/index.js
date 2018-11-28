
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");  
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
      res.header("X-Powered-By",' 3.2.1');
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
  })

  // app.use('/port', require('./user'))

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

}

start()

