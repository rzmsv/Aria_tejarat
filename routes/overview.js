const router = require("express").Router();
const controllerOverview = require("../controller/get/overview")

router.get("/overview",controllerOverview.overview)

module.exports = router