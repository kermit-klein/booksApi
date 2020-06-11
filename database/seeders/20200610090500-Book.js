"use strict";
const models = require("../../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const thomas = await models.Author.create({ name: "Thomas" });
    // const adi = await models.Author.create({ name: "Adi" });

    await queryInterface.bulkInsert("Authors", [
      { name: "Oliver", createdAt: new Date(), updatedAt: new Date() },
      { name: "Emma", createdAt: new Date(), updatedAt: new Date() },
    ]);
    const authors = await queryInterface.sequelize.query(
      `SELECT * FROM "Authors";`
    );
    const authorsRows = authors[0];
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Learn NodeJS with Thomas",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: authorsRows[0].id,
        },
        {
          title: "Learn Sequelize with Adi",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: authorsRows[1].id,
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
