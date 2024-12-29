
const {Router} = require("express");
const userrouter = Router();
const {UserModel} = require("../../db")
const { default: mongoose, model } = require("mongoose");
mongoose.connect("mongodb+srv://todoowner:rezFbNPR46yj0X0l@cluster0.7v223.mongodb.net/");

    userrouter.post('/login', (req, res)=>{

        res.json({
            msg: "logged in"
        })
    });

    userrouter.post('/signup', async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username
        const checkuser = UserModel.findOne({
            email
        })
        if(checkuser.email==email){
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

    userrouter.get('/purchases',(req, res)=>{
        res.json({
            msg: "your purchases"
        })
    });

module.exports = {
    userrouter: userrouter 
}