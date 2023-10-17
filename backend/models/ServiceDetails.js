const mongoose = require("mongoose");

const ServiceItemSchema = new mongoose.Schema({
  color: { type: String, required: true },
  visible_holes: { type: String, required: true },
  brand: { type: String, required: true },
  howMany: { type: String, required: true },
  brief: { type: String, required: true },
});

const MoreDetailsSchema = new mongoose.Schema({
  previous_service: { type: String, required: true },
  latest_service: { type: String, required: true },
});

const ShipInSchema = new mongoose.Schema({
  ShipInformation: {
    firstName: { type: String, requried: true },
    lastName: { type: String, requried: true },
    streetAddress: { type: String, requried: true },
    apartment: { type: String, requried: true },
    city: { type: String, requried: true },
    state: { type: String },
    zipcode: { type: String },
    phone_number: { type: String },
    email: { type: String },
    sameAddress: { type: String },
  },
  BillInformation: {
    firstName: { type: String },
    lastName: { type: String },
    streetAddress: { type: String },
    apartment: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },
  },
});

const AllServiceSchema = new mongoose.Schema({
  services: { type: [String], default: [] },
  service_details: { type: ServiceItemSchema },
  more_details: { type: MoreDetailsSchema },
});

const ServiceDetailsSchema = new mongoose.Schema({
  service_details: [{ type: AllServiceSchema, required: true }],
  shipin_details: { type: ShipInSchema, required: true },
});

const serviceData = mongoose.model("service-data", ServiceDetailsSchema);
module.exports = serviceData;
