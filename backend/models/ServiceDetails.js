const mongoose = require("mongoose");
const ServiceItem = require("./Service");

const ServiceDetailsSchema = new mongoose.Schema({
  services: { type: [String], default: [] },
  service_details: ServiceItemSchema,
});

const serviceData = mongoose.model("service-data", ServiceDetailsSchema);
module.exports = serviceData;
