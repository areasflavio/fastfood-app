import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Restaurant from '../app/models/Restaurant';

const models = [Restaurant];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
