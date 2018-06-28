const Koa = require('koa')
const Router = require('koa-router')
const config = require('config')
const logger = require('./utils/logger')
const app = new Koa()
const router = new Router()
const json = require('koa-json');
const v1 = require('./api/v1')

//json
app.use(json());

// Access log
app.use(async (ctx, next) => {
  await next()
  logger.info(`${ctx.req.socket.remoteAddress} [${(new Date()).toISOString()}] "${ctx.req.method} ${ctx.req.url}" ${ctx.res.statusCode}`)
})

router
  .prefix('/api')
  .use('/v1', v1.routes(), v1.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.get('port'), () => {
  logger.info(`Listening to port ${config.get('port')}`)
})
