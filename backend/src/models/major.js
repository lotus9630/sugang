const { DataTypes, Model } = require("sequelize");

class Major extends Model {
  static init(sequelize) {
    return super.init(
      {
        // Model attributes are defined here
        majorName: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        currentCapacity: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        maxCapacity: {
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
      foreignKey: "majorName",
      sourceKey: "majorName",
    });
    db.Major.belongsToMany(db.Subject, {
      through: "subject_ban_major",
      foreignKey: "majorName",
    });
    db.Major.hasMany(db.Subject, {
      foreignKey: "majorName",
      allowNull: true,
      onDelete: "cascade",
    });
  }
}

module.exports = Major;
