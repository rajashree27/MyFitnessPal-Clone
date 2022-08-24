const { model, Schema } = require("mongoose");

const BreakfastSchma = new Schema({
  userId: String,
  name: String,
  quantity: Number,
  calories: Number,
  carbs: Number,
  fat: Number,
  protein: Number,
  sodium: Number,
  sugar: Number,
});

const BreakfastModel = model("breakfast", BreakfastSchma);

module.exports = BreakfastModel;
