exports.business = (req,res,next)=>{
    console.log(req.flash('ok'))
    res.render("business")
}