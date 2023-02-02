function input(readline, prompt) {
  return new Promise((callbackFunction, errorFunction) => {
    readline.question(
      prompt,
      (uinput) => {
        callbackFunction(uinput);
      },
      () => {
        errorFunction();
      }
    );
  });
}

module.exports = { input: input };
