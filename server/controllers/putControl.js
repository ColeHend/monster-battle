// @ts-nocheck
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
const Register = async (req, res) => {
  console.log(`body: ${JSON.stringify(req.body)}`);
  const salt = bcrypt.genSaltSync(10);
  const passHash = await bcrypt.hashSync(req.body.password, salt);
  const user = new User({
    username: req.body.username,
    password: passHash,
  });
  console.log("user: ", user);
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).send({
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: "Error creating user",
        error,
      });
    });
  // bcrypt
  //   .hash(req.body.password, 10)
  //   .then((hashPass) => {

  //   })
  //   .catch((err) => {
  //     res
  //       .status(500)
  //       .send({ message: "password not hashed successfully.", err });
  //   });
};

const Login = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      bcrypt
        // @ts-ignore
        .compare(req.body.password, user.password)
        .then((passCheck) => {
          if (!passCheck) {
            return res.status(400).send({
              message: "passwords don't match!",
            });
          }
          console.log(`attempting to sign token for ${user.username}`);
          const token = jwt.sign(
            {
              userId: user._id,
              username: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          console.log(`signing successful!`);
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
