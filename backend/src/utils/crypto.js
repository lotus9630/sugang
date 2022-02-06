const crypto = require("crypto");
const { Student } = require("../models");

const createSalt = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });

const createHashedPassword = (plainPassword) =>
  new Promise(async (resolve, reject) => {
    const salt = await createSalt();
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });

const makePasswordHashed = (email, plainPassword) =>
  new Promise(async (resolve, reject) => {
    // salt를 가져오는 부분은 각자의 DB에 따라 수정
    const salt = await Student.findOne({
      attributes: ["salt"],
      raw: true,
      where: {
        email,
      },
    }).then((result) => result.salt);
    crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve(key.toString("base64"));
    });
  });

module.exports = { createHashedPassword, makePasswordHashed };
