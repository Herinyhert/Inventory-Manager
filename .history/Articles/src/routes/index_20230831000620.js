const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", controllers.crea)

module.exports = router;