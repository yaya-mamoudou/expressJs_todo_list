const express = require("express");
const todoModel = require("../models/todoModel");

const todoRoute = express.Router();

todoRoute.post("/addTodo", async (req, res) => {
  let todo;

  let bg = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${(0.4 + Math.random() * 0.4).toFixed(
    2
    )})`;
  
  req.body.bg = bg;

  req.body.color = "white";
  
  try {
    todo = await new todoModel(req.body);
    await todo.save();
  } catch (error) {
    res.send(error.message);
  }
  await res.redirect("/");
});

todoRoute.route("/").get(async (req, res) => {
  let allTodos;
  try {
    allTodos = await todoModel.find();
  } catch (error) {
    res.send(error.message);
  }

  res.render("index", {
    todo: allTodos,
  });
});

todoRoute.post("/removeTodo/:id", async (req, res) => {
  await todoModel.deleteOne({ _id: req.params.id });
  res.redirect("/");
});

todoRoute.post("/updateTodo/:id", async (req, res) => {
  let update = await req.body[req.params.id];
  await todoModel.findByIdAndUpdate(
    req.params.id,
    { todo: update },
    (err, todo) => {
      if (err) {
        return res.send({ err: "unsuccessful" });
      } else {
        res.redirect("/");
      }
    }
  );
});
module.exports = todoRoute;
