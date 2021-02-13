const router = require("express").Router();
const controllerAbout = require("../controller/get/about")

router.get("/about",controllerAbout.about)

module.exports = router