const express = require("express");
const path = require("path");

const app = express();

app.set("port", 4000);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
