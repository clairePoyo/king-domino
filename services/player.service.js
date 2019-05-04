const  Player = require('../classes').Player

const add = (player) => {
  formattedPlayer = new Player(player.id, player.pseudo)
  if (isInRoom(formattedPlayer.getId)) {
    return 'Player all ready in room'
  }
  players.push(player)
}

const getAll = () => JSON.stringify(players, null, 2)

const isInRoom = (playerId) => players.some((playerInRoom) => playerInRoom.id === playerId)

const remove = (playerId) => {
  if (!isInRoom(formattedPlayer.getId)) {
    return 'Player is not in room'
  }

  let playerIndex = players.findIndex(() => players.getId === playerId)
  if (playerIndex !== -1) {
    players.splice(playerIndex, 1)
  }
}

module.exports = {
  add,
  remove,
  getAll
}