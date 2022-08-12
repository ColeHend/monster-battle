const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an username!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  monsters: [],
});

// @ts-ignore
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
