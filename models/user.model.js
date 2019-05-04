const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;
const Score = require('./score.model')

const userSchema = new Schema({
  id: {
    type: ObjectId,
    index: true,
  },
  pseudo: {
   type: String,
   unique: true 
  },
  scores : {
    type: [{
      type: Schema.Types.ObjectId,
      ref: Score
    }],
    validate: [(val) => val.length === 2, '{PATH} exceeds the limit of 2 territories']
  }
});

module.exports = mongoose.model('User', userSchema)