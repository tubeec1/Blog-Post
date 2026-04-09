let express = require("express");

let app = express();

app.get("/posts", (req, res) => {
  res.json("wuu shaqeeyay");
});

app.post("/posts", (req, res) => {
  res.json({
    status: true,
    message: "posted",
  });
});

module.exports = app;
