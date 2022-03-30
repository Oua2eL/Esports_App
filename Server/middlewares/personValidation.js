const { body } = require("express-validator");

const validation = [
  body("email", "invalid email !").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 6,
  }),
];
module.exports = validation;