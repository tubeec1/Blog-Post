let express = require("express");

let app = express();

app.post("api/categories/create", (req, res) => {
  res.json({
    status: true,
    message: "success",
  });
});

module.exports = app;
