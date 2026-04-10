const express = require("express");
const authController = require("../controllers/authController");
const upload = require("../utilits/multer");
let {signupValitor ,loginValidator }=require("../vilidators/authValidation")
const router = express.Router();
router.post("/signup", signupValitor,upload.single("profileImges"),authController.Signup);
router.post(
  "/login",
  loginValidator,
  authController.login
);


module.exports = router;