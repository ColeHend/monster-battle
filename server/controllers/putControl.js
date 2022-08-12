// const { database } = require("../database/database");

const bcrypt = require("bcrypt");
const User = require("../database/userModel");
const jwt = require("jsonwebtoken");

const addMonster = async (req, res) => {
  let user = req.user;
  User.updateOne(
    { username: user.username },
    { $set: { monsters: req.body.monsters } }
  )
    .then((dbres) => {
      res.status(400).send(dbres);
    })
    .catch((err) => console.log(err));
};
const Register = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashPass) => {
      const user = new User({
        username: req.body.username,
        password: hashPass,
      });
      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "password not hashed successfully.", err });
    });
};

const Login = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passCheck) => {
          if (!passCheck) {
            return res.status(400).send({
              message: "passwords don't match!",
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              username: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful",
            username: user.username,
            token,
          });
        })
        .catch((err) => {
          res.status(400).send({
            message: "Passwords don't match!",
            err,
          });
        });
    })
    .catch((err) => {
      res.status(404).send({
        message: "username not found!",
        err,
      });
    });
};
module.exports = { Register, Login, addMonster };
