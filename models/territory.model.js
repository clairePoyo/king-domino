const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const territorySchema = new Schema({
  id: {
    type: ObjectId,
  },
  type: {
    type: String,
    enum: ['field', 'lake', 'forest', 'swamp', 'meadow', 'mine'],
  },
  nb_items: {
    type: Number
  },
  nb_crowns: {
    type: Number
  },
});

module.exports = mongoose.model('Territory', territorySchema)