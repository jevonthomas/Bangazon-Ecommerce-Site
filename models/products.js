'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    date_added: DataTypes.DATE
  });

  Products.associate = (models) => {
  };
  
  return Products;
};