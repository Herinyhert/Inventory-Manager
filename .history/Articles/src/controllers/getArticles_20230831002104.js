const Articles = require("../data");

module.exports = async (req, res) => {
    const articles = await
    res.status(200).send("articulos")
};