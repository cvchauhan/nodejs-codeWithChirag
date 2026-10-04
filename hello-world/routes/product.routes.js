const express = require("express");
const router = express.Router();

router.get("/:productId", (req, res) => {
  res.status(200).send(`Get Route with ID: ${req.params.productId}`);
});

router.post("/", (req, res) => {
  res.status(200).send(`Post Route`);
});

router.delete("/", (req, res) => {
 res.status(200).send(`Delete Route`);
});
router.put("/", (req, res) => {
 res.status(200).send(`Put Route`);
});

module.exports = router;