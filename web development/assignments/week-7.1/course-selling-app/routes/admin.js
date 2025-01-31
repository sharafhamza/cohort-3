const Router = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middlewares/admin");
const course = require("./course");

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, description, price, imageUrl } = req.body;

  const course = await courseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId,
  });

  res.json({
    message: "Course created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, description, price, imageUrl, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
      creatorId: adminId,
    }
  );
  res.json({
    message: "Course Updated",
    courseId: course._id,
  });
});

adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const courses = await courseModel.find({
    creatorId: adminId,
  });

  res.json({
    message: courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
