const express=require("express")
require("dotenv").config()
const connect=require("./Database/database.js")
const router=require('./Router/router.js')
const favouriterouter=require('./Router/favouriterouter.js')
const cors=require("cors")

const app=express()

connect()
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use('/',favouriterouter)


app.get('/',(req,res)=>{
    res.send("phonebook app")
})

const port=process.env.port || 9000
app.listen(port,()=>{
    console.log(`this port is listening to ${port}`);
})