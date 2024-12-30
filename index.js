const express = require("express");
const app = express();
require('dotenv').config()
// const {CreateUserRoutes} = require("./routes/userroutes")
// const {CreateAdminRoutes} = require("./routes/adminroutes")
// const {CreateCourseRoutes} = require("./routes/courseroutes")
app.use(express.json());
const jwt = require('jsonwebtoken');
const {userrouter} = require("./routes/userroutes");
const {adminrouter} = require("./routes/adminroutes");
const {courserouter} = require("./routes/courseroutes");

const mongoose = require("mongoose");



// CreateUserRoutes(app);
// CreateAdminRoutes(app); 
// CreateCourseRoutes(app);

app.use("/user", userrouter)
app.use("/admin", adminrouter)
app.use("/course", courserouter)

async function main(){
await mongoose.connect(process.env.MONGO_URL);
app.listen(3000);
console.log("started the server @ 3000")
}
main()