const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../db");
const { JWT_USER_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken");
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Sign Up succeed",
  });
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    res.json({
      message: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
});

userRouter.post("/purchases", (req, res) => {
  res.send({
    message: "Message send",
  });
});

module.exports = {
  userRouter: userRouter,
};
