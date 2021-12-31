const { DataTypes, Model } = require("sequelize");

class Major extends Model {
  static init(sequelize) {
    return super.init(
      {
        // Model attributes are defined here
        major_name: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        student_number: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        capacity: {
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
    db.Major.hasMany(db.Student);
  }
}

module.exports = Major;
