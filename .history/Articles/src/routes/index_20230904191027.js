const { Router } = require("express");
const controllers = require("../controllers")
conts middlewares = requ

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", controllers.createArticles)

module.exports = router;