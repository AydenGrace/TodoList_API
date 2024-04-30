const router = require("express").Router();

const apiTodo = require("./todos");

router.use("/todos", apiTodo);

router.get("/", (req, res) => {
  //   res.send("API");
  // res.send(`<a href="/api/todos">Todo</a>`);
});

module.exports = router;
