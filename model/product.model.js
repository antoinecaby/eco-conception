const { DataTypes } = require("sequelize");
const { bdd } = require("./../framework/connexion.js");

const Product = bdd.define("product", {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(7, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.MEDIUMINT,
    allowNull: false,
    defaultValue: 0,
  },
  reference: {
    type: DataTypes.STRING(12),
  },
  picture: {
    type: DataTypes.STRING(2083),
  },
});

module.exports = Product;
