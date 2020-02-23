const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shotSchema = new Schema({
  _id:  { type: Number, required: true },
  gamer: { type: String, required: true },
  fieldA: { type: Number, required: true },
  fieldB: { type: Number, required: true },
  shot: { type: Boolean, required: true },
});

const Shot = mongoose.model('Shot', shotSchema);

module.exports = Shot;