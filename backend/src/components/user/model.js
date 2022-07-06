const schema = require("./schema");

function addUser(User) {
	const myUser = new schema(User);
	return myUser.save();
}

async function getUser(name) {
	const users = await schema.findOne({ name });
	return users;
}

async function updateUser(name, newName, newPassword) {
	const foundUser = await schema.findOne({ name });
  foundUser.name = newName ? newName : foundUser.name;
  foundUser.password = newPassword ? newPassword : foundUser.password;
  return await foundUser.save();
}

async function deleteUser(_id) {
	return schema.deleteOne({ _id });
}

module.exports = {
	add: addUser,
	list: getUser,
	update: updateUser,
	delete: deleteUser,
};
