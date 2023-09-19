const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: { type: String },
  message: { type: String },
  phone: { type: String },
});

const User = mongoose.model("Item", itemSchema);
module.exports = User;
