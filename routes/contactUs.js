const router = require("express").Router();
const controllerContact = require("../controller/get/contact")
const postMail = require("../controller/post/contactUs")

router.get("/contact",controllerContact.contact)
router.post("/contact",postMail.postContact)

module.exports = router