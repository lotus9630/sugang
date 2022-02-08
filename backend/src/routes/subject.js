const express = require("express");
const router = express.Router();
const { Subject } = require("../models");

router.get("/all", async (req, res, next) => {
  // 모든 과목 조회
  try {
    const subjectList = await Subject.findAll({ raw: true });
    res.json(subjectList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/major", async (req, res, next) => {
  // 전공 과목 조회
  try {
    const subjectList = await Subject.findAll({
      where: { subjectKind: "전공" },
      raw: true,
    });
    res.json(subjectList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/base", async (req, res, next) => {
  // 기초 과목 조회
  try {
    const subjectList = await Subject.findAll({
      where: { subjectKind: "기초" },
      raw: true,
    });
    res.json(subjectList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/liberal", async (req, res, next) => {
  // 교양 과목 조회
  try {
    const subjectList = await Subject.findAll({
      where: { subjectKind: "교양" },
      raw: true,
    });
    res.json(subjectList);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
