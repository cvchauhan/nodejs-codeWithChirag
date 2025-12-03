const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end("Don't forgot to subscribe");
});
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
