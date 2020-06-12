const app = require("../../app");
const supertest = require("supertest");
// const expect = require("chai").expect;
const jsonResponse = require("../jsonResponse");
const { expect, factory } = require("../test_helper");
let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

beforeEach(async () => {
  const author = await factory.create("Author", { id: 100, name: "ali" });
  await factory.createMany("Book", 2, [
    { id: 1, title: "A Book", authorId: author.id },
    { id: 2, title: "Another Book", authorId: author.id },
  ]);
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/v1/book", () => {
  beforeEach(async () => {
    response = await request.get("/api/v1/books");
  });

  it("response with status 200", () => {
    expect(response.status).to.equal(200);
  });
  it("response with a collection of books", () => {
    const expectedBody = {
      books: [
        { id: 1, title: "A Book", author: { name: "ali" } },
        { id: 2, title: "Another Book", author: { name: "ali" } },
      ],
    };
    expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody));
  });
});
