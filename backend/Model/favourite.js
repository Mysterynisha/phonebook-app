const mongoose  = require("mongoose");


const favouriteSchema=mongoose.Schema(
    {
        favourite:{
            type:Boolean,
            default:false
        },

        contactId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Contact"
        }
    }
)



const favourite=mongoose.model("favourite",favouriteSchema)

module.exports=favourite