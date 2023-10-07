const Sequelize = require("sequelize");
const { productModel } = require("../models/product_model");
const { orderModel } = require("../models/order_model");
const { orderProductModel } = require("../models/orderProduct_model");

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

db.product = productModel
(sequelize, Sequelize);

db.order = orderModel
(sequelize, Sequelize);

db.orderProduct = orderProductModel
(sequelize, Sequelize);

// connect table order dengan orderProduct
db.order.hasMany(db.orderProduct, { foreignKey: 'orderId' });
db.orderProduct.belongsTo(db.order, { foreignKey: 'orderId' });


module.exports = db;