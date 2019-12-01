require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers)
  if(token) {

    jwt.verify(token, process.env.SECRET, (err, dt) => {

      if(err) {
        res.status(401).json({ message: "Problem With Auth Token" });
      } else {
        next();
      }

    });

  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
}