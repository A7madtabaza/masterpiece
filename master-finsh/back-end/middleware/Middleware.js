const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("No token provided!");
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "your_secret_key",
    (err, decoded) => {
      if (err) {
        return res.status(401).send("Unauthorized!");
      }
      req.userId = decoded.userId;
      req.userType = decoded.userType; // إضافة نوع المستخدم
      next();
    }
  );
};

module.exports = verifyToken;
