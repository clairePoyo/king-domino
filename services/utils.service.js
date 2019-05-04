const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const stringify = (object) => {
  try {
    return JSON.stringify(object, null, 2)
  }
  catch(error) {
    return object
  }
}

module.exports = {
  getRandomInt,
  stringify
}
