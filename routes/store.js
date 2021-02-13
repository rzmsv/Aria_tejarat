const router = require("express").Router();
const controllerStore = require("../controller/get/store")

router.get("/store",controllerStore.store)

module.exports = router