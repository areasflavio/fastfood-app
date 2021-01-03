import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Restaurant from '../app/models/Restaurant';
import Food from '../app/models/Food';

const models = [Restaurant, Food];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
