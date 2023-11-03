const articles = require("./articles.json");

module.exports = {
    list: async () => {
        return articles;
    },

    // create: async () => {
    //     throw Error("Hay un error en la BD al momento de crear el personaje")
    // },
    create  async (newArticleData) => {
        const newArticle = {
            id: uuidv4(), // Generar un ID único
            ...newArticleData, // Copiar los datos del nuevo artículo
        };
    
        articles.push(newArticle); // Agregar el nuevo artículo al arreglo de artículos
    
        return newArticle; // Devolver el nuevo artículo creado
    }
};