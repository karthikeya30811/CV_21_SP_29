const task = require("../controllers/TaskController")
const jwtT = require("../JWT/jwt")
const express = require("express")
const router=express.Router()

router.get("/task",jwtT.verifyToken,task.insertTask)

module.exports=router