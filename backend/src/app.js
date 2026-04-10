let express = require("express");
let cors =require("cors");
let Global = require("./middleWare/GlobalMiddleWare")
let app = express();
app.use(express.json());
app.post("/api/categories/create", (req, res) => {
  res.json({
    status: true,
    message: "success",
  });
});

module.exports = app;
