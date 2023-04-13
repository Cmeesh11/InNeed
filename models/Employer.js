const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class Employer extends Model {
  checkPassword(loginPw){
    return bcrypt.compareSync(loginPw, this.password)
  }
}

Employer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      async beforeCreate(userInstance) {
        userInstance.password = await bcrypt.hash(userInstance.password, 10);
        return userInstance;
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "employer",
  }
);

module.exports = Employer;