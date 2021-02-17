const router = require("express").Router();
const {check,body} = require("express-validator")
const controllerBusiness = require("../controller/get/business")
const controllerPostBusiness = require("../controller/post/business")

router.get("/business",controllerBusiness.business)
router.post("/business",
[check('email')
.isEmail()
.withMessage("Please enter a valid email."),
body("name").isLength({min:3}).withMessage("تعداد کاراکترهای نام باید بیشتر از ۳ حرف باشد"),
body("lastName").isLength({min:3}).withMessage("تعداد کاراکترهای نام خانوادگی باید بیشتر از ۳ حرف باشد").isAlphanumeric()
],
controllerPostBusiness.business)

module.exports = router