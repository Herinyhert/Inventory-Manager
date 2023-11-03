const { Router } = require("express");
const controllers = require("../controllers")
controllers

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", controllers.createArticles)

module.exports = router;