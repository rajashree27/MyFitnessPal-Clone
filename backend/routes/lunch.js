const { Router } = require("express");

const lunchRouter = Router();

const LunchModel = require("../models/LunchModel");

lunchRouter.post("/create", async (req, res) => {
  const data = req.body;
  const newLunch = new LunchModel(data);
  await newLunch.save();
  return res.status(200).send(newLunch);
});

lunchRouter.get("/", async (req, res) => {
    const lunchs = await LunchModel.find();
    return res.status(200).send(lunchs);
  });
  
  lunchRouter.patch("/:lunchId", async (req, res) => {
    const { lunchId } = req.params;
    const body = req.body;
    await LunchModel.updateOne({ _id: lunchId }, { $set: body });
    return res.status(200).send({ message: "updation done" });
  });
  
  lunchRouter.delete("/:lunchId", async (req, res) => {
    const { lunchId } = req.params;
    await LunchModel.deleteOne({ _id: lunchId });
    return res.status(200).send({ message: "deletion done" });
  });

module.exports = lunchRouter;
