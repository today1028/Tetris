const Router = require('koa-router')
const router = new Router()
const get = require('./get')
const post = require('./post')

router
  .get('/', get.getData)
  .post('/', post)

module.exports = router
