const { catchedAsync } = req

module.exports = {
    getArticles: require("./getArticles"),
    createArticles: require("./createArticles"),
}