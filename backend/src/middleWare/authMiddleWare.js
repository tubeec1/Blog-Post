let jwtHandler = require("../utilits/jwt");\
let AppError = require("../utilits/AppError")

let authMidle = async (req, res, next) => {
  let authorization = req.headers.authorization;

  if (!authorization) {
    throw new AppError("There is no token", 401)
  }
  let token = authorization.split(" ")[1];
  let response = await jwtHandler.verifyToken(token);
  req.user = response;
  next();
};

module.exports = authMidle;
