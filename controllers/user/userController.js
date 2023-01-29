import express, { Router } from "express";
const userRouter = express.Router();
import * as jwt from "json-web-token";
import bcrypt from "bcrypt";
import User from "../../models/users.js";

userRouter.post("/signup", async (req, res) => {
  const { name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );
    const createdUser = await User.create({ name, password: hashedPassword });
    res.json({ hashedPassword });
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const foundUser = await User.findOne({ name });
    const result = await bcrypt.compare(password, foundUser.password);

    if (result) {
      const token = jwt.sign(
        { name: foundUser.name, _id: foundUser._id },
        process.env.SECRET
      );
      res.status(200).json({ error: "password doesn't match" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default userRouter;
