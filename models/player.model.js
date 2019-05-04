const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const playerSchema = new Schema({
  id: {
    type: ObjectId,
    index: true,
  },
  pseudo: {
   type: String,
   unique: true 
  }
});

module.exports = mongoose.model('Player', playerSchema)