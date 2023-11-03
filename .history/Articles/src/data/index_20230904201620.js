const articles = require("./articles.json");

module.exports = {
    list: async () => {
        return articles;
    },

    create: async () => {
        throw Error("Hay un error en la BD al momento de crear el personaje")
    }
};