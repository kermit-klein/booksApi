const models = require("../models");
const booksSerializer = require("../serializers/booksSerializer");

const booksController = {
  async index(req, res) {
    const eachSerializer = booksSerializer.index();
    const booksIndex = await models.Book.findAll(eachSerializer);
    res.json({ books: booksIndex });
    //query for db all
    //decide how json object should look like
    //send json object
  },
};

module.exports = booksController;
