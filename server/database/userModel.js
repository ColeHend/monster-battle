const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an username!"],
    unique: [true, "User Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  monsters: [],
});

// @ts-ignore
module.exports = mongoose.model("user", UserSchema);
