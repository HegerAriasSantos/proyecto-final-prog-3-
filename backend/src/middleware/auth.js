const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const { token } = req.headers;

	if (!token) {
		return res.status(403).send("Falta el token");
	}
	try {
		const decoded = jwt.verify(token, "process.env.TOKEN_KEY");
		console.log(decoded);
	} catch (err) {
		return res.status(401).send("Token incorrecto");
	}
	return next();
};

module.exports = verifyToken;
