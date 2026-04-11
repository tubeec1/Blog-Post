let express = require("express");
let cors = require("cors");
let authRouter = require("./routes/authRouter");
let postRouter = require("./routes/postRouter");
let globalErrorMiddleware = require("./middleWare/GlobalErrorMiddleWare");
let app = express();
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/api/auth/", authRouter);
app.use("/api/posts/", postRouter);
app.use(globalErrorMiddleware);

module.exports = app;
