import express from "express";
const landingRouter = express.Router();

landingRouter.get("/", (req, res) => {
  return res.status(200).json({ info: "welcome to the landing page" });
});

landingRouter.post("/", (req, res) => {
  return res
    .status(200)
    .json({ info: "something was created ig", n: req.body.n });
});

export default landingRouter;
