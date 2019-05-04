const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;
const territory = require('./territory.model')

const tileSchema = new Schema({
  id: {
    type: ObjectId,
    index: true,
  },
  room_id: {
    type: String
  },
  tile_number: {
    type: Number
  },
  player_id: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['inPile', 'unselected', 'selected', 'played'],
    default: 'inPile'
  },
  territories: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: territory
    }],
    validate: [(val) => val.length === 2, '{PATH} exceeds the limit of 2 territories']
  }
});

module.exports = mongoose.model('Tile', tileSchema)