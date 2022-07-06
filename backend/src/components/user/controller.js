const model = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = process.env;

function addUser(name, password) {
	return new Promise(async (resolve, reject) => {
		if (!password || !name) {
			return reject("Faltan Datos");
		}
		const oldUser = await model.list(name);
		if (oldUser) {
			return reject("El usuario ya existe, por favor inicie sesión");
		}

		const encryptedPassword = await bcrypt.hash(password, 10);

		const user = await model.add({
			name: name,
			password: encryptedPassword,
		});

		const token = jwt.sign({ userId: user._id, name }, "process.env.TOKEN_KEY");
		user.token = token;
		return resolve(user);
	});
}
function login(name, password) {
	return new Promise(async (resolve, reject) => {
		if (!(password && name)) {
			return reject("Faltan Datos");
		}
		const user = await model.list(name);

		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
				{ user_id: user._id, name },
				"process.env.TOKEN_KEY",
			);
			user.token = token;
			resolve(user);
		}
		reject("Usuario o contraseña incorrectos");
	});
}

function getUser(filterUser = null) {
	return new Promise(async (resolve, reject) => {
		return resolve(model.list(filterUser));
	});
}

function updateUser(name, newName, newPassword) {
	return new Promise(async (resolve, reject) => {
		if (!(newPassword && newName)) {
			reject("Faltan Datos");
		}
		return resolve(model.list(name, newName, newPassword));
	});
}

module.exports = {
	addUser,
	getUser,
	login,
	updateUser,
};
