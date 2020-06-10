const booksSerializer = {
  index() {
    return {
      attributes: ["id", "title"],
    };
  },
};

module.exports = booksSerializer;
