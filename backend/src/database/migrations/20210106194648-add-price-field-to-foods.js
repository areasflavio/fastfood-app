'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('foods', 'price', {
      type: Sequelize.DOUBLE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('foods', 'price');
  },
};
