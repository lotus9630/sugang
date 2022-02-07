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
    res.status(500).send(error);
  }
  res.end();
});

router.get("/all/user", async (req, res, next) => {
  try {
    const studentList = await Student.findAll({
      attributes: ["studentNumber", "email", "grade", "name", "majorName"],
      raw: true,
    });
    res.json(studentList);
  } catch (error) {
    res.status(500).end();
  }
});

router.delete("/user/:studentNumber", (req, res, next) => {
  console.log(req.params.studentNumber);
});

module.exports = router;
