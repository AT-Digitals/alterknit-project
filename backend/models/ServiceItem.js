const mongoose = require("mongoose");

const ServiceItemSchema = new mongoose.Schema({
  color: { type: String },
  visibleHoles: { type: String },
  brand: { type: String },
  howLong: { type: String },
  brief: { type: String },
});

const ServiceUser = mongoose.model("service-details", ServiceItemSchema);
module.exports = ServiceUser;
