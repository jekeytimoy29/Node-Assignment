const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    '<form action="/result" method="post"><label for="nameInput">Name:<input type="text" id="nameInput" name="name" required></label><label for="ageInput">Age:<input type="number" id="ageInput" name="age" required></label><input type="submit" value="Submit Query"></form>'
  );
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  if (!name) name = "person";
  if (!age) age = 16;

  res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000, () => console.log("Server is listening to port 3000..."));
