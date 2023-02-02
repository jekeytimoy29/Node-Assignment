const express = require("express");
const app = express();
app.get("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  if (!name) name = "person";
  if (!age) age = 16;

  res.send(`Welcome ${name}, ${age} years old.`);
});
app.listen(3000, () => console.log("Server is listening to port 3000..."));
