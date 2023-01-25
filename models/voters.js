const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  name: {
    first_name: String,
    last_name: String,
  },
  address: {
    house_number: Number,
    street: String,
    city: String,
    state: String,
    zip: Number,
    nine_zip: Number,
  },
  affiliation: String,
  house_district: Number,
  senate_district: Number,
  contacted: Boolean,
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;
