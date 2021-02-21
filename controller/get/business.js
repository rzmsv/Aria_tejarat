exports.business =async (req,res,next)=>{
    try {
        console.log(req.flash('ok'))
        res.render("business")
    } catch (error) {
        console.log(error)
        next()
    }
}