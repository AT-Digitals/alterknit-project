const mongoose = require("mongoose");

const MoreDetailsSchema = new mongoose.Schema({
  previous: {
    type: String,
  },
  latest: { type: String },
});

const Details = mongoose.model("more-details", MoreDetailsSchema);
module.exports = Details;
