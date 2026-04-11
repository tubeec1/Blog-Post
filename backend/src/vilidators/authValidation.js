const { body } = require("express-validator");

let signupValitor = [
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email"),
  body("password")
    .notEmpty()
    .withMessage("EnterPassword")
    .isLength({ min: 8 })
    .withMessage("possword should atleast 8 digit")
    .isStrongPassword()
    .withMessage("it must be  is stronge"),
  body("gender").notEmpty().withMessage("Either male or female required"),
];

let updateProfileValidator = [
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email"),
  body("password")
    .notEmpty()
    .withMessage("EnterPassword")
    .isLength({ min: 8 })
    .withMessage("possword should atleast 8 digit")
    .isStrongPassword()
    .withMessage("it must be  is stronge"),
  body("gender").notEmpty().withMessage("Either male or female required"),
];

const loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email"),

  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { signupValitor, loginValidator, updateProfileValidator };
