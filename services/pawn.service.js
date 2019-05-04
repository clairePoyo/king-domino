const constants = require('../constants/constants')
const utils = require('./utils.service')

const pawns = constants.KINGS
const selectedPawns = []

const assign = (pawn) => {
  let pawnIndex = pawns.indexOf(pawn)
  if ( pawnIndex === -1) {
    return 'Pawn already taken'
  }
  selectedPawns.push(pawns[pawnIndex])
  pawns.splice(pawnIndex, 1)
}

const unassign = (unwantedPawn) => {
  let unwantedPawnIndex = selectedPawns.indexOf(unwantedPawn)
  if ( unwantedPawnIndex === -1) {
    return 'Pawn not assign yet'
  }
  pawns.push(selectedPawns[unwantedPawnIndex])
  selectedPawns.splice(unwantedPawnIndex, 1)
}

const getRemaining = () => utils.stringify(pawns)
const getAssigned = () => utils.stringify(selectedPawns)

module.exports = {
  assign,
  unassign, 
  getAssigned, 
  getRemaining
}
