require("dotenv").config({ path: `.env` });

const PORT = process.env.PORT;
const users = [];

const express= require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.route");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
