const express = require("express");
const router = express.Router();
const { Student, Major } = require("../models");
const passport = require("passport");
const { createHashedPassword } = require("../utils/crypto");

router.post("/signup", async (req, res, next) => {
  const body = req.body;
  const { password, salt } = await createHashedPassword(body.password);
  try {
    await Student.create({ ...body, password, salt });
    const majorInstance = await Major.findOne({
      where: { majorName: body.majorName },
    });
    await Major.update(
      { currentCapacity: majorInstance.dataValues.currentCapacity + 1 },
      { where: { majorName: body.majorName } }
    );
    res.status(201).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "login/failure",
  }),
  (req, res) => {
    res.redirect("login/success");
  }
);

router.get("/login/success", (req, res, next) => {
  res.json(req.user);
});

router.get("/login/failure", (req, res, next) => {
  res.status(500).json({ message: "로그인에 실패하였습니다" });
});

router.post("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
