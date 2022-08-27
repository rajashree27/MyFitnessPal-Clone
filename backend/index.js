require("dotenv").config();
const express = require("express");
const passport = require("passport");
require("./config/google.oauth");
const session = require("express-session");
const cors = require("cors");

const connection = require("./config/db");
const authRouter = require("./routes/auth");
const authentication = require("./middleware/authentication");
const foodsRouter = require("./routes/foods");
const breakfastRouter = require("./routes/breakfast");
const lunchRouter = require("./routes/lunch");
const snackRouter = require("./routes/snack");
const dinnerRouter = require("./routes/dinner");
const cardioRouter = require("./routes/cardio.Router");
const strengthRouter = require("./routes/strength.Router");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000","https://myfitnesspal-clone.netlify.app"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

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
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/auth/google/failure", (req, res) => {
  res.send("Login Failed");
});

app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.redirect(process.env.CLIENT_URL);
  });
});

app.use("/auth", authRouter);

app.use("/foods", foodsRouter);

// app.use(authentication);

app.use("/breakfast", breakfastRouter);

app.use("/lunch", lunchRouter);

app.use("/snack", snackRouter);

app.use("/dinner", dinnerRouter);

app.use("/exercise/cardio", cardioRouter);
app.use("/exercise/strength", strengthRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected successfully to DB");
  } catch (error) {
    console.log("Something went wrong" + error);
  }
  console.log(`server running at ${process.env.PORT}`);
});
