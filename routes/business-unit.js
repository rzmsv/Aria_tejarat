const router = require("express").Router();
const controllerBusinessUnit = require("../controller/get/business-unit")

router.get("/business-unit",controllerBusinessUnit.business_unit)

module.exports = router