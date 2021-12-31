const { DataTypes, Model } = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    return super.init(
      {
        // Model attributes are defined here
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
      },
      {
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Student.belongsTo(db.Major);
  }
}

module.exports = Student;
