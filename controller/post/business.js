const Contact = require("../../model/contact")
const {validationResult} = require("express-validator/check")
exports.business =async (req,res,next)=>{
    try {
        const name = req.body.name
        const last_name = req.body.lastName
        const company_name = req.body.companyName
        const telephone = req.body.telephone
        const mobile = req.body.mobile
        const address = req.body.address
        const area = req.body.area
        const email = req.body.email
        const description = req.body.description
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.render("business",{error:errors.array()[0].msg})
        }
            Contact.create({
                name:name,
                lastName:last_name,
                telephone:telephone,
                mobile:mobile,
                email:email,
                company_name:company_name,
                address:address,
                area:area,
                description:description,
            })
            .then((result)=>{
                req.session.isLoggedIn = true
                req.flash("ok","درخواست شما با موفقیت ثبت شد")
                return res.render("business",{signupMessage:req.flash("ok")})
            })
            .catch((err)=>{console.log(err)
                res.redirect("/")
            })
    } catch (error) {
        console.log(error)
        return new Error(error)
    }
}