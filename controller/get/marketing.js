exports.marketing =async (req,res,next)=>{
    try {
        res.render("marketing")
    } catch (error) {
        console.log(error)
        next()
    }
}