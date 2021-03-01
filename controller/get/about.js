exports.about = async (req,res,next)=>{
    try {
        res.render("about",{title:"درباره آتما"})
    } catch (error) {
        console.log(error)
        next()
    }
}