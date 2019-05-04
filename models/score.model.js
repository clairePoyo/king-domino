const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const scoreSchema = new Schema({
  id: {
    type: ObjectId,
  },
  date: {
    type: String,
    enum: ['field', 'lake', 'forest', 'swamp', 'meadow', 'mine'],
  },
  score: {
    type: Number
  },
  party_type: {
    type: String,
    enum: ['classic', 'Dynasty', 'The middle Kingdom', 'Harmony', 'The Mighty Duel']
  },
  status: {
    type: String,
    enum: ['lose', 'won']
  }
});

module.exports = mongoose.model('Score', scoreSchema)