const authModel = require("../model/authModel");
let bcrypt = require("bcrypt");
let jwtHandler = require("../utilits/jwt");
let AppError = require("../utilits/AppError");
let Signup = async (name, email, gender, password, role, profileImge) => {
  let user = await authModel.findByEmail(email);
  if (user && user.length > 0) {
    throw new AppError("this email is already exist", 409);
  }

  let hashPass = await bcrypt.hash(password, 10);
  let response = await authModel.Signup(
    name,
    email,
    gender,
    hashPass,
    role,
    profileImge,
  );

  return {
    status: true,
    message: "successfull signup",
    response: response,
  };
};

let login = async (email, password) => {
  const user = await authModel.findByEmail(email);

  if (!user) {
    throw new AppError("this email is not exist", 404);
  }

  let isMatch = await bcrypt.compare(String(password), user.password);

  if (!isMatch) {
    throw new AppError("increct password", 401);
  }
  let token = await jwtHandler.generateToken(user);
  let userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    role: user.role,
    profileImge: user.profile_image,
  };
  return {
    status: true,
    message: "successfully login",
    token: token,
    user: userData,
  };
};

let updateProfile = async (
  name,
  email,
  password,
  gender,
  role,
  profileImage,
) => {
  let user = await authModel.findByEmail(email);
  if (!user) {
    throw new AppError("this user not exist", 404);
  }
  if (!password) {
    password = user.password;
  } else {
    if (String(password).length < 8) {
      throw new AppError("password must be min of 8 digits", 400);
    } else {
      password = password;
    }
  }
  // let response = await authModel.updateProfile();
};

module.exports = { Signup, login };
