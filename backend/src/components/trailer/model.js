const schema = require("./schema");

function addTrailer(trailer) {
	const myTrailer = new schema(trailer);
	myTrailer.save();
}

function getTrailer() {
	return new Promise((resolve, reject) => {
		resolve(schema.find());
	});
}
function getOwnTrailer(id) {
	return new Promise((resolve, reject) => {
		resolve(schema.findById(id));
	});
}

async function updateTrailer(id, trailer) {
	const foundTrailer = await schema.findById(id);
	const { actores, titulo, año, director, reseña, src, portada } = trailer;
	foundTrailer.actores = actores;
	foundTrailer.titulo = titulo;
	foundTrailer.año = año;
	foundTrailer.src = src;
	foundTrailer.portada = portada;
	foundTrailer.director = director;
	foundTrailer.reseña = reseña;
	const newTrailer = await foundTrailer.save();
	return newTrailer;
}

async function deleteMessage(_id) {
	return schema.deleteOne({ _id });
}

module.exports = {
	add: addTrailer,
	get: getTrailer,
	getOne: getOwnTrailer,
	update: updateTrailer,
	delete: deleteMessage,
};
