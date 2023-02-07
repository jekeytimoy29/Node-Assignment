const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "salt bae" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (!req.session.person) req.session.person = {};

  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "Person Form" });
});

app.post("/result", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  let person = {};

  if (req.session.person) person = req.session.person;

  person.name = name;
  person.age = age;

  req.session.person = person;

  res.redirect("/output");
});

app.get("/output", (req, res) => {
  let name;
  let age;

  if (req.session.person) {
    name = req.session.person.name;
    age = req.session.person.age;
  }

  if (!name) name = "person";
  if (!age) age = 16;

  res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000, () => console.log("Server is listening to port 3000..."));
