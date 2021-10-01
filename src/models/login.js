const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  let login = sequelize.define(
    "login",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      _id:{
          type: Sequelize.INTEGER,
          allownull: true
      },
      email: {
        type: Sequelize.STRING(200),
        allownull: false,
      },
      password: {
        type: Sequelize.STRING(200),
        allownull: false,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        defaultValue: Sequelize.now,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        defaultValue: Sequelize.now,
      },
    //   {
    //       timestamp: true
    //   }
    }
   
  );
  return login;
};