require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database");
const PORT = process.env.PORT;
const userRoute = require("./route/user");
app.use(express.json());
app.use("/api/user", userRoute);

connectDB()
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch(() => console.log("Something went Wrong while connect Database"));
