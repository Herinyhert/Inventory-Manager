const { ClientError } = require("../utils/errors")

module.exports = (req, res, ) => {
    const { name } = req.body;
    if (name) return next();
    else throw new ClientError("Error en el nombre", 401)
};