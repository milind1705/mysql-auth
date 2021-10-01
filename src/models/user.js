const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING(200),
        allownull: false,
      },
      last_name: {
        type: Sequelize.STRING(200),
        allownull: false,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        defaultValue: sequelize.now,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        defaultValue: sequelize.now,
      },
    //   {
    //     timestamps: true,
    //   }
    },
    
  );
  return user;
};
