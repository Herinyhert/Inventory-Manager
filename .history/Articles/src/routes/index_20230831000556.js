const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/", controllers.getArticles);


module.exports = router;