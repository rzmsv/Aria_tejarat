const Contact = require("../../model/contact")
exports.business = (req,res,next)=>{
    const name = req.body.name
    const last_name = req.body.lastName
    const company_name = req.body.companyName
    const telephone = req.body.telephone
    const mobile = req.body.mobile
    const address = req.body.address
    const area = req.body.area
    const email = req.body.email
    const description = req.body.description
    
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
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{console.log(err)})
        res.redirect("/business")

}