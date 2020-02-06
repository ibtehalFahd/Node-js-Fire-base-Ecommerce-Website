const router=require('express').Router()
const bp=require('body-parser')
const localStorage=require('sessionstorage')
const authGard=require('./gardes/auth.gard.js')


router.get('/',authGard.isAuth,(req,res)=>{
    var product=[]
    for(i=localStorage.getItem('index');i>=1;i--)
            {
                if(localStorage.getItem(i))
                    product.push(localStorage.getItem(i))
            }

res.render('cart',{
    isUser:req.session.userId,
    isAdmin:req.session.isAdmin,
    title:"carts",
    items:product
})
})

router.post('/',authGard.isAuth,bp.urlencoded({extended:true}),(req,res)=>{

localStorage.setItem('index',localStorage.getItem('index')+1)
var product={"id":localStorage.getItem('index'),"name":req.body.name,"count":1,"price":req.body.price,"img":req.body.img}
localStorage.setItem(localStorage.getItem('index'),product)
})
router.post('/deleteProduct',authGard.isAuth,bp.urlencoded({extended:true}),(req,res)=>{
    localStorage.removeItem(req.body.id)
    res.redirect('/cart')
    })
router.post('/deleteAll',authGard.isAuth,bp.urlencoded({extended:true}),(req,res)=>{
    localStorage.clear()
    res.redirect('/cart')
    })
module.exports=router