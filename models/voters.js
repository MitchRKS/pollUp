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

const seedData = [
  {
    name: "Mitch",
    affiliation: "I",
    house_district: 117,
    senate_district: 33,
    contacted: true,
  },
  {
    name: "Maggie",
    affiliation: "D",
    house_district: 51,
    senate_district: 22,
    contacted: false,
  },
  {
    name: "Dave",
    affiliation: "R",
    house_district: 68,
    senate_district: 17,
    contacted: true,
  },
];
