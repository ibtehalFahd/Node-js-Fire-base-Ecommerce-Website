const router=require('express').Router()
const bp=require('body-parser')
const multer=require('multer')
const check=require('express-validator').check
const adminCOntroller=require('../controllers/admin.controller.js')
const adminGard=require('./gardes/admin.gard.js')
router.get('/addProduct',adminGard.isadmin,adminCOntroller.getadd)

router.use('/listProduct',adminGard.isadmin,adminCOntroller.getlist)

router.post('/editProduct',bp.urlencoded({extended:true}),adminGard.isadmin,adminCOntroller.postedit)


router.get('/editProduct',adminGard.isadmin,adminCOntroller.getedit)

router.get('/deleteProduct',adminGard.isadmin,adminCOntroller.getremove)

router.post('/deleteProduct',bp.urlencoded({extended:true}),adminGard.isadmin,adminCOntroller.postremove)

router.use('/manageUsers',adminCOntroller.getUsers)

router.use('/deleteUsers',bp.urlencoded({extended:true}),adminCOntroller.removeUsers)

module.exports=router