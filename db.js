const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userschema = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
})

const adminschema = new Schema({
    email: {type: String, unique: true},
    password: String,
})

const courseschema = new Schema({
    creatorid: ObjectId,
    title: String,
    Description: String,
    price: Number,
    imageurl: String

})

const purchaseschema = new Schema({
    courseid: ObjectId,
    userid: ObjectId
})

const UserModel = mongoose.model('users', userschema);
const AdminModel = mongoose.model('admins', adminschema);
const CourseModel = mongoose.model('courses', courseschema);
const PurchaseModel = mongoose.model('purchases',purchaseschema);

module.exports={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}