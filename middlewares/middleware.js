const jwt = require("jsonwebtoken");

const middleware = async (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decodedPayload = jwt.decode(token, process.env.JWT_SECRET);
    req.id = decodedPayload.id;

    const isValid = jwt.verify(token, process.env.JWT_SECRET);
    if (!isValid) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    
    next();
  } catch (error) {
    console.log("Error in middleware: ", error.message);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { middleware };
