class Territory {
  constructor (type, nbCrowns) {
    this.type = type
    this.nbCrowns = nbCrowns
  }

  getType() {
    return this.type
  }
  getNbCrowns() {
    return this.nbCrowns
  }
}

class Tile {
  constructor (id, firstTerritory, secondTerritory) {
    this.id = id
    this.firstTerritory = firstTerritory
    this.secondTerritory = secondTerritory
  }

  get getId() {
    return this.id
  }
  get getFirstTerritory() {
    return this.firstTerritory
  }
  get getSecondTerritory() {
    return this.secondTerritory
  }
}
class Player {
  constructor (id, pseudo) {
    this.id = id
    this.pseudo = pseudo
  }

  get getId() {
    return this.id
  }
  get getPseudo() {
    return this.pseudo
  }
}

module.exports = {
  Player,
  Territory,
  Tile
}
