const express = require("express");
const router = express.Router();
const { Student, Subject } = require("../models");

router.post("/subject", async (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "로그인되어 있지 않습니다" });
    return;
  }
  const studentNumber = req.user.studentNumber;
  const subjectCode = req.body.subjectCode;

  try {
    const student = await Student.findOne({
      where: { studentNumber: studentNumber },
      include: Subject,
      raw: true,
    });
    console.log(student["Subjects.student_subject.studentNumber"] === true);
    if (!student["Subjects.student_subject.studentNumber"]) {
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

router.delete("/subject", async (req, res, next) => {
  const studentNumber = req.user.studentNumber;
  const subjectCode = req.body.subjectCode;
  try {
    const student = await Student.findOne({
      where: { studentNumber: studentNumber },
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

router.get("/subject", async (req, res, next) => {
  try {
    Student;
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
