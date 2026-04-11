const express = require("express");
const authController = require("../controllers/authController");
const postController = require("../controllers/postController");
const upload = require("../utilits/multer");
let {
  signupValitor,
  loginValidator,
  updateProfileValidator,
} = require("../vilidators/authValidation");
let { authMidleWareValidation } = require("../middleWare/validationMiddleWare");
const router = express.Router();
router.post(
  "/signup",
  signupValitor,
  authMidleWareValidation,
  authController.Signup,
);
router.put(
  "/update_profile",
  upload.single("profileImage"),
  updateProfileValidator,
  authMidleWareValidation,
  authController.updateProfile,
);
router.post("/login", authController.login);

module.exports = router;
