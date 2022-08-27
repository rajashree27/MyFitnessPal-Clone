const { Router } = require("express");

const breakfastRouter = Router();

const BreakfastModel = require("../models/BreakfastModel");

breakfastRouter.post("/create", async (req, res) => {
  const data = req.body;
  const newBreakfast = new BreakfastModel(data);
  await newBreakfast.save();
  return res.status(200).send({message: "Breakfast added to DB"});
});

breakfastRouter.get("/", async (req, res) => {
  const breakfasts = await BreakfastModel.find();
  return res.status(200).send(breakfasts);
});

breakfastRouter.patch("/:breakfastId", async (req, res) => {
  const { breakfastId } = req.params;
  const body = req.body;
  await BreakfastModel.updateOne({ _id: breakfastId }, { $set: body });
  return res.status(200).send({ message: "updation done" });
});

breakfastRouter.delete("/:breakfastId", async (req, res) => {
  const { breakfastId } = req.params;
  await BreakfastModel.deleteOne({ _id: breakfastId });
  return res.status(200).send({ message: "deletion done" });
});

module.exports = breakfastRouter;
