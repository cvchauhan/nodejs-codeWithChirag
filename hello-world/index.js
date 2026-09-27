require("dotenv").config({ path: `.env` });

const PORT = process.env.PORT;
const users = [];

const express= require("express");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const userData = req.body;  
  users.push(userData);
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
