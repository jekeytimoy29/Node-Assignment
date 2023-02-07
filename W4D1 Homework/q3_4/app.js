const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./routes/index-route");
const productRouter = require("./routes/product-route");
const shoppingCartRouter = require("./routes/shopping-cart-route");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "salt bae products" }));
app.use(express.static(path.join(__dirname, "public")));

// set initial session for cart
app.use(function (req, res, next) {
  if (!req.session.cartItems) req.session.cartItems = [];

  next();
});

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/shoppingcart", shoppingCartRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => console.log("Server is now listening to port 3000..."));

module.exports = app;
