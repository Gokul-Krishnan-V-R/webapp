const {UserModel, AdminModel}  = require("./../db");
const { default: mongoose, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "123ABC";

async function usermiddleware(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    const token = jwt.sign({email}, JWT_SECRET)
   if(email == UserModel.findOne({email})){
    next()
   }
   else{

   }
}