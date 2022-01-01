const { DataTypes, Model } = require("sequelize");

class Subject extends Model {
  static init(sequelize) {
    return super.init(
      {
        subject_code: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        subject_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        max_student: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        current_student: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        min_grade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        max_grade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        subject_kind: {
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
      foreignKey: "subject_code",
    });
    db.Subject.belongsToMany(db.Major, {
      through: "subject_ban_major",
      foreignKey: "subject_code",
    });
  }
}

module.exports = Subject;
