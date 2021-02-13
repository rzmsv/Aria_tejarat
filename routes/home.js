    const router = require("express").Router();
    const controllerHome = require("../controller/get/home")

    router.get("/",controllerHome.home)

    module.exports = router