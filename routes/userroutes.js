
const {Router} = require("express");
const userrouter = Router();
const {UserModel} = require("../db")
const { default: mongoose, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "123ABC";
const express = require("express");
userrouter.use(express.json());
const {usermiddleware} = require("./../middilewares/usermiddileware")

    userrouter.post('/login', async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
        const checkuser = await UserModel.findOne({
            email: email,
            password: password
        })
       
        if (checkuser){
            let token = jwt.sign({id: checkuser._id.toString()}, JWT_SECRET);
            res.json({
            msg: "logged in",
            token: token
        })
    }else{
            res.status(401).json({
                msg: "not authorized "
            })
        }
    });

    userrouter.post('/signup', async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
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

    userrouter.get('/purchases', usermiddleware, (req, res)=>{
        res.json({
            msg: "your purchases"
        })
    });

module.exports = {
    userrouter: userrouter,
    JWT_SECRET: JWT_SECRET
}