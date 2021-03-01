exports.contact =async (req,res,next)=>{
    try {
        res.render("contactUs",{title:"ارتباط با آتما"})
    } catch (error) {
        console.log(error)
        next()
    }
}