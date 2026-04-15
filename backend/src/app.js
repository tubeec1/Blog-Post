let express = require("express");
let cors = require("cors");
let authRouter = require("./routes/authRouter");
let postRouter = require("./routes/postRouter");
const categoryRouter = require("./routes/categoryRouter");
let globalErrorMiddleware = require("./middleWare/GlobalErrorMiddleWare");
let app = express();
app.use("/public", express.static("public/"));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
 
}));

app.use("/api/auth/", authRouter);
app.use("/api/posts/", postRouter);
app.use("/api/categories", categoryRouter);
app.use(globalErrorMiddleware);

module.exports = app;
