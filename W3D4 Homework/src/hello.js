const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  const input = require("./input").input;

  nameInput = await input(readline, "What is your name? ");
  console.log(`Welcome ${nameInput}`);
  age = await input(readline, "How old are you? ");
  if (age < 16) console.log("You’re not allowed to drive in Iowa");
  else console.log("You’re allowed to get a drivers license in Iowa");

  readline.close();
};

main();
