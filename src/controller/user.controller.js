const db = require("../models");
const Login = db.login;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.createUser = (req, res) => {
  //validating fields
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  // check is user exist
  Login.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status().json({
        message: "User alredy exists",
      });
    }

    //create hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;

        const newUser = new Login({ email: email, password: hash });

        newUser
          .save()
          .then((user) => {
            return res.status(200).json({
              error: null,
              data: user.email,
              message: "data fetch successfulluy",
            });
          })
          .catch((err) => {
            return res.status(500).json({
              message: err.message || "something went wrong",
            });
          });
      });
    });
  });
};

exports.loginUser = (req, res) => {
  //validating fields
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  // check is user exist
  Login.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status().json({
        message: "User not registered with us",
      });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status().json({
          message: "Incorrect Password",
        });
      }

      jwt.sign(
        { id: user.id },
        process.env.JWTSECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.status(200).json({
            error: null,
            data: user.email,
            token: token,
          });
        }
      );
    });
  });
};
