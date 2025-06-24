const jwt = require("jsonwebtoken");
const secret = "your-secret-key";

exports.verifyToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).send("Geen token");

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // contains id, isAdmin
    next();
  } catch (err) {
    res.status(403).send("Token ongeldig");
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.isAdmin !== 1) return res.status(403).send("Admin only");
  next();
};