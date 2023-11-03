const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", middlewares.articleValidate, controllers.createArticles)

module.exports = router;