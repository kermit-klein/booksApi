const app = require("../app");
const supertest = require("supertest");
const expect = require("chai").expect;
const jsonResponse = require("./jsonResponse");

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

describe("GET /api/v1/book", () => {
  before(async () => {
    response = await request.get("/api/v1/books");
  });

  it("response with status 200", () => {
    expect(response.status).to.equal(200);
  });
  it("response with a collection of books", () => {
    const expectedBody = {
      books: [{ title: "A Book" }, { title: "Another Book" }],
    };
    expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody));
  });
});
