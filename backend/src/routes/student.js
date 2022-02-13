const express = require("express");
const router = express.Router();
const { Student, Subject } = require("../models");

// router.use((req, res, next) => {
//   if (!req.user) res.status(500).json({ message: "로그인되어 있지 않습니다" });
//   next();
// });

router.post("/subject", async (req, res, next) => {
  const studentNumber = req.user.studentNumber;
  const subjectCode = req.body.subjectCode;

  try {
    const isExist = await Student.findOne({
      where: { studentNumber: studentNumber },
      include: [{ model: Subject, where: { subjectCode } }],
      raw: true,
    });
    if (!isExist) {
      const student = await Student.findOne({
        where: { studentNumber: studentNumber },
      });
      await student.addSubject(subjectCode);
      res.end();
    } else {
      res.status(201).json({ error: { message: "이미 등록되어있습니다" } });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/subject/:subjectCode", async (req, res, next) => {
  const studentNumber = req.user.studentNumber;
  const subjectCode = req.params.subjectCode;

  try {
    const student = await Student.findOne({
      where: { studentNumber },
    });

    if (student) {
      await student.removeSubject(subjectCode);
      res.end();
    } else {
      res.status(404).send("학생 정보가 잘못되었습니다");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/current", async (req, res, next) => {
  console.log(req.user);
  res.json(req.user);
});

router.get("/subjectall", async (req, res, next) => {
  const studentNumber = req.user.studentNumber;
  try {
    const subjectList = await Student.findAll({
      where: { studentNumber },
      include: [{ model: Subject }],
      raw: true,
    });
    const filtered = subjectList.map((subject) => {
      return {
        subjectCode: subject["Subjects.subjectCode"],
        subjectName: subject["Subjects.subjectName"],
        maxStudent: subject["Subjects.maxStudent"],
        minGrade: subject["Subjects.minGrade"],
        maxGrade: subject["Subjects.maxGrade"],
        subjectKind: subject["Subjects.subjectKind"],
        majorName: subject["Subjects.majorName"],
        currentStudent: subject["Subjects.currentStudent"],
      };
    });
    res.json(filtered);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
