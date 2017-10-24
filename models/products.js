'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    date_registered: DataTypes.DATE,
    category_id: DataTypes.INTEGER
  }, {timestamps: false});

  Products.associate = (models) => {
    Products.belongsTo(models.Categories, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE'
    });
  };
  
  return Products;
};