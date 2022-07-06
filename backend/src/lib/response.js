exports.success = function (req, res, message, status) {
	res.status(status).send({
		body: message,
	});
};
exports.error = function (req, res, message, status) {
	res.status(status).send({
		error: message,
	});
};
