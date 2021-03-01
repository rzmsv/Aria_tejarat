exports.overview =async (req,res,next)=>{
    try {
        res.render("overview",{title:"توزیع مویرگی"})
    } catch (error) {
        console.log(error)
        next()
    }
}