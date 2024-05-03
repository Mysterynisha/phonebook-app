const express=require("express")
const router=express.Router()
const {getphonebook,postphonebook,deletephonebook,updatephonebook,viewphonebook}=require('../controller/controller.js')
router.get('/phonebook',getphonebook)
router.post('/phonebook',postphonebook)
router.delete('/phonebook/:id',deletephonebook)
router.put('/phonebook/:id',updatephonebook)
router.get('/phonebook/view/:id',viewphonebook)




module.exports=router