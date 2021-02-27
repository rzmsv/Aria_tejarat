exports.production_unit = async (req,res,next)=>{
    try {
        res.render("production-unit")
    } catch (error) {
        console.log(error)
        next()
    }
}