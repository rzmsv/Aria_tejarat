const router = require("express").Router();
const controllerBusiness = require("../controller/get/business")
const controllerPostBusiness = require("../controller/post/business")

router.get("/business",controllerBusiness.business)
router.post("/business",controllerPostBusiness.business)

module.exports = router