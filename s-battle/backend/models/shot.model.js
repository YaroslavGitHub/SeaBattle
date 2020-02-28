const mongoose = require( 'mongoose' ),

   { Schema } = mongoose,

   shotSchema = new Schema({
      _id: { type: Number, required: true },
      gamer: { type: String, required: true },
      fieldA: { type: Number, required: true },
      fieldB: { type: Number, required: true },
      shot: { type: Boolean, required: true, default: false },
      ship: { type: Boolean, required: true }
   }),

   Shot = mongoose.model( 'Shot', shotSchema );

module.exports = Shot;
