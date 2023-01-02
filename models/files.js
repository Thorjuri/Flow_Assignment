'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Files.init({
    filesId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    board: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extension: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Files',
    timestamps: true,
  });
  return Files;
};