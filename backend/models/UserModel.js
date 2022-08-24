const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    facebookId: String,
    gender: String,
    age: Number,
    country: String,
    zipcode: Number,
    weightGoal: String,
    activityLevel: String,
    height: String,
    weight: String,
    goalWeight: String,
    weeklyGoal: String,
})

const UserModel = model("user", UserSchema);

module.exports = UserModel;