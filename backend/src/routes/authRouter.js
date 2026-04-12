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
const authMiddleware = require("../middleWare/authMiddleWare");
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

router.get("/profile", authMiddleware, authController.getProfile);
router.post(
  "/login",
  loginValidator,
  authMidleWareValidation,
  authController.login,
);

module.exports = router;
