exports.marketing =async (req,res,next)=>{
    try {
        res.render("marketing",{title:"بازاریابی"})
    } catch (error) {
        console.log(error)
        next()
    }
}