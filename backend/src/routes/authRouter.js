const express = require("express");
const authController = require("../controllers/authController");
const postController = require("../controllers/postController");
const upload = require("../utilits/multer");
let {
  signupValitor,
  loginValidator,
  updateProfileValidator,
} = require("../vilidators/authValidation");
const { validationMiddleware } = require("../middleWare/validationMiddleWare");
const authMiddleware = require("../middleWare/authMiddleWare");
const router = express.Router();
router.post(
  "/signup",
  signupValitor,
  validationMiddleware,
  authController.Signup,
);
router.put(
  "/update_profile",
  upload.single("profileImage"),
  updateProfileValidator,
  validationMiddleware,
  authController.updateProfile,
);

router.get("/profile", authMiddleware, authController.getProfile);
router.post(
  "/login",
  loginValidator,
  validationMiddleware,
  authController.login,
);
router.get( "/usersCount",authController.getUsersCountController);

module.exports = router;
