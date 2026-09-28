require("dotenv").config({ path: `.env` });

const PORT = process.env.PORT;
const users = [];

const express= require("express");
const app = express();

app.use(express.json());

app.get("/users/:name/:userId", (req, res) => {
  res.status(200).send(`User ID: ${req.params.userId}, Name: ${req.params.name}`);
});

app.get("/users", (req, res) => {
  res.status(200).send(`User ID: ${req.query.userId}`);
});

app.post("/users", (req, res) => {
 res.status(200).send(`User ID: ${req.body.userId} and Name: ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
