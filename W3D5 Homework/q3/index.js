const express = require("express");
const app = express();
const path = require("path");
const date = new Date();
const hour = date.getHours();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  if (!name) name = "person";
  if (!age) age = 16;

  res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000, () => console.log("Server is listening to port 3000..."));
