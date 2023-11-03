const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", controllers.create)

module.exports = router;