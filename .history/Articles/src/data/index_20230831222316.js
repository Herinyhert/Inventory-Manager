const articles = require("./articles.json");

module.exports = {
    list: async () => {
        return articles;
    },

    create: async() => {
        throw Error("Hay un error al momento de crear el personaje")
    }
};