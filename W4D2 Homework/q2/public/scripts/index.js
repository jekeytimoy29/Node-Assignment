$(() => {
  $("#msg").text("");
  $("#questionForm").submit(() => {
    $.get("/8ball").done(successFunc).fail(errorFunc);
    return false;
  });
});

function successFunc(data) {
  $("#msg").text("");
  $("#questionField")
    .focus(function () {
      this.select();
    })
    .val(data)
    .focus();
}

function errorFunc(xhr, state, exception) {
  console.log(exception);
  $("#msg").text("Cannot connect to server...");
}
