const express = require("express")
const route = express.Router()
const { check } = require("express-validator")
const IndexController = require("../controllers/IndexController")
const contactController = require("../controllers/contactController")
const educationController = require("../controllers/educationController")
const partnerController = require("../controllers/partnerController")
const internshipController = require("../controllers/internshipController")
const loginController = require("../controllers/loginController")
const registerController = require("../controllers/registerController")
const auth = require("../middleware/auth")

// For Index (Home Page)

route.get("/", IndexController)

// Login Page

route.post(
  "/signin",
  [
    check("email")
      .isLength({ min: 8 })
      .withMessage("minimum 8 chharacters")
      .isEmail()
      .normalizeEmail()
      .withMessage("Enter Valid Email"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password Minimum 8 Characters"),
  ],
  loginController
)

// Signup/Register

route.post(
  "/register",
  [
    check("username")
      .isLength({
        min: 3,
      })
      .withMessage("Enter Name (minimum 3+ chharacters)"),
    check("email")
      .isLength({ min: 8 })
      .withMessage("minimum 8 chharacters")
      .isEmail()
      .normalizeEmail()
      .withMessage("Enter Valid Email"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Minimum 8 Characters")
      .isStrongPassword({
        minLowercase: 2,
        minNumbers: 2,
        minSymbols: 1,
        minUppercase: 1,
      })
      .withMessage(
        "Enter Strong Password (Must Contains 1 Uppercase Char, Minimum 2 numbers and 1 special Symbol)"
      ),
  ],
  registerController
)

// For Contact Page

route.post("/contact", contactController)

// For Partners Page

route.get("/partner", auth, partnerController)

// For Internship Page

route.get("/internship", auth, internshipController)

// For Education Page

route.get("/education", auth, educationController)

// For Thank You Page

route.get("/thankyou", (req, res) => {
  res.render("successful")
})

module.exports = route
