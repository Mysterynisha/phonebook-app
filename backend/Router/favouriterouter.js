const express=require("express")
const favouriterouter=express.Router()
const {getallfavController,createAllfavController}=require('../controller/favController')

favouriterouter.get('/favourite',getallfavController)
favouriterouter.post('/favourite',createAllfavController)


module.exports=favouriterouter