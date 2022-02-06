const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log(req.user);
  res.send("this is home page");
});

module.exports = router;
