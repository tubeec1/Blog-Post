let { validationResult } = require("express-validator");
const AppError = require("../utilits/AppError");

let authMidleWareValidation = (req, res, next) => {
  const errors = validationResult(req);
  console.log("errors", errors);

  if (!errors.isEmpty()) {
    throw new Error(errors.errors[0].msg);
  }
  next();
};

module.exports = { authMidleWareValidation };
