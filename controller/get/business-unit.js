exports.business_unit = async (req,res,next)=>{
    try {
        res.render("business-unit",{title:"واحد بازرگانی"})
    } catch (error) {
        console.log(error)
        next()
    }
}