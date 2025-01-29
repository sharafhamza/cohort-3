const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.send({
    message: "Message send",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.send({
    message: "Message send",
  });
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
