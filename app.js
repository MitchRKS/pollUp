require("dotenv").config();

/**
 * Requirements
 */
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Voter = require("./models/voters.js");
const seedData = require("./seed.js");
//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");

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
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Controller middlewares go here ⬇️
 */

// Landing Page
app.get("/", (req, res) => {
  res.send("content coming soon!");
});

// Index route
app.get("/index", (req, res) => {
  Voter.find({}, (err, allVoters) => {
    res.render("Index", {
      voters: allVoters,
    });
  });
});

// Create Route

app.post("/", (req, res) => {
  Voter.create(req.body, (err, createdVoter) => {
    res.redirect("/index");
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

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
