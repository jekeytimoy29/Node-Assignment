$(() => {
  let timer = null;
  const TIMEOUT = 5000;

  const hideAlertSuccess = () => $("#alert-success").removeClass("show");
  const hideAlertFailed = () => $("#alert-failed").removeClass("show");

  $("#productForm").submit(() => {
    const data = { productId: $("#productId").val() };
    $.post({
      url: "/product/addToCart",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
    })
      .done(successFunc)
      .fail(errorFunc);
    return false;
  });

  $("#alert-success .my-close").click(() => {
    hideAlertSuccess();
    clearTimeout(timer);
    timer = null;
  });
  $("#alert-failed .my-close").click(() => {
    hideAlertFailed();
    clearTimeout(timer);
    timer = null;
  });

  const successFunc = (data) => {
    $("#alert-success > a").text(`Shopping Cart (${data})`);
    $(".my-nav #cartItemLink").text(`Shopping Cart (${data})`);
    $("#alert-success").addClass("show");
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(hideAlertSuccess, TIMEOUT);
  };

  const errorFunc = (xhr, state, exception) => {
    console.log(exception);
    $("#alert-failed").addClass("show");
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(hideAlertFailed, TIMEOUT);
  };
});
