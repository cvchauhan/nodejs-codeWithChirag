const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Tokens are typically sent in the Authorization header as "Bearer <token>"
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract the token part

  if (token == null) {
    return res.status(403).send({ message: "Unauthorized User" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // If token is invalid or expired, return forbidden
    }
    req.user = user; // Add the decoded payload to the request object
    next(); // Proceed to the next middleware/route handler
  });
};

module.exports = authenticateToken;
