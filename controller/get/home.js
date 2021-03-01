exports.home =async (req,res,next)=>{
    try {
        res.status(200).render("home",{title:"آریا تجارت مشیز ایرانیان"})
    } catch (error) {
        console.log(error)
        next()
    }
}
