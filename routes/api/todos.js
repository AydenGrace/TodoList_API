const router = require("express").Router();
const mongoose = require("mongoose");
const todoSchema = require("./../../models/todo.schema");
const Todos = mongoose.model("todos", todoSchema);

// Route par défaut
router.get("/", (req, res) => {
  Todos.find()
    .then((data) => res.status(200).json(data))
    .catch((e) => {
      console.error(e);
      res.send(-1);
    });
});

// Route pour récupérer les Todos
router.get("/get", (req, res) => {
  Todos.find()
    .then((data) => res.send(data))
    .catch((e) => console.error(e));
});
// Route pour ajouter un todo
router.post("/add", (req, res) => {
  const body = req.body;
  console.log(body);
  const newTodo = new Todos(body);
  newTodo
    .save()
    .then((t) => {
      console.log(t);
      res.status(200).json(t);
    })
    .catch((e) => {
      console.error(e);
      res.send(-1);
    });
});
// Route qui supprime une todo
router.delete("/delete", (req, res) => {
  console.log(req);
  res.send("Todo Supprimé");
});
// Route qui modifie une todo
router.patch("/update", (req, res) => {
  console.log(req);
  res.send("Todo Modifié");
});

// Exportation des routes
module.exports = router;
