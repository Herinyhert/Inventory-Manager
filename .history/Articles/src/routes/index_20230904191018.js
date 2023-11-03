const { Router } = require("express");
const controllers = require("../controllers")
conts middleware

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", controllers.createArticles)

module.exports = router;