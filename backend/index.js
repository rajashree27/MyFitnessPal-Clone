require('dotenv').config();
const express = require("express");

const connection = require("./config/db");
const authRouter = require("./routes/auth");
const authentication = require("./middleware/authentication");
const foodsRouter = require("./routes/foods");
const breakfastRouter = require("./routes/breakfast");
const lunchRouter = require("./routes/lunch");
const snackRouter = require("./routes/snack");
const dinnerRouter = require("./routes/dinner");
const cardioRouter = require("./routes/cardio.Router")
const strengthRouter=require("./routes/strength.Router")
const app = express();

app.get("/", (req, res) => {
    res.send("Deployed to heroku successful")
})

app.use(express.json());

app.use("/auth", authRouter);

app.use("/foods", foodsRouter)

app.use(authentication);

app.use("/breakfast", breakfastRouter);

app.use("/lunch", lunchRouter);

app.use("/snack", snackRouter);

app.use("/dinner", dinnerRouter);

app.use("/exercise/cardio",cardioRouter);
app.use("/exercise/strength",strengthRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("connected successfully to DB")
    } catch (error) {
        console.log("Something went wrong" + error)
    }
    console.log(`server running at ${process.env.PORT}`)
})