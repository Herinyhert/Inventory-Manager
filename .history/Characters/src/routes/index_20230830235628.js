const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/", controllers.getarticles)

module.exports = router;