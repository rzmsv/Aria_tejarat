exports.about = async (req,res,next)=>{
    try {
        res.render("about")
    } catch (error) {
        console.log(error)
        next()
    }
}