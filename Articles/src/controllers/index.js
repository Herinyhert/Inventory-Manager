const { catchedAsync } = require("../utils");

module.exports = {
    getArticles: catchedAsync(require("./getArticles")),
    createArticles: catchedAsync(require("./createArticles")),
}