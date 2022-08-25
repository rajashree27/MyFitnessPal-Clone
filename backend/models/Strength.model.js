
const { model, Schema } = require("mongoose");

const strengthSchema = new Schema({
    nameStrength: String,
    time: Number,
    calories: Number,
    distance:Number
  });

  const strengthModel = model("strength", strengthSchema);

module.exports = strengthModel
