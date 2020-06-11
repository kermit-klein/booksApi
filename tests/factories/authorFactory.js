module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "ali",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
