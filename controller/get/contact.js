exports.contact =async (req,res,next)=>{
    try {
        res.render("contactUs")
    } catch (error) {
        console.log(error)
        next()
    }
}