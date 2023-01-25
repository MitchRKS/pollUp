const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  name: String,
  affiliation: String,
  house_district: Number,
  senate_district: Number,
  contacted: Boolean,
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;
