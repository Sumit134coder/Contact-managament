const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//TODO: check for try catch block if verification is working

const verifyToken = asyncHandler(async (req, res, next) => {
  console.log("---token middleware ---");

  
  
  try {
      const receivedToken = req.headers.authorization.replace("Bearer ", "");
    const isValidToken =  jwt.verify(
      receivedToken,
      process.env.JWT_STRING
    );
    next();
  } catch {
    res.status(401);
    throw new Error("Invalid token");
  }
});

module.exports = verifyToken;
