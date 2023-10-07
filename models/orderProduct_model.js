function orderProductModel(sequelize, Sequelize) {
    const OrderProduct = sequelize.define(
        "order_product",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            productName: {
                type: Sequelize.STRING(50), 
                allowNull: false,
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            satuan: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            orderId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'orders',
                    key: 'id',
                },
            },
        },
        {
            freezeTableName: true,
        }
    );
    return OrderProduct;
}

module.exports = {
    orderProductModel: orderProductModel,
};
