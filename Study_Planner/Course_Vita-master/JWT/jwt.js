const dotenv=require("dotenv");
const jwt = require('jsonwebtoken');

dotenv.config()


const verifyToken = (req, res, next) => { 
    const token = req.headers["w-access-token"]; 
    if (!token) { 
        return res.status(403).send({ 
            message: "Access token is required" 
        }) 
    } 
 
    try { 
        const decoded = jwt.verify(token, process.env.SECRET); 
   
        req.user = decoded; 
 
        next(); 
    } catch (e) { 
     
        return res.status(401).send({ 
            message: "Invalid access token" 
        }); 
    } 
};
module.exports = {verifyToken}