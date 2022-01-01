const { DataTypes, Model } = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    return super.init(
      {
        student_id: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        password: {
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        student_number: {
          type: DataTypes.INTEGER,
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
      foreignKey: "major_name",
      targetKey: "major_name",
    });

    db.Student.belongsToMany(db.Subject, {
      through: "student_subject",
      foreignKey: "student_id",
    });
  }
}

module.exports = Student;
