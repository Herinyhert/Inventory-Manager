const Articles = require("../data");

module.exports = async (req, res) => {
    const articles = await Articles
    res.status(200).send("articulos")
};