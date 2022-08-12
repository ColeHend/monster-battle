// @ts-nocheck
require("dotenv").config();

const mongoose = require("mongoose");
const dbURL = process.env.DATA_STRING;
console.log(`url: ${dbURL}`);
async function dbConnect() {
  mongoose
    .connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to Database!");
    })
    .catch((error) => {
      console.log("Unable to connect to Database!");
      console.error(error);
    });
}

module.exports = dbConnect;
