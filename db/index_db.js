const Sequelize = require("sequelize");
const productModel = require("../models/product_model");
const { orderModel } = require("../models/order_model");

const sequelize = new Sequelize('railway','root', 'B7Z93bVKh6BSeD9C3fPH', {
  host: 'containers-us-west-89.railway.app',
  dialect: "mysql",
  port: '7529',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = productModel.productModel
(sequelize, Sequelize);

db.order = orderModel
(sequelize, Sequelize);

module.exports = db;