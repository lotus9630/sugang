const express = require("express");
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const nunjucks = require("nunjucks");
const cors = require("cors");
const passportConfig = require("./passport"); // 여기

const { DBinit } = require("./models");
// DBinit();
require("dotenv").config();

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const subjectRouter = require("./routes/subject");
const studentRouter = require("./routes/student");

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.set("port", 4000);

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "cats", resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/subject", subjectRouter);
app.use("/student", studentRouter);

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
