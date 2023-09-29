const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  services: { type: String },
});

const ServiceItem = mongoose.model("service-item", ServiceSchema);
module.exports = ServiceItem;
