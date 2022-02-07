const { Sequelize } = require("sequelize");
const Student = require("./student");
const Major = require("./major");
const Subject = require("./subject");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.dialect }
);

db.Student = Student;
db.Subject = Subject;
db.Major = Major;

Student.init(sequelize);
Major.init(sequelize);
Subject.init(sequelize);

Student.associate(db);
Subject.associate(db);
Major.associate(db);

const DBinit = async () => {
  await sequelize.sync({ force: true });
  await Major.create({
    majorName: "기계공학과",
    maxCapacity: 30,
  });

  await Major.create({
    majorName: "화학공학과",
    maxCapacity: 30,
  });

  await Major.create({
    majorName: "생명공학과",
    maxCapacity: 30,
  });

  await Major.create({
    majorName: "컴퓨터공학과",
    maxCapacity: 30,
  });

  await Major.create({
    majorName: "전자공학과",
    maxCapacity: 30,
  });

  console.log("The table for the User model was just created");
};

module.exports = { Student, Major, Subject, DBinit };
