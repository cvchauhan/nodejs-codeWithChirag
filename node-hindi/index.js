// const http = require("http");
import http from "http";

http
  .createServer((req, res) => {
    res.end("Welcome to CodewithChirag");
  })
  .listen(3000, () => {
    console.log("Server is running on 3000");
  });
