import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  affiliation: String,
  house_district: Number,
  senate_district: Number,
  street_address: String,
  city: String,
  state: String,
  fiveZip: Number,
});

export const Voter = mongoose.model("Voter", voterSchema);
