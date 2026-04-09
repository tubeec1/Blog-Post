let express = require("express");

let app = express();

app.get("/posts" ,(req ,res)=>{
    res.json("wuu shaqeeyay");
})


module.exports =app;