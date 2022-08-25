const { Router } = require("express");

const snackRouter = Router();

const SnackModel = require("../models/SnackModel");

snackRouter.post("/create", async (req, res) => {
  const data = req.body;
  const newSnack = new SnackModel(data);
  await newSnack.save();
  return res.status(200).send(newSnack);
});

snackRouter.get("/", async (req, res) => {
  const snacks = await SnackModel.find();
  return res.status(200).send(snacks);
});

snackRouter.patch("/:snackId", async (req, res) => {
  const { snackId } = req.params;
  const body = req.body;
  await SnackModel.updateOne({ _id: snackId }, { $set: body });
  return res.status(200).send({ message: "updation done" });
});

snackRouter.delete("/:snackId", async (req, res) => {
  const { snackId } = req.params;
  await SnackModel.deleteOne({ _id: snackId });
  return res.status(200).send({ message: "deletion done" });
});

module.exports = snackRouter;
