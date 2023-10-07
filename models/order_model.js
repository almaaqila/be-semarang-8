function orderModel(sequelize, Sequelize) {
  const Order = sequelize.define(
    "orders",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      phone: {
          type: Sequelize.STRING(50),
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },

      province: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

      city: {
          type: Sequelize.STRING(50),
          allowNull: false,
      },
      
      district: {
          type: Sequelize.STRING(50),
          allowNull: false,
      },
      
      postalcode: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  
  Order.associate = (models) => {
    Order.hasMany(models.OrderProduct, { foreignKey: 'orderId' });
  };

  return Order;
}

module.exports = {
  orderModel: orderModel,
};