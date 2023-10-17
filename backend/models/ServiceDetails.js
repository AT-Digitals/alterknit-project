const mongoose = require("mongoose");

const ServiceItemSchema = new mongoose.Schema({
  color: { type: String, required: true },
  visibleHoles: { type: String, required: true },
  brand: { type: String, required: true },
  howLong: { type: String, required: true },
  brief: { type: String, required: true },
});

const MoreDetailsSchema = new mongoose.Schema({
  previous: { type: String, required: true },
  latest: { type: String, required: true },
});

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

const AllServiceSchema = new mongoose.Schema({
  services: { type: [String], default: [] },
  service_data: { type: ServiceItemSchema, required: true },
  more_details: { type: MoreDetailsSchema, required: true },
});

const ServiceDetailsSchema = new mongoose.Schema({
  service_details: [{ type: AllServiceSchema, required: true }],
  shipin_details: { type: ShipInSchema, required: true },
});

const serviceData = mongoose.model("service-data", ServiceDetailsSchema);
module.exports = serviceData;
