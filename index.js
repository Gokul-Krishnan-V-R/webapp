const express = require("express");
const app = express();
// const {CreateUserRoutes} = require("./routes/userroutes")
// const {CreateAdminRoutes} = require("./routes/adminroutes")
// const {CreateCourseRoutes} = require("./routes/courseroutes")
app.use(express.json());
const jwt = require('jsonwebtoken');
const {userrouter} = require("./webapp/routes/userroutes");
const {adminrouter} = require("./webapp/routes/adminroutes");
const {courserouter} = require("./webapp/routes/courseroutes");
const JWT_SECRET = "123ABC";


// CreateUserRoutes(app);
// CreateAdminRoutes(app); 
// CreateCourseRoutes(app);

app.use("/user", userrouter)
app.use("/admin", adminrouter)
app.use("/course", courserouter)

app.listen(3000);