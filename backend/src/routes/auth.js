const express = require("express");
const router = express.Router();
const { Student, Major } = require("../models");

router.get("/", (req, res, next) => {
  res.send("this is auth router");
});

router.post("/signup", async (req, res, next) => {
  const body = req.body;
  try {
    await Student.create({ ...body });
    const majorInstance = await Major.findOne({
      where: { majorName: body.majorName },
    });
    await Major.update(
      { currentCapacity: majorInstance.dataValues.currentCapacity + 1 },
      { where: { majorName: body.majorName } }
    );
  } catch (error) {
    res.status(500).end();
  }

  res.status(201).end();
});

module.exports = router;
