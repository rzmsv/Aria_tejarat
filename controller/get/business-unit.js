exports.business_unit = async (req,res,next)=>{
    try {
        res.render("business-unit")
    } catch (error) {
        console.log(error)
        next()
    }
}