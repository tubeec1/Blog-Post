let express = require("express");
<<<<<<< HEAD
let cors =require("cors");
let authRouter = require("./routes/authRouter")
// let Global = require("./middleWare/GlobalMiddleWare")
let app = express();
app.use(express.json());
app.use("/public",express.static("public"));
app.use("/auth/", authRouter );
=======
let cors = require("cors");
let globalErrorMiddleware = require("./middleWare/GlobalErrorMiddleWare");
let app = express();
app.use(express.json());
app.use(cors());
app.post("/api/categories/create", (req, res) => {
  res.json({
    status: true,
    message: "success",
  });
});
>>>>>>> 662067948171c274299c4ef699f923e50dbeb344

app.use(globalErrorMiddleware);

module.exports = app;
