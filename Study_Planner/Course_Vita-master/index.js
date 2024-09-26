const express = require("express")
const dotenv = require('dotenv');
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors = require('cors'); 
const auth = require('./routes/userRoutes')
const task = require('./routes/TaskRoutes')

const app=express()
dotenv.config()
app.use(bodyParser.json())
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then((req,res)=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})
const port=process.env.PORT || 3000


app.use("/",auth)
app.use("/task",task)

app.listen(port,(req,res)=>{
    console.log("Server Started")
})