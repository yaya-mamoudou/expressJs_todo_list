const express = require("express");
const { expr } = require("jquery");
const path = require("path");
const app = express();
const db = require("./dbConnect/connectDB");

db();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); // if needed

app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);

const todoRoute = require("./routes/todoRoute");
app.use("/", todoRoute);

app.listen(4020, console.log("Server Running on PORT 4020"));
