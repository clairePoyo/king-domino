const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const kingSchema = new Schema({
  id: {
    type: ObjectId,
    index: true,
  },
  color: {
    type: String,
    enum: ['pink', 'yellow', 'green', 'blue'],
    default: null
  },
});

module.exports = mongoose.model('King', kingSchema)