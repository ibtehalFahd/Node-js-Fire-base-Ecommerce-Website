var productsModel=require('../models/home.model.js')

exports.getDrama=(req,res,next)=>{
        res.render('products',{
            isUser:req.session.userId,
            isAdmin:req.session.isAdmin,
            title:"Drama",
            cat:'drama'
            
        
    })
}

exports.getShow=(req,res,next)=>{
    
    res.render('products',{
        isUser:req.session.userId,
        isAdmin:req.session.isAdmin,
        title:"ComedyShow",
        cat:'show'
    
})
}
exports.getKpop=(req,res,next)=>{
    
    res.render('products',{
        isUser:req.session.userId,
        isAdmin:req.session.isAdmin,
        title:"Kpop",
        cat:'movie'
    
})
}
exports.getNews=(req,res,next)=>{
    
    res.render('products',{
        isUser:req.session.userId,
        isAdmin:req.session.isAdmin,
        title:"News",
        cat:'news'
    
})
}