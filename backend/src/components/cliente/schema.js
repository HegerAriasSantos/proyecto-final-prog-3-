const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema({
	nombre: String,
	apellido: String,
	cedula: String,
	telefono: String,
	direccion: String,
	deuda: Number,
	abono: Number,
	total: Number,
});

const model = mongoose.model("Clientes", mySchema);
module.exports = model;
