let express = require("express");
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

app.use(globalErrorMiddleware);

module.exports = app;
