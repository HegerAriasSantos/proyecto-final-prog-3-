const express = require("express");
const router = express.Router();
const response = require("../../lib/response");
const controller = require("./controller");

router.get("/", function (req, res) {
	controller
		.getCliente()
		.then(data => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, e, 500);
		});
});
router.get("/:id", function (req, res) {
	const id = req.params.id;
	controller
		.getOwnCliente(id)
		.then(data => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, e, 500);
		});
});

router.post("/", function (req, res) {
	const { nombre, apellido, cedula, telefono, direccion } = req.body;
	controller
		.addCliente(nombre, apellido, cedula, telefono, direccion)
		.then(data => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, e, 500);
		});
});
router.patch("/:id", function (req, res) {
	const id = req.params.id;
	const { cliente } = req.body;
	controller
		.updateCliente(id, cliente)
		.then(data => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, e, 500);
		});
});
router.delete("/delete/:id", function (req, res) {
	const id = req.params.id;
	controller
		.deleteCliente(id)
		.then(data => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, e, 500);
		});
});

module.exports = router;
