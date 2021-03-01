exports.business =async (req,res,next)=>{
    try {
        console.log(req.flash('ok'))
        res.render("business",{title:"فرصت های شغلی"})
    } catch (error) {
        console.log(error)
        next()
    }
}