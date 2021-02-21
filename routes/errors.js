exports.error404 = (req,res,next)=>{
    res.status(404).render("error404")
}

exports.error500 = (req,res,next)=>{
    res.status(500).render("error500")
}