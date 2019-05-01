const constants = require('../constants/constants')
const utils = require('./utils.service')
const models = require('../models')

const gameTerritoriesConfig = constants.TERRITORIES_CONFIG

// Generate a card
const computeDominoTile = () => new models.Tile(computeTerritory(), computeTerritory())

const computeTerritory = () => {
  let territoryTypeAvailable = false

  while (!territoryTypeAvailable) {
    let territoryTypeIndex = utils.getRandomInt(gameTerritoriesConfig.length)
    if (gameTerritoriesConfig[territoryTypeIndex].nbItems > 0) {
      territoryTypeAvailable = true
      gameTerritoriesConfig[territoryTypeIndex].nbItems--
      return new models.Territory(gameTerritoriesConfig[territoryTypeIndex].type, gameTerritoriesConfig[territoryTypeIndex].nbCrowns)
    }
  }
}

// Return the number of remainin cards
const getRemainingTerritoriesType = () => {
  let nbTerritoriesAvailable = 0
  gameTerritoriesConfig.forEach((territory) => {
    nbTerritoriesAvailable += territory.nbItems
  })
  return nbTerritoriesAvailable
}

// Compute the game draw pile
const computeDrawPile = (nbTilesInGame) => {
  let drawPile = []
  for (let i = 0; i < nbTilesInGame; i++) {
    drawPile.push(computeDominoTile())
    if (getRemainingTerritoriesType() === 0) {
      break
    }
  }
  return drawPile
}

module.exports = {
  computeDominoTile,
  computeDrawPile
}
