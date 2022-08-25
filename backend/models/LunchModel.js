const { model, Schema } = require("mongoose");

const LunchSchma = new Schema({
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

const LunchModel = model("lunch", LunchSchma);

module.exports = LunchModel;
