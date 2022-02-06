const { DataTypes, Model } = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    return super.init(
      {
        studentNumber: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        salt: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        grade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Student.belongsTo(db.Major, {
      foreignKey: "majorName",
      targetKey: "majorName",
    });

    db.Student.belongsToMany(db.Subject, {
      through: "student_subject",
      foreignKey: "studentNumber",
    });
  }
}

module.exports = Student;
