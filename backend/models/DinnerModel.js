const { model, Schema } = require("mongoose");

const DinnerSchema = new Schema({
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

const DinnerModel = model("dinner", DinnerSchema);

module.exports = DinnerModel;
