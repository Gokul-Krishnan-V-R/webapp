const {Router} = require("express");
const adminrouter = Router();

adminrouter.post('/signup', (req, res)=>{
        res.json({
            msg: "signed up"
        })
    });

    adminrouter.post('/login', (req, res)=>{
        res.json({
            msg: "logged in"
        })
    });
    adminrouter.post('/create', (req, res)=>{

    });
    adminrouter.put('/update', (req, res)=>{

    });

module.exports = {
    adminrouter: adminrouter
} 