// async function adminmiddleware(req, res, next){
//     const email = req.body.email;
//     const password = req.body.password;

// }

const {UserModel, AdminModel}  = require("./../db");
const { default: mongoose, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN } = require("../config");



async function adminmiddleware(req, res, next){
    // const email = req.body.email;
    // const password = req.body.password;
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN )
    if(decoded){
        req.userId = decoded.id;
        next()
    }else {
        res.status(401).json({
            msg: "auth failed"
        })
    }
}
module.exports ={
    adminmiddleware: adminmiddleware
}