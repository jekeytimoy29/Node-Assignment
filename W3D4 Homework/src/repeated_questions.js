const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  const input = require("./input").input;
  let sum = 0;

  console.log(await getNumber(input, sum));

  readline.close();
};

const getNumber = async (input, sum) => {
  numberInput = await input(readline, "Enter a number? ");
  let realNum = parseInt(numberInput);

  if (!isNaN(realNum)) sum += realNum;

  if (numberInput !== "stop") sum = await getNumber(input, sum);

  return sum;
};

main();
