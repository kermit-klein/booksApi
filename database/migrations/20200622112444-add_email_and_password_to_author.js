"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = [
      queryInterface.addColumn("Authors", "email", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn("Authors", "password", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ];
    return Promise.all(migrations);
  },

  down: (queryInterface, Sequelize) => {
    const migrations = [
      queryInterface.removeColumn("Authors", "email"),
      queryInterface.removeColumn("Authors", "password"),
    ];
    return Promise.all(migrations);
  },
};
