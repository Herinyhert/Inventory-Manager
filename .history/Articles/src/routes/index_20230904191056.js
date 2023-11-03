const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
conts middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", middlewares., controllers.createArticles)

module.exports = router;