const router = require("express").Router();
const controllerProductionUnit = require("../controller/get/production-unit")

router.get("/production-unit",controllerProductionUnit.business_unit)

module.exports = router