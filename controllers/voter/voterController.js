import express from "express";
const voterRouter = express.Router();

import { Voter } from "../../models/voters.js";

voterRouter.get("/", (req, res) => {
  Voter.find({}, (error, allVoters) => {
    res.render("Index", {
      voters: allVoters,
    });
  });
});

voterRouter.post("/", (req, res) => {
  Voter.create(req.body, (err, createdVoter) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/voters");
    }
  });
});

voterRouter.get("/new", (req, res) => {
  res.render("New");
});

voterRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  Voter.findById(id, (error, foundVoter) => {
    res.render("Show", {
      voter: foundVoter,
    });
  });
});

voterRouter.get("/:id/edit", (req, res) => {
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

voterRouter.delete("/:id", (req, res) => {
  Voter.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.redirect("/voters");
    } else {
      res.send({ error: err });
    }
  });
});

voterRouter.patch("/:id", (req, res) => {
  Voter.findByIdAndUpdate(req.params.id, req.body, (err, foundVoter) => {
    if (!err) {
      res.redirect(`/voters/${req.params.id}`);
    } else {
      res.send({ error: err });
    }
  });
});

export default voterRouter;
