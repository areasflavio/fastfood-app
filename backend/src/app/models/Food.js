import Sequelize, { Model } from 'sequelize';

class Food extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        ingredients: Sequelize.STRING,
        category: Sequelize.STRING,
        image_url: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'foods',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant',
    });
  }
}

export default Food;
