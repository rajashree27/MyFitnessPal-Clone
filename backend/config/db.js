require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODB_URL)

module.exports = connection;