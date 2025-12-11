const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({
      _id: verifyUser._id,
      "tokens.token": token,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // req.userId = user._id;
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.send({
      message: "Unauthorized",
      status: 401,
    });
  }
};

module.exports = auth;
