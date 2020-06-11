const models = require("../models");
const booksSerializer = {
  index() {
    return {
      attributes: ["id", "title"],
      include: [
        {
          model: models.Author,
          as: "author",
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        },
      ],
    };
  },
};

module.exports = booksSerializer;
