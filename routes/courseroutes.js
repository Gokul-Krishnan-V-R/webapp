const {Router} = require("express");
const courserouter = Router();
const {UserModel, PurchaseModel, CourseModel} = require("../db")
const { default: mongoose, model } = require("mongoose");

courserouter.get('/courses',async(req, res)=>{
    const courses = await CourseModel.find({});
    res.json({
        courses
    })

});


module.exports = {
    courserouter: courserouter
}