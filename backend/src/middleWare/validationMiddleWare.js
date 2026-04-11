let { validationResult } = require("express-validator");
const AppError = require("../utilits/AppError");

let authMidleWareValidation = (req, res, next) => {
  const errors = validationResult(req);
  console.log("errors", errors);

  if (!errors.isEmpty()) {
    let messagesData = [];
    errors.errors.map((err) => {
      messagesData += err.msg;
    });
    throw new AppError(JSON.stringify(messagesData), 400);
  }
  next();
};

module.exports = { authMidleWareValidation };
