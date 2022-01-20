const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoModel = new Schema({
  todo: { type: String },
  color: { type: String },
  bg: { type: String },
});

module.exports = mongoose.model("todo", todoModel);
