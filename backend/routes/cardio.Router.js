const {Router}=require('express');

const cardioRouter=Router();

const CardioModel=require("../models/Cardio.model")

cardioRouter.post("/create", async (req, res) => {
    const data = req.body;
    const newCardio = new CardioModel(data);
    await newCardio.save();
    return res.status(200).send(newCardio);
  });
  
  cardioRouter.get("/", async (req, res) => {
    const cardio = await CardioModel.find();
    return res.status(200).send(cardio);
  });
  
  cardioRouter.patch("/:cardioId", async (req, res) => {
    const { cardioId } = req.params;
    const body = req.body;
    await CardioModel.updateOne({ _id: cardioId }, { $set: body });
    return res.status(200).send({ message: "updation done" });
  });
  
  cardioRouter.delete("/:cardioId", async (req, res) => {
    const { cardioId } = req.params;
    await CardioModel.deleteOne({ _id: cardioId });
    return res.status(200).send({ message: "deletion done" });
  });
  
  module.exports = cardioRouter;
  