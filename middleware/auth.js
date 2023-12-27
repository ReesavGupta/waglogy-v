const jwt = require("jsonwebtoken")

const Auth = (req, res, next) => {
  try {
    const token = req.cookies.jwt
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.sendStatus(403)
      next()
    })
  } catch (error) {
    res.status(401).redirect("/login")
  }
}

module.exports = Auth

/**
 * 
 * const jwt = require("jsonwebtoken");
const Admin = require("../Model/Admin");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    jwt.verify(token, `${process.env.SECRET_KEY}`);
    next();
  } catch (error) {
    if (error) {
      res.status(401).redirect("/login");
    }
  }
};

module.exports = auth;
 */
