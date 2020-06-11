const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");
const { expect, factory } = require("../test_helper");

const Book = require("../../models/book");
const Author = require("../../models/author");

describe("Book", () => {
  const DescribedModel = Book(sequelize, dataTypes);
  const subject = new DescribedModel();
  checkModelName(DescribedModel)("Book");
  checkPropertyExists(subject)("title");

  describe("constraints", () => {
    it("reject null value for title", async () => {
      try {
        await factory.create("Book", {
          title: null,
        });
        expect.fail();
      } catch (error) {
        expect(error.errors).to.containSubset([
          {
            message: "Book.title cannot be null",
          },
        ]);
      }
    });
  });
  describe("validation", () => {
    it("rejects empty string", async () => {
      try {
        await factory.create("Book", {
          title: "",
        });
        expect.fail();
      } catch (error) {
        expect(error).to.include({
          message: "Validation error: You need to set a title!",
        });
      }
    });
  });

  describe("associations", () => {
    before(() => {
      DescribedModel.associate({ Author });
    });
    it("defines a belongsTo association with Author", () => {
      expect(DescribedModel.belongsTo).to.have.been.calledWith(Author);
    });
  });
});
