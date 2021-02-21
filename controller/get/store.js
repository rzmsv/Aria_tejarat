exports.store =async (req,res,next)=>{
    try {
        res.render("store")
    } catch (error) {
        console.log(error)
        next()
    }
}