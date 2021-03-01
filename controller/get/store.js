exports.store =async (req,res,next)=>{
    try {
        res.render("store",{title:"فروشگاه اینترنتی"})
    } catch (error) {
        console.log(error)
        next()
    }
}