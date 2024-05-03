const phonebook = require("../Model/Schema")


const getphonebook=async(req,res)=>{
    try{
    let response=await phonebook.find()
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


    
    
     



const postphonebook=async(req,res)=>{
   try {
     let data=req.body
     console.log(data);
 let response=await phonebook.create(data)
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


const deletephonebook=async(req,res)=>{
  let data=req.params.id
   console.log(data);

  try {
     let response=await phonebook.findByIdAndDelete(data)
     res.json({
      "status":"200",
      "message":"deleted successfully",
      "data":response
     })
  } 
  catch (error) {
    res.json({
      "status":"404",
      "message":"Something went wrong",
      "error":error
    })

  }
    }

    const updatephonebook=async(req,res)=>{
     try {
       let id=req.params.id
       console.log(id);
       const obj=req.body
       console.log(obj);
       let response=await phonebook.findByIdAndUpdate(id,obj,{new:true})
       res.json({
        "status":"201",
        "message":" updated Successfully ",
        "data":response
      })
      
      } 
      catch (error)
       {
      res.json({
        "status":"404",
        "message":"Something went wrong",
        "error":error
      })  
    }
  }
   
   
  const viewphonebook =async(req,res)=>{
    try {
      let id=req.params.id
      console.log(id);
    
      let response=await phonebook.find({_id:id})
      res.json({
       "status":"201",
       "message":" viewed Successfully ",
       "data":response
     })
     
     } 
     catch (error)
      {
     res.json({
       "status":"404",
       "message":"Something went wrong",
       "error":error
     })  
   }
 }




module.exports={getphonebook,postphonebook,deletephonebook,updatephonebook,viewphonebook}