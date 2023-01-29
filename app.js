//require("dotenv").config();
import dotenv from "dotenv";
/**
 * Requirements
 */

import mongoose from "mongoose";

import express from "express";
import * as jsx from "jsx-view-engine";
import Resource from "express-resource";
import { Voter } from "./models/voters.js";
import User from "./models/users.js";
import seedData from "./seed.js";
import methodOverride from "method-override";
import voterRouter from "./controllers/voter/voterController.js";

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
app.use("/voters", voterRouter);

// Landing Page
app.get("/", (req, res) => {
  try {
    res.redirect("/voters");
  } catch (error) {
    res.send(error);
  }
});

// app.get("/voters", (req, res) => {
//   Voter.find({}, (error, allVoters) => {
//     res.render("Index", {
//       voters: allVoters,
//     });
//   });
// });

// app.post("/", (req, res) => {
//   Voter.create(req.body, (err, createdVoter) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect("/voters");
//     }
//   });
// });

// app.get("/new", (req, res) => {
//   res.render("New");
// });

// app.get("/voters/:id", (req, res) => {
//   const { id } = req.params;

//   Voter.findById(id, (error, foundVoter) => {
//     res.render("Show", {
//       voter: foundVoter,
//     });
//   });
// });

// app.get("/voters/:id/edit", (req, res) => {
//   Voter.findById(req.params.id, (err, foundVoter) => {
//     if (!err) {
//       res.render("Edit", {
//         voter: foundVoter,
//       });
//     } else {
//       res.send({ msg: err.message });
//     }
//   });
// });

// app.delete("/voters/:id", (req, res) => {
//   Voter.findByIdAndRemove(req.params.id, (err, data) => {
//     if (!err) {
//       res.redirect("/voters");
//     } else {
//       res.send({ error: err });
//     }
//   });
// });

// app.patch("/voters/:id", (req, res) => {
//   Voter.findByIdAndUpdate(req.params.id, req.body, (err, foundVoter) => {
//     if (!err) {
//       res.redirect(`/voters/${req.params.id}`);
//     } else {
//       res.send({ error: err });
//     }
//   });
// });

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
