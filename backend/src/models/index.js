const { Sequelize } = require("sequelize");
const Student = require("./student");
const Major = require("./major");

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
db.Major = Major;

Student.init(sequelize);
Major.init(sequelize);

Student.associate(db);
Major.associate(db);

const DBinit = async () => {
  await sequelize.sync();
  console.log("The table for the User model was just created");
};

DBinit();
