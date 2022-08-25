const {model, Schema} = require("mongoose");

const FoodSchema = new Schema({
    name: String,
    quantity: Number,
    calories: Number,
    carbs: Number,
    fat: Number,
    protein: Number,
    sodium: Number,
    sugar: Number,
})

const FoodModel = model("food", FoodSchema);

module.exports = FoodModel;