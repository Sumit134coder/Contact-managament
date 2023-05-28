const asyncHandler = require("express-async-handler");
const Users = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({
    email,
  });

  if (!user) {
    res.status(404);
    throw new Error("User with this email doesn't exits");
  }

  // compare passwords
  const validPassword = await bcrypt.compare(password , user.password)
  console.log('v' , validPassword);

  if(!validPassword){
    res.status(401);
    throw new Error("Incorrect password!");
  }

  const accessToken = jwt.sign({ user }, process.env.JWT_STRING, {
    expiresIn: "3h",
  });

  res.status(200).json({
    message: "User logged in successfully",
    data: {
      accessToken: accessToken,
    },
  });
});

const register = asyncHandler(async (req, res) => {
  const body = req.body;

  const isUserExist = await Users.findOne({
    email: body.email,
  });

  console.log(isUserExist);

  if (isUserExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hashing password where password is passed along with salt rounds
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await Users.create({
    ...body,
    password: hashedPassword,
  });

  // const newUser = await Users.create(body)

  res.status(201).json({
    message: "register",
    data: newUser,
  });
});

module.exports = {
  login,
  register,
};
