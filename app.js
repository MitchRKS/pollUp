//require("dotenv").config();
import dotenv from "dotenv";
/**
 * Requirements
 */

//const mongoose = require("mongoose");
import mongoose from "mongoose";
//const express = require("express");
import express from "express";
import * as jsx from "jsx-view-engine";
//const Voter = require("./models/voters.js");
import { Voter } from "./models/voters.js";
//const seedData = require("./seed.js");
import seedData from "./seed.js";
//include the method-override package place this where you instructor places it
//const methodOverride = require("method-override");
import methodOverride from "method-override";
dotenv.config();

const app = express();
/**
 * Configuration
 */
const PORT = 3000;

/**
 * Controller requires go here ⬇️
 */

//--------------------------------

// Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Seed Data
//Voter.create(seedData);

/**
 * Middleware
 */
app.use(express.static("public")); //tells express to try to match requests with files in the directory called 'public'

// Method override will allow us to use put & delete methods
app.use(methodOverride("_method"));

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }));
// Allow express to recieve the body as json in requests
app.use(express.json());
/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", jsx.createEngine());

/**
 * Controller middlewares go here ⬇️
 */

// Landing Page
app.get("/", (req, res) => {
  res.redirect("/voters");
});

// Index route
app.get("/voters", (req, res) => {
  Voter.find({}, (err, allVoters) => {
    res.render("Index", {
      voters: allVoters,
    });
  });
});

// Create Route

app.post("/", (req, res) => {
  Voter.create(req.body, (err, createdVoter) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/voters");
    }
  });
});

// New Route
app.get("/new", (req, res) => {
  res.render("New");
});

// Show Route
app.get("/voters/:id", (req, res) => {
  const { id } = req.params;

  Voter.findById(id, (error, foundVoter) => {
    res.render("Show", {
      voter: foundVoter,
    });
  });
});

// Edit Route
app.get("/voters/:id/edit", (req, res) => {
  Voter.findById(req.params.id, (err, foundVoter) => {
    if (!err) {
      res.render("Edit", {
        voter: foundVoter,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Delete Route
app.delete("/voters/:id", (req, res) => {
  Voter.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.redirect("/voters");
    } else {
      res.send({ error: err });
    }
  });
});

//Update Route
app.patch("/voters/:id", (req, res) => {
  Voter.findByIdAndUpdate(req.params.id, req.body, (err, foundVoter) => {
    if (!err) {
      res.redirect(`/voters/${req.params.id}`);
    } else {
      res.send({ error: err });
    }
  });
});
// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
