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
        current_capacity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        max_capacity: {
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
    db.Major.hasMany(db.Student, {
      foreignKey: "major_name",
      sourceKey: "major_name",
    });
    db.Major.belongsToMany(db.Subject, {
      through: "subject_ban_major",
      foreignKey: "major_name",
    });
  }
}

module.exports = Major;
