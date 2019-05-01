const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

const router = new Router()

const tilesService = require('./services/tiles.service')

router.get('/', root)

app.use(router.routes())

async function root (ctx) {
  ctx.body = tilesService.computeDrawPile()
}

app.listen(3000)
