const express=require('express')
const path=require('path')
const searchController=require('../../controllers/searchController')
const router=express.Router();

router.post('/searchByName',searchController.nameAndFamilySearch)
router.post('/searchCity',searchController.city);


module.exports=router