const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/preview", (req, res) => {
  res.send({
    message: "Message send",
  });
});

courseRouter.post("/purchase", (req, res) => {
  res.send({
    message: "Message send",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
