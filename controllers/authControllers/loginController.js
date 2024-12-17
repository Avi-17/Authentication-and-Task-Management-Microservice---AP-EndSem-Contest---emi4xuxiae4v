const { prisma } = require("../../db/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (!exists) return res.status(404).json({ error: "User not found" });

    const userId = exists.id;

    const isPasswordCorrect = await bcrypt.compare(password, exists.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id:userId }, process.env.JWT_SECRET);

    return res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { loginController };
