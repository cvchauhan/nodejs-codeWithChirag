import { config } from "dotenv";
config();
import http from "http";
console.log(process.env.TEST);
http
  .createServer((req, res) => {
    res.end("Welcome to CodewithChirag");
  })
  .listen(3000, () => {
    console.log("Server is running on 3000");
  });
