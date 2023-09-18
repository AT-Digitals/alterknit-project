import express from "express";
export default router = express.Router();

router.get("/users", (req, res) => {
  const { name, message, email } = req.body;
  console.log(email + "/" + message + "/" + name);
  res.send("Message sent. Thank you.");
});

router.post("/contact", (req, res) => {});
