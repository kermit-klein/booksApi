module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "Foo",
  });
};
