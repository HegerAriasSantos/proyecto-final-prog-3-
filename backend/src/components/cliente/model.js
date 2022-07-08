const schema = require("./schema");

function addCliente(cliente) {
	const myCliente = new schema(cliente);
	myCliente.save();
}

function getCliente() {
	return new Promise((resolve, reject) => {
		resolve(schema.find());
	});
}
function getOwnCliente(id) {
	return new Promise((resolve, reject) => {
		resolve(schema.findById(id));
	});
}

async function updateCliente(id, cliente) {
	const foundCliente = await schema.findById(id);
	const { nombre, apellido, cedula, telefono, direccion, deuda, abono, total } =
		cliente;
	foundCliente.nombre = nombre;
	foundCliente.apellido = apellido;
	foundCliente.cedula = cedula;
	foundCliente.deuda = deuda;
	foundCliente.abono = abono;
	foundCliente.telefono = telefono;
	foundCliente.direccion = direccion;
	foundCliente.total = total;
	const newCliente = await foundCliente.save();
	return newCliente;
}

async function deleteMessage(_id) {
	return schema.deleteOne({ _id });
}

module.exports = {
	add: addCliente,
	get: getCliente,
	getOne: getOwnCliente,
	update: updateCliente,
	delete: deleteMessage,
};
