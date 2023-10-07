function productModel(sequelize, Sequelize) {
  const Product = sequelize.define(
    "products",
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
      price: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      satuan: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      image: {
          type: Sequelize.STRING(255),
          allowNull: false,
      }
    },
    {
      freezeTableName: true,
    }
  );

  return Product;
}

module.exports = {
  productModel: productModel,
};