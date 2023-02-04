const express = require("express");
const path = require("path");
const app = express();
const date = new Date();
const hour = date.getHours();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));

app.use("/css", express.static(path.join(__dirname, "public", "style")));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
    css: hour >= 6 && hour < 18 ? "day.css" : "night.css",
  });
});

app.listen(3000, () => console.log("Server is now listening to port 3000..."));
