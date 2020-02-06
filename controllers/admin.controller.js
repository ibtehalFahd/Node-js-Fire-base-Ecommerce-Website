var adminmodel=require('../models/auth.model.js')
const vr=require('express-validator').validationResult

exports.getUsers=(req,res,next)=>{
    adminmodel.getUsers().then(results=>{
        if(results)
        res.render('users',{
            isUser:req.session.userId,
            isAdmin:req.session.isAdmin,
            users:results,
            title:"manageUsers"
            })
        else
        res.render('users',{
            isUser:req.session.userId,
            isAdmin:req.session.isAdmin,
            title:"manageUsers"
            })

    })
    
}
exports.removeUsers=(req,res,next)=>{
   adminmodel.deleteUsers(req.body.uid).then((r)=>{
        res.redirect('/admin/manageUsers')

   }).catch((err)=>{

    res.redirect('/admin/manageUsers')

   })
}

exports.getadd=(req,res,next)=>{
    
    res.render('addProduct',{
    vError:req.flash('vErr'),
    aderr:req.flash('aderr'),
    isUser:req.session.userId,
    isAdmin:req.session.isAdmin,
    title:"addProduct"
    })
}
exports.getlist=(req,res,next)=>{
    
    res.render('listProducts',{
    vError:req.flash('vErr'),
    aderr:req.flash('aderr'),
    isUser:req.session.userId,
    isAdmin:req.session.isAdmin,
    title:"listProducts",
    })
}

exports.getedit=(req,res,next)=>{
    res.redirect('listProduct')
}

exports.postedit=(req,res,next)=>{
    res.render('editProduct',{
        vError:req.flash('vErr'),
        aderr:req.flash('aderr'),
        isUser:req.session.userId,
        isAdmin:req.session.isAdmin,
        title:"editProduct",
        id:req.body.id,
        name:req.body.name,
        cat:req.body.cat,
        disc:req.body.disc,
        price:req.body.price,
        count:req.body.count
        })

    }

exports.getremove=(req,res,next)=>{
        res.redirect('listProduct')
}

exports.postremove=(req,res,next)=>{
    
    res.render('deleteProduct',{
    vError:req.flash('vErr'),
    aderr:req.flash('aderr'),
    isUser:req.session.userId,
    isAdmin:req.session.isAdmin,
    title:"deleteProduct",
    doc:req.body.doc
    })
}