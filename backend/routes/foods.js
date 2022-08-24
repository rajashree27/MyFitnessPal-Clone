const { Router } = require("express");

const foodsRouter = Router();

const FoodModel = require("../models/FoodModel");

foodsRouter.post("/create", async (req, res) => {
  const data = req.body;
  await FoodModel.insertMany(data)
    .then((r) => res.status(200).send({ message: "Foods saved to DB" }))
    .catch((err) => res.status(400).send({ message: err }));
});

module.exports = foodsRouter;
