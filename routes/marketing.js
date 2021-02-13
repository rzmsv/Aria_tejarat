const router = require("express").Router();
const controllerMarketing = require("../controller/get/marketing")

router.get("/marketing",controllerMarketing.marketing)

module.exports = router