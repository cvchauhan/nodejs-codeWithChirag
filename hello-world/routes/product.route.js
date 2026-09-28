const express = require("express");
const router = express.Router();

router.get("/:productId", (req, res) => {
  res.status(200).send(`Product ID: ${req.params.productId}`);
});

router.post("/", (req, res) => {
  res.status(200).send(`Product ID: ${req.query.productId}`);
});

router.delete("/", (req, res) => {
 res.status(200).send(`Product ID: ${req.body.productId} and Name: ${req.body.name}`);
});
router.put("/", (req, res) => {
 res.status(200).send(`Product ID: ${req.body.productId} and Name: ${req.body.name}`);
});

module.exports = router;