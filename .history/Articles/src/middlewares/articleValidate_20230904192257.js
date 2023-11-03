const { ClientError } = require("../utils/errors")

module.exports = () => {
    const { name } = req.body;
    if (name) return nerxt();
    else throw Error("Falta el nombre del producto")
};