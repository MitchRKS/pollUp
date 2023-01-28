import { Express } from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send(req.body);
});

router.post("/login", (req, res) => {
  res.send(req.body);
});

export default router;
