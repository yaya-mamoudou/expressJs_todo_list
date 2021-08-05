const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  //   _id: { type: String },
  username: { type: String },
});

module.exports = mongoose.model("users", userModel);
