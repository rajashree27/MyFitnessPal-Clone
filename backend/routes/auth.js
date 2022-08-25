const { Router } = require("express");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const authRouter = Router();
const UserModel = require("../models/UserModel");

authRouter.post("/register", async (req, res) => {
  const data = req.body;
  const existUser = await UserModel.findOne({ email: data.email });
  if (existUser)
    return res.status(400).send({ message: "User already exists" });
  bcrypt.hash(data.password, 8, async function (err, hash) {
    if (err) return res.status(500).send({ message: "Something went wrong" });
    const newuser = new UserModel({ ...data, password: hash });
    await newuser.save();
    return res.status(200).send({ message: "Signup success" });
  });
});

authRouter.post("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email});
    if(!user) return res.status(400).send({message: "Invalid Credentials"});
    bcrypt.compare(password, user.password, function(err, result) {
        // res === true
        if(err) return res.status(500).send({message: "Something went wrong, Please login again"});
        if(!result) return res.status(400).send({message: "Invalid Credentials"});
        const token = jwt.sign({
            userId: user._id
          }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
        return res.status(200).send({message: "Login successful", token})
    });
})

module.exports = authRouter;
