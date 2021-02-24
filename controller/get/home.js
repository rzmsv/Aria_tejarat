exports.home =async (req,res,next)=>{
    try {
        res.status(200).render("home")
    } catch (error) {
        console.log(error)
        next()
    }
}
