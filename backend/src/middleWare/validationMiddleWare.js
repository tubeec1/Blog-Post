let { validationResult } = require("express-validator");
const AppError = require("../utilits/AppError");

let authMidleWareValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError(errors.message, 400);
  }
  next();
};

module.exports = { authMidleWareValidation };
