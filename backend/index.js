require("dotenv").config();
const express = require("express");
const passport = require("passport");
require("./config/google.oauth");
const session = require("express-session");

const connection = require("./config/db");
const authRouter = require("./routes/auth");
const authentication = require("./middleware/authentication");
const foodsRouter = require("./routes/foods");
const breakfastRouter = require("./routes/breakfast");
const lunchRouter = require("./routes/lunch");
const snackRouter = require("./routes/snack");
const dinnerRouter = require("./routes/dinner");

const app = express();

app.get("/", (req, res) => {
  res.send("Deployed to heroku successful");
});

app.use(
  session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/auth/google/failure", (req, res) => {
  res.send("Login Failed");
});

app.get("/dashboard", (req, res) => {
  res.send(req.user.displayName);
});

app.use("/auth", authRouter);

app.use("/foods", foodsRouter);

app.use(authentication);

app.use("/breakfast", breakfastRouter);

app.use("/lunch", lunchRouter);

app.use("/snack", snackRouter);

app.use("/dinner", dinnerRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected successfully to DB");
  } catch (error) {
    console.log("Something went wrong" + error);
  }
  console.log(`server running at ${process.env.PORT}`);
});
