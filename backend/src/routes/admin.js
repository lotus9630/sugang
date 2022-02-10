const express = require("express");
const router = express.Router();
const { Subject, Student } = require("../models");

// router.use((req, res, next) => {
//   if (req.user.name !== "admin")
//     res.status(500).json({ message: "관리자 계정이 아닙니다" });
//   next();
// });

router.post("/subject", async (req, res, next) => {
  const body = req.body;
  try {
    await Subject.create({ ...body });
    res.end();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/all/user", async (req, res, next) => {
  try {
    const studentList = await Student.findAll({
      attributes: ["studentNumber", "email", "grade", "name", "majorName"],
      raw: true,
    });
    res.json(studentList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/user/:studentNumber", async (req, res, next) => {
  const studentNumber = req.params.studentNumber;
  try {
    await Student.destroy({ where: { studentNumber: studentNumber } });
    res.end();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
