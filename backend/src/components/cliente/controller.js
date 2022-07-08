const model = require("./model");

function addCliente(nombre, apellido, cedula, telefono, direccion) {
	return new Promise((resolve, reject) => {
		if (!nombre || !apellido || !cedula) {
			console.error("Faltan datos");
			return reject("Datos incorrectos");
		}

		let fullCliente = {
			nombre,
			apellido,
			cedula,
			telefono,
			direccion,
			deuda: 0,
			abono: 0,
			total: 0,
		};

		model.add(fullCliente);
		resolve(fullCliente);
	});
}
function getCliente(id = null) {
	return new Promise((resolve, reject) => {
		const clientes = model.get(id);
		if (!clientes) {
			reject("No hay mensajes disponibles");
			return false;
		}
		resolve(clientes);
	});
}
function getOwnCliente(id) {
	return new Promise((resolve, reject) => {
		const clientes = model.getOne(id);
		if (!clientes) {
			reject("No hay mensajes disponibles");
			return false;
		}
		resolve(clientes);
	});
}
async function updateCliente(id, cliente) {
	return new Promise(async (resolve, reject) => {
		if (!id || !cliente) {
			reject("Datos incorrectos");
			return false;
		}
		const response = await model.update(id, cliente);
		resolve(response);
	});
}

async function deleteCliente(id) {
	return new Promise(async (resolve, reject) => {
		const response = await model.delete(id);
		if (!response) {
			reject("Datos incorrectos");
		}
		resolve(response);
	});
}

module.exports = {
	addCliente,
	getCliente,
	getOwnCliente,
	updateCliente,
	deleteCliente,
};
