const mongoose = require("mongoose");
const pass = "yayamamoudou";
const uri = `mongodb+srv://yaya:${pass}@cluster0.gdweg.mongodb.net/myTodo?retryWrites=true&w=majority`;

const connectDB = async () => {
  mongoose
    .connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("connection to database failed"));
};

module.exports = connectDB;
