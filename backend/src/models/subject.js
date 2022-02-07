const { DataTypes, Model } = require("sequelize");

class Subject extends Model {
  static init(sequelize) {
    return super.init(
      {
        subjectCode: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        subjectName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        maxStudent: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        currentStudent: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        minGrade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        maxGrade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        subjectKind: {
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
    db.Subject.belongsToMany(db.Student, {
      through: "student_subject",
      foreignKey: "subjectCode",
    });
    db.Subject.belongsToMany(db.Major, {
      through: "subject_ban_major",
      foreignKey: "subjectCode",
    });
  }
}

module.exports = Subject;
