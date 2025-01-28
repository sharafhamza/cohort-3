const express = require("express");
const app = express();

app.post("/user/signup", (req, res) => {
  console.log("sign up page");
});

app.post("/user/signin", (req, res) => {
  console.log("sign up page");
});

app.get("/courses", (req, res) => {
  console.log("sign up page");
});

app.get("/user/purchases", (req, res) => {
  console.log("sign up page");
});

app.post("/course/purchase", (req, res) => {
  console.log("sign up page");
});

app.listen(3000);
