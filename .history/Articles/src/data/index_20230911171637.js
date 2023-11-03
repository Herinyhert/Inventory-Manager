const articles = require("./articles.json");
const { response } = require("../utils");

module.exports = {
    list: async () => {
        return articles;
    },

    // create: async () => {
    //     throw Error("Hay un error en la BD al momento de crear el personaje")
    // },
    create: async (req, res) => {
        try {
            const newArticleData = req.body; // Obtener los datos del nuevo artículo desde la solicitud
            const newArticle = await Articles.create(newArticleData); // Pasar los datos a la función create
            response(res, 201, newArticle);
        } catch (error) {
            // Manejar errores aquí y enviar una respuesta de error adecuada
            response(res, 500, { error: "Error al crear el artículo" });
        }
};