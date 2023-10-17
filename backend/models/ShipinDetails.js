const mongoose = require("mongoose");

const ShipInSchema = new mongoose.Schema({
  shipInformation: {
    firstName: { type: String, requried: true },
    lastName: { type: String, requried: true },
    streetAddress: { type: String, requried: true },
    apartment: { type: String, requried: true },
    city: { type: String, requried: true },
    state: { type: String, requried: true },
    zipcode: { type: String, requried: true },
    phoneNumber: { type: String, requried: true },
    email: { type: String, requried: true },
    sameAddress: { type: String, requried: true },
  },
  billInformation: {
    firstName: { type: String, requried: true },
    lastName: { type: String, requried: true },
    streetAddress: { type: String, requried: true },
    apartment: { type: String, requried: true },
    city: { type: String, requried: true },
    state: { type: String, requried: true },
    zipcode: { type: String, requried: true },
  },
});

const ShipInItem = mongoose.model("shipIn-details", ShipInSchema);
module.exports = ShipInItem;
