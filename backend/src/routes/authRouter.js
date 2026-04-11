const express = require("express");
const authController = require("../controllers/authController");
const postController = require("../controllers/postController");
const upload = require("../utilits/multer");
let {
  signupValitor,
  loginValidator,
  updateProfileValidator,
} = require("../vilidators/authValidation");
let authMiddlewareValidor = require("../middleWare/validationMiddleWare");
const router = express.Router();
router.post(
  "/signup",
  signupValitor,
  authMiddlewareValidor.authMidleWareValidation,
  authController.Signup,
);
router.put(
  "/update_profile",
  upload.single("profileImage"),
  updateProfileValidator,
  authController.updateProfile,
);
router.post("/login", authController.login);

module.exports = router;
