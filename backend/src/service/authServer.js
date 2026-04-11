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
  const checkEmail = await authModel.findByEmail(email);

  if (!checkEmail) {
    return {
      status: false,
      message: "this email isnot exist",
    };
  }

  let isMatch = await bcrypt.compare(String(password), checkEmail.password);

  if (!isMatch) {
    throw new AppError("increct password", 401);
  }
  let token = await jwtHandler.generation(checkEmail);
  let xog = {
    id: checkEmail.id,
    name: checkEmail.name,
    email: checkEmail.email,
    profileImge: checkEmail.profileImge,
  };
  return {
    status: true,
    message: "successfully login",
    token: token,
    user: xog,
  };
};

module.exports = { Signup, login };
