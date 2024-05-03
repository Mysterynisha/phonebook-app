const favourite = require("../Model/favourite")


const getallfavController=async (req,res)=>{
    try{
        let response=await favourite.find()
        res.json({
            "status":"201",
            "message":" Responsed Successfully ",
            "data":response
          })
    
         } catch (error) {
          res.json({
            "status":"404",
            "message":"Something went wrong",
            "error":error
          })
         }
        }


       const createAllfavController=async (req,res)=>{
           let obj=req.body
           console.log(obj);
        try{
            let response=await favourite.create(obj)
            res.json({
                "status":"201",
                "message":" Responsed Successfully ",
                "data":response
              })
        
             } catch (error) {
              res.json({
                "status":"404",
                "message":"Something went wrong",
                "error":error
              })
             }

       } 


module.exports={getallfavController,createAllfavController}