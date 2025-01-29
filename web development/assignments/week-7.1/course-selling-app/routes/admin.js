const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
adminRouter.post("/signup", async (req, res) => {
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

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_ADMIN_PASSWORD
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

adminRouter.post("/course", (req, res) => {
  res.send({
    message: "Message send",
  });
});

adminRouter.put("/course", (req, res) => {
  res.send({
    message: "Message send",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.send({
    message: "Message send",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
