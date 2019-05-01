class Territory {
  constructor (type, nbCrowns) {
    this.type = type
    this.nbCrowns = nbCrowns
  }
}

class Tile {
  constructor (territory1, territory2) {
    this.territory1 = territory1
    this.territory2 = territory2
  }
}

module.exports = {
  Territory,
  Tile
}
