const {Router} = require("express");
const adminrouter = Router();
const {AdminModel} = require("./../db");
const { default: mongoose, model } = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
adminrouter.use(express.json());
const jwt = require("jsonwebtoken");
const JWT_ADMIN = "123ZYSNCJ"

adminrouter.post('/signup', async (req, res)=>{
    const email = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);
    const username = req.body.username
    const checkuser = await AdminModel.findOne({
        email: email
    })
    if(checkuser){
        res.json({
            msg:"User already Regstered"
        })
    }else{
    await AdminModel.create({
        email: email,
        password: password,
        name: username
    })

    res.json({
        msg: "signed up successfully"
    })}
    });

    adminrouter.post('/login', async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
         const checkuser = await AdminModel.findOne({
            email: email
        })
    
        if (checkuser){
            const checkpassword = await bcrypt.compare(password, checkuser.password);
           if(checkpassword){
            let token = jwt.sign({id: checkuser._id.toString()}, JWT_ADMIN);
            res.json({
            msg: "logged in",
            token: token
        })}else{
            res.status(401).json({
                msg: "who are you"
            })
        }
    }else{
            res.status(401).json({
                msg: "not authorized "
            })
        }
    });
    adminrouter.post('/create', (req, res)=>{

    });
    adminrouter.put('/update', (req, res)=>{

    });

module.exports = {
    adminrouter: adminrouter
} 