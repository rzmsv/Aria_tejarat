exports.product_unit = async (req,res,next)=>{
    try {
        res.render("prod_unit")
    } catch (error) {
        console.log(error)
        next()
    }
}