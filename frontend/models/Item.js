const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: String,
});

module.exports = mongoose.model("Item", itemSchema);
