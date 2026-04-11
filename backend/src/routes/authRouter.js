const express = require("express");
const authController = require("../controllers/authController");
const postController=require("../controllers/postController")
const upload = require("../utilits/multer");
let {signupValitor ,loginValidator }=require("../vilidators/authValidation")
let authMiddleware =require("../middleWare/authMiddleWare")
const router = express.Router();
router.post("/signup",upload.single("profileImges"),authController.Signup);
router.post(
  "/login",
 
  authController.login
);


module.exports = router;