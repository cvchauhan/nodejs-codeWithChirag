const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.status(200).send(`User ID: ${req.params.id}, Name: ${req.params.name}`);
});

router.post("/", (req, res) => {
  res.status(200).send(`User ID: ${req.query.id}`);
});

router.delete("/", (req, res) => {
 res.status(200).send(`User ID: ${req.body.userId} and Name: ${req.body.name}`);
});
router.put("/", (req, res) => {
 res.status(200).send(`User ID: ${req.body.userId} and Name: ${req.body.name}`);
});


module.exports = router;