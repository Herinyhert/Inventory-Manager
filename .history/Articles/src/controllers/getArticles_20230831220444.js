const Articles = require("../data");
const 

module.exports = async (req, res) => {
    const articles = await Articles.list();
    res.status(200).json(articles);
};