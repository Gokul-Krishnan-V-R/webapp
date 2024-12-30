
const {Router} = require("express");
const userrouter = Router();
const {UserModel} = require("../db")
const { default: mongoose, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const express = require("express");
userrouter.use(express.json());
const {usermiddleware} = require("./../middilewares/usermiddileware")
const bcrypt = require("bcrypt");
const {z} = require("zod");
const { JWT_USER } = require("../config");


    userrouter.post('/login', async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
         const checkuser = await UserModel.findOne({
            email: email
        })
    
        if (checkuser){
            const checkpassword = await bcrypt.compare(password, checkuser.password);
           if(checkpassword){
            let token = jwt.sign({id: checkuser._id.toString()}, JWT_USER);
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

    userrouter.post('/signup', async (req, res)=>{
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 10);
        const username = req.body.username
        const checkuser = await UserModel.findOne({
            email: email
        })
        if(checkuser){
            res.json({
                msg:"User already Regstered"
            })
        }else{
        await UserModel.create({
            email: email,
            password: password,
            name: username
        })

        res.json({
            msg: "signed up successfully"
        })}
    });

    userrouter.post('/purchase', (req, res)=>{

    });

    userrouter.get('/purchases', usermiddleware, async (req, res)=>{
        const userId = req.userId;
        const user = await UserModel.findOne({
            _id: userId
        })
        if(user){res.json({
            msg: "your purchases"
        })}else{
            res.status(401).json({
                msg: "Who are you ...!"
            })
        }
    });

module.exports = {
    userrouter: userrouter,
    JWT_USER: JWT_USER
}