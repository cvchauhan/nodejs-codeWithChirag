require("dotenv").config({ path: `.env.${process.env.SERVER}` });

const http = require("http");
const PORT = process.env.PORT;
console.log(PORT);
const server = http.createServer((req, res) => {
  res.end("Don't forgot to subscribe");
});
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
