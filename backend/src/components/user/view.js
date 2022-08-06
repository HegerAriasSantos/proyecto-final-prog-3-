const express = require("express");
const router = express.Router();
const response = require("../../lib/response");
const controller = require("./controller");
const auth = require("../../middleware/auth");

router.post("/register", (req, res) => {
	const { name, password } = req.body;
	controller
		.addUser(name, password)
		.then(data => {
			response.success(req, res, data.user, 200, data.token);
		})
		.catch(e => {
			response.error(req, res, e, 500);
		});
});

router.post("/login", (req, res) => {
	const { name, password } = req.body;
	controller
		.login(name, password)
		.then(data => {
			response.success(req, res, data.user, 200, data.token);
		})
		.catch(e => {
			response.error(req, res, "Unexpecter error", 500);
		});
});

router.post("/auth", auth, async (req, res) => {
	response.success(req, res, "Welcome", 200);
});

module.exports = router;
