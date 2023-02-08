const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extende: false }));

app.use(express.static(path.join(__dirname, "public")));

const answerList = [
  "It is Certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (req, res, next) => {
  res.render("index", { title: "Magic 8" });
});

app.get("/8ball", (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * answerList.length);

  res.setHeader("content-type", "text/plain");
  res.send(answerList[randomIndex]);
});

app.listen(3000, () => console.log("Server is now listening to port 3000..."));
