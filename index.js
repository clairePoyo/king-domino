const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const Player = require('./models/user.model')

const router = new Router()

const tileService = require('./services/tile.service')
const pawnService = require('./services/pawn.service')
const playerService = require('./services/player.service')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

// TILES ROUTES
router.get('/tiles/drawPile', async (ctx) => ctx.body = await tileService.computeDrawPile(94))
router.get('/tiles/newTiles', async (ctx) => ctx.body = await tileService.getNewBoardTiles(3))

// PAWNS ROUTES
router.get('/pawns/assign', async (ctx) => ctx.body = await pawnService.assign('pink'))
router.get('/pawns/unassign', async (ctx) => ctx.body = await pawnService.unassign('pink'))
router.get('/pawns/remaining', async (ctx) => ctx.body = await pawnService.getRemaining())
router.get('/pawns/assigned', async (ctx) => ctx.body = await pawnService.getAssigned())

// PLAYERS ROUTES
router.get('/players', async (ctx) => ctx.body = await playerService.getAll({
  id: 1, pseudo: 'toto'
}))
router.get('/players/add', async (ctx) => ctx.body = await playerService.add({
  id: 1, pseudo: 'toto'
}))
router.get('/players/remove', async (ctx) => ctx.body = await playerService.remove(1))

app.use(router.routes())

app.listen(3000)
