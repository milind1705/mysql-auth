const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  let admin = sequelize.define(
    "admins",
    {
      id: {
        type: Sequelize.INTEGER,
        autoincrement: false,
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
  return admin;
};
