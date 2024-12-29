const {UserModel, AdminModel}  = require("./../db");
const { default: mongoose, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "123ABC";



async function usermiddleware(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    const token = req.headers.token;
  try{ if(email == UserModel.findOne({email:email}) & jwt.verify(token, JWT_SECRET)){
    next()
   }
   else{
        res.json({
            msg: "middleware verification unsuccessfull"
        })
   }
}catch(e){
    res.json({
        msg:" some error "
    })
}
}
module.exports ={
    usermiddleware
}