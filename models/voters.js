import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
  name: String,
  affiliation: String,
  house_district: Number,
  senate_district: Number,
});

export const Voter = mongoose.model("Voter", voterSchema);
