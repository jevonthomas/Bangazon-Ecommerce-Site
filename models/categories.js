'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    name: DataTypes.STRING
  }, {timestamps: false});

  Categories.associate = function(models) {
    Categories.hasMany(models.Products, {
      foreignKey: 'category_id'
    });
  };

  return Categories;
};