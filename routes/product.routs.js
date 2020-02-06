const router=require('express').Router()
const productController=require('../controllers/product.controller.js')

// router.get('/:id',productController.getproduct)


router.get('/drama',productController.getDrama)
router.get('/show',productController.getShow)
router.get('/kpop',productController.getKpop)
router.get('/news',productController.getNews)
module.exports=router

