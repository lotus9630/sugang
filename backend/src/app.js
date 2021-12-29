const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.set("port", 4000);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터를 찾을 수 없습니다`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
