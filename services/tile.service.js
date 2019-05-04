const constants = require('../constants/constants')
const utils = require('./utils.service')
const Tile = require('../classes').Tile
const Territory = require('../classes').Territory

const gameTerritoriesConfig = constants.TERRITORIES_CONFIG
const drawPile = []
const boardTiles = []

// Generate a card
const computeDominoTile = (id) => new Tile(id, computeTerritory(), computeTerritory())

const computeTerritory = () => {
  let territoryTypeAvailable = false
  for (let i = 1; !territoryTypeAvailable; i++) {
    let territoryTypeIndex = utils.getRandomInt(gameTerritoriesConfig.length)
    if (gameTerritoriesConfig[territoryTypeIndex].nbItems > 0) {
      territoryTypeAvailable = true
      gameTerritoriesConfig[territoryTypeIndex].nbItems--
      return new Territory(gameTerritoriesConfig[territoryTypeIndex].type, gameTerritoriesConfig[territoryTypeIndex].nbCrowns)
    }
  }
}

// Compute the game draw pile
const computeDrawPile = (nbTilesInGame) => {
  for (let i = 1; i <= nbTilesInGame; i++) {
    drawPile.push(computeDominoTile(i))
    if (getRemainingTerritoriesType() === 0) {
      break
    }
  }
  return utils.stringify(drawPile)
}

const getNewBoardTiles = (nbTilesToRetrieve) => {
  for (let i = 0; i < nbTilesToRetrieve; i++) {
    boardTiles.push(retrieveTileFromDrawPile())
  }
  return utils.stringify(sortBoardTiles(boardTiles))
}

// Return the number of remainin cards
const getRemainingTerritoriesType = () => {
  let nbTerritoriesAvailable = 0
  gameTerritoriesConfig.forEach((territory) => {
    nbTerritoriesAvailable += territory.nbItems
  })
  return nbTerritoriesAvailable
}

const retrieveTileFromDrawPile = () => {
  let tileIndex = utils.getRandomInt(drawPile.length)
  let retrievedTile

  drawPile.forEach((tile, index) => {
    if (index === tileIndex) {
      retrievedTile = tile
    }
  })
  drawPile.splice(tileIndex, 1)
  return retrievedTile
}

const sortBoardTiles = (boardTiles) => boardTiles.sort((a, b) => a.id - b.id)

module.exports = {
  computeDrawPile,
  getNewBoardTiles
}
