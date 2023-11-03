const Articles = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    try {
        const newArticles = await Articles.create();
    } catch (error) {
        
    }
    res.status(200).send("creando el articulo")
};