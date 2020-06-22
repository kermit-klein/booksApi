module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "ali",
    email: "ali@mail.com",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
