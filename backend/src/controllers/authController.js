let authservice = require("../service/authService");
const AppError = require("../utilits/AppError");
let asyncHandler = require("../utilits/AsynHandler");

let Signup = asyncHandler(async (req, res) => {
  let data = req.body;
  let name = data.name;
  let email = data.email;
  let gender = data.gender;
  let password = data.password;
  let role = "user";

  let profileImage = null;
  if (gender == "male") {
    profileImage = `profileImages/manProfileImage.jpg`;
  } else if (gender == "female") {
    profileImage = `profileImages/womanProfileImage.jpg`;
  } else {
    throw new AppError("This gender not allowed", 400);
  }
  let response = await authservice.Signup(
    name,
    email,
    password,
    role,
    gender,
    profileImage,
  );

  return res.json(response);
});

let updateProfile = asyncHandler(async (req, res, next) => {
  let data = req.body;
  let { name, email, password, gender } = data;
  let role = data.role || "user";
  let profileImage = null;
  if (!req.file && gender == "male") {
    profileImage = "profileImages/manProfileImage.jpg";
  } else if (!req.file && gender == "female") {
    profileImage = "profileImages/womanProfileImage.jpg";
  } else if (req.file) {
    profileImage = `profileImages/${req.file.filename}`;
  }
  let response = await authservice.updateProfile(
    name,
    email,
    password,
    gender,
    role,
    profileImage,
  );
  return res.status(200).json(response);
});

let getProfile = asyncHandler(async (req, res) => {
  console.log("user from auth controller:", req.user);
  let { id, role } = req.user;
  let response = await authservice.getProfile(id);
  return res.json(response);
});

let login = asyncHandler(async (req, res) => {
  let data = req.body;
  let email = data.email;
  let password = data.password;
  let response = await authservice.login(email, password);

  return res.json(response);
});




const getUsersCountController = async (req, res) => {
let response = await authservice.getUsersCount()
return res.json(response)
};
module.exports = { Signup, login, updateProfile, getProfile, getUsersCountController };
