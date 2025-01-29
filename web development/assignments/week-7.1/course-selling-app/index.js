const express = require("express");
const app = express();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const mongoose = require("mongoose");
const { adminRouter } = require("./routes/admin");

app.use(express.json());
app.use("/user", userRouter);
// app.use("/course", courseRouter);
// app.use("/course", adminRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://hamza:WDAEXr19oN20aXen@cluster0.alc6g.mongodb.net/course-app"
  );
  app.listen(3000);
}

main();
