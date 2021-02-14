const nodeMailer = require("../../utils/mail/mailer")
exports.postContact = async (req,res,next)=>{
    try{
         let from = req.body.email
         let subject = req.body.subject
         let message = req.body.message
         nodeMailer(from,subject,message)
         res.redirect("/contact")
    }catch (err){
         console.log(err)
         res.redirect("/")
    }
}