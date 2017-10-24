'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {timestamps: false});

  return user;
};
