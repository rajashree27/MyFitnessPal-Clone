const { Router } = require("express");

const dinnerRouter = Router();

const DinnerModel = require("../models/DinnerModel");

dinnerRouter.post("/create", async (req, res) => {
  const data = req.body;
  const newDinner = new DinnerModel(data);
  await newDinner.save();
  return res.status(200).send(newDinner);
});

dinnerRouter.get("/", async (req, res) => {
  const dinners = await DinnerModel.find();
  return res.status(200).send(dinners);
});

dinnerRouter.patch("/:dinnerId", async (req, res) => {
  const { dinnerId } = req.params;
  const body = req.body;
  await DinnerModel.updateOne({ _id: dinnerId }, { $set: body });
  return res.status(200).send({ message: "updation done" });
});

dinnerRouter.delete("/:dinnerId", async (req, res) => {
  const { dinnerId } = req.params;
  await DinnerModel.deleteOne({ _id: dinnerId });
  return res.status(200).send({ message: "deletion done" });
});

module.exports = dinnerRouter;
