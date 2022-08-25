const {Router}=require('express');

const strengthRouter=Router();

const StrengthModel=require("../models/Strength.model")

strengthRouter.post("/create", async (req, res) => {
    const data = req.body;
    const newStrength = new StrengthModel(data);
    await newStrength.save();
    return res.status(200).send(newStrength);
  });
  
  strengthRouter.get("/", async (req, res) => {
    const strength = await StrengthModel.find();
    return res.status(200).send(strength);
  });
  
  strengthRouter.patch("/:strengthId", async (req, res) => {
    const { strengthId } = req.params;
    const body = req.body;
    await StrengthModel.updateOne({ _id: strengthId }, { $set: body });
    return res.status(200).send({ message: "updation done" });
  });
  
  strengthRouter.delete("/:strengthId", async (req, res) => {
    const { strengthId } = req.params;
    await StrengthModel.deleteOne({ _id: strengthId });
    return res.status(200).send({ message: "deletion done" });
  });
  
  module.exports = strengthRouter;
  