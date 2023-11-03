const Articles = require("../data");
const { response } = require("../utils")

module.exports = (req, res) => {
    res.status(200).send("creando el articulo")
};