const { Router } = require("express");
const controllers = require("../controllers")
conts midd

const router = Router();

router.get("/", controllers.getArticles);

router.post("/", controllers.createArticles)

module.exports = router;