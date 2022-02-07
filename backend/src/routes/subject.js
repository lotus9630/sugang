const express = require("express");
const router = express.Router();

router.get("/all", (req, res, next) => {
  // 모든 과목 조회
});

router.get("/major", (req, res, next) => {
  // 전공 과목 조회
});

router.get("/base", (req, res, next) => {
  // 기초 과목 조회
});

router.get("/liberal", (req, res, next) => {
  // 교양 과목 조회
});

router.post("/", (req, res, next) => {});

module.exports = router;
