const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let keyValuePairs = [];

  if (req.cookies.keyValuePairs) {
    keyValuePairs = req.cookies.keyValuePairs;
  }

  res.render("index", {
    title: "Add Cookie Form",
    keyValuePairs: keyValuePairs,
  });
});

app.post("/", (req, res) => {
  const key = req.body.key;
  const value = req.body.value;
  let keyValuePairs = [];

  if (req.cookies.keyValuePairs) {
    keyValuePairs = req.cookies.keyValuePairs;
  }

  keyValuePairs.push({ key: key, value: value });
  res.cookie("keyValuePairs", keyValuePairs);
  res.redirect("back");
});

app.get("/deleteCookies", (req, res) => {
  res.clearCookie("keyValuePairs");
  res.redirect("back");
});

app.listen(3000, () => console.log("Server is listening to port 3000..."));
