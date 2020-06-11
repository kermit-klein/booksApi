"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Books", "authorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Authors",
        as: "author",
        key: "id",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Books", "authorId");
  },
};
