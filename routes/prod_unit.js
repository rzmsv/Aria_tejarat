const router = require("express").Router();
const controllerProdUnit = require("../controller/get/prod-unit")

router.get("/prod-unit",controllerProdUnit.product_unit)

module.exports = router