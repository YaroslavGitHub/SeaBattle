const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamerSchema = new Schema({
  gamer: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Gamer = mongoose.model('Gamer', gamerSchema);

module.exports = Gamer;