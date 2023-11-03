const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/", controllers.getArticles);

router

module.exports = router;