const { catchedAsync } = require("../utils");

module.exports = {require
    getArticles: catchedAsync ("./getArticles"),
    createArticles: require("./createArticles"),
}