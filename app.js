const express=require('express')
const path=require('path')
const bp=require('body-parser')

const flash=require('connect-flash')
const session=require('express-session')
const sessionStore=require('connect-mongodb-session')(session)
const STORE= new sessionStore({
    uri:'mongodb://localhost:27017/mashtal',
    collection:'sessions'

})


var hr=require('./routes/home.routs')
var pr=require('./routes/product.routs')
var ar=require('./routes/auth.routs')
var cr=require('./routes/cart.routs')
var adminr=require('./routes/admin.routs')

const app=express()

app.set('view engine','ejs')
app.set('views','views')

const staticFiles=express.static(path.join(__dirname,'assests'))
const staticImg=express.static(path.join(__dirname,'images'))
const staticImge=express.static(path.join(__dirname,'img'))
app.use(staticFiles,staticImg,staticImge)
app.use(session({
    secret:'This is my comlex string to hash sission',
    saveUninitialized:false,
    resave:true,
    store:STORE
}))
app.use(flash())
app.use('/',hr)
app.use('/',ar)
app.use('/cart',cr)
app.use('/products',pr)
app.use('/admin',adminr)
app.use('/details',bp.urlencoded({extended:true}),(req,res)=>{
    res.render("product",{
        isUser:req.session.userId,
         isAdmin:req.session.isAdmin,
        title:"Details",
        product:{"name":req.body.name,"discription":req.body.desc,"count":req.body.count,"price":req.body.price,"cat":req.body.cat,"img":req.body.img}
    })
})

app.listen(5000,()=>console.log('welcome to korea tv shop'))