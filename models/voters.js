const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  name: String,
  affiliation: String,
  house_district: Number,
  senate_district: Number,
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;
