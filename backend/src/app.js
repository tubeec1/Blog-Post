let express = require("express");
let cors =require("cors");
let authRouter = require("./routes/authRouter")
// let Global = require("./middleWare/GlobalMiddleWare")
let app = express();
app.use(express.json());
app.use("/public",express.static("public"));
app.use("/auth/", authRouter );

module.exports = app;
