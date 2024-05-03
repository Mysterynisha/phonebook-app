const  mongoose  = require("mongoose");



  const phonebookapp=new mongoose.Schema(
    {
     name:{
        type:String,
        required:[true,"name required"],
        unique:true
     },

     email:{
          type:String,
          required:true
     },

     mobile:{
        type:Number,
        required:true,
        unique:true,
        
    },
   

   altmob:{
    type:Number,
    
},

    groups:{
        type:String,
         enum:{
            values:['friends','family','company','school','others'],
            message:`{value} is not supported`
         }

    },


    }
  )



  const phonebook= mongoose.model("phonebook",phonebookapp)


  module.exports=phonebook