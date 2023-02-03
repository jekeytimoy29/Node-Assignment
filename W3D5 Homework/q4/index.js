const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  res.redirect(`/output?name=${name}&age=${age}`);
});

app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  if (!name) name = "person";
  if (!age) age = 16;

  res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000, () => console.log("Server is listening to port 3000..."));
