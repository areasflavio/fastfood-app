import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'restaurant',
      }
    );

    this.addHook('beforeSave', async (restaurant) => {
      if (restaurant.password) {
        restaurant.password_hash = await bcrypt.hash(restaurant.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Restaurant;
