const user=require("../models/UserModel")
const bcrypt=require("bcrypt");
const dotenv=require("dotenv");

const { json } = require("express");
const jsonwebtoken = require('jsonwebtoken');

dotenv.config()

let blacklistedTokens=[]

const register = async (req,res)=>{
    const {name,email,password} = req.body
    const emailCheck= await user.findOne({"email":email})
    if(emailCheck){
        res.json({"msg":"Email Exists"})
    }
    else{
        const newpassword= await bcrypt.hash(password,10)
         const cuser = new user({
                name,
                email,
                password:newpassword,
            })
            await cuser.save()
            res.status(200).json({"MESSAGE":"Registration Successful"})
    }
}

const login= async  (req,res)=>{
    const {email,password} = req.body

    const login_val= await user.findOne({"email":email})
    if(login_val){
        if(await bcrypt.compare(password,login_val.password)){
        let payload={
            "id":login_val._id,
            "email":email
        }
    jsonwebtoken.sign(payload,process.env.SECRET,{expiresIn:"1h"},(err,data)=>{
            if(err){
                res.status(500).json({"error":"Unable to generate the JWT Token"})
            }
            else{
                res.status(200).json({"msg":"login Successful","tkn":data})
            }
        })
        
        }
        else{
            res.status(401).json({"msg":"Password Wrong"})
        }
    }
    else{ 
        res.status(401).json({"msg":"Email Doesn't Exists"})
    }
}

const logout = (req, res) => {
    const token = req.headers['authorization']; 
    if (token) {
        blacklistedTokens.push(token);
        res.status(200).json({ "msg": "Logout Successful" });
    } else {
        res.status(400).json({ "msg": "No token provided" });
    }
};

const checkTokenBlacklist = (req, res, next) => {
    const token = req.headers['authorization'];
    if (blacklistedTokens.includes(token)) {
        return res.status(401).json({ "msg": "Unauthorized: Token has been invalidated" });
    }
    next();
};


module.exports = {register,login,logout}