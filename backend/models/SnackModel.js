const { model, Schema } = require("mongoose");

const SnackSchma = new Schema({
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

const SnackModel = model("snack", SnackSchma);

module.exports = SnackModel;
