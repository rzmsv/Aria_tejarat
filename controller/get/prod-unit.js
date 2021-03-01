exports.product_unit = async (req,res,next)=>{
    try {
        res.render("prod_unit",{title:"فروشگاه اینترنتی"})
    } catch (error) {
        console.log(error)
        next()
    }
}