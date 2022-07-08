// const express = require("express");
const cliente = require("../components/cliente/view");
const user = require("../components/user/view");

const routes = function (server) {
	server.use("/cliente", cliente);
	server.use("/user", user);
};
module.exports = routes;
