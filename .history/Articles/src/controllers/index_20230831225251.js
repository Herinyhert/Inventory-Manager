const { catchedAsync } = require("../utils");

module.exports = {
    getArticles: catchedAsync(require("./getArticles")),
    createArticles: (require("./createArticles")),
}