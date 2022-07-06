const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema({
  titulo: String,
  director: String,
  reseña: String,
  actores: [String],
  año: Number,
  src: String,
  portada: String
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
