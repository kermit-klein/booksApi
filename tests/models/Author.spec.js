const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");
const { expect, factory } = require("../test_helper");

const Book = require("../../models/book");
const Author = require("../../models/author");

describe("Author", () => {
  const Describedmodel = Author(sequelize, dataTypes);
  const subject = new Describedmodel();

  checkModelName(Describedmodel)("Author");
  checkPropertyExists(subject)("name");
});
