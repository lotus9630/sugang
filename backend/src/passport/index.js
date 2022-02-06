const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Student } = require("../models");
const { makePasswordHashed } = require("../utils/crypto");

module.exports = () => {
  passport.serializeUser((user, done) => {
    // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((user, done) => {
    // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    // User.findById(id, (err, user) => { // 로그인 폼에서
    //     done(null, user); //
    //   });

    done(null, {
      studentNumber: user.studentNumber,
      email: user.email,
      grade: user.grade,
      name: user.name,
      majorName: user.majorName,
    }); // 여기의 user가 req.user가 됨
  });

  passport.use(
    new LocalStrategy(
      {
        // local 전략을 세움
        usernameField: "email",
        passwordField: "password",
        session: true, // 세션에 저장 여부
        passReqToCallback: false,
      },
      async (email, password, done) => {
        // 맞는 아이디인지 확인
        const passwordHashed = await makePasswordHashed(email, password);

        const studentInstance = await Student.findOne({
          where: { email, password: passwordHashed },
        });
        if (studentInstance) done(null, studentInstance.dataValues);
        else
          done(null, false, { message: "이메일 또는 비밀번호가 틀렸습니다" });
      }
    )
  );
};
