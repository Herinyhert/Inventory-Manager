const Articles = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newArticles = await Articles.create();
        response(res, 201, newArticles)

 
};