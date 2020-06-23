const app = require("../../app");
const supertest = require("supertest");
const { factory, expect } = require("../test_helper");

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

beforeEach(async () => {
  const author = await factory.create("Author", {
    id: 100,
    name: "Gabriel",
    email: "gabriel@heaven.org",
    password: "password",
  });
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/v1/auth", () => {
  describe("with valid credentials", () => {
    beforeEach(async () => {
      await request
        .post("/api/v1/auth/login")
        .send({ email: "gabriel@heaven.org", password: "password" })
        .then((res) => {
          response = res; // let's save the response for assertions
        });
    });
    it("should respond with 200", () => {
      expect(response.status).to.equal(200);
    });

    it("should return a token", () => {
      expect(response.body)
        .to.be.an.instanceof(Object)
        .and.to.have.property("token");
    });
  });

  describe("with invalid credentials", () => {
    beforeEach(async () => {
      await request
        .post("/api/v1/auth/login")
        .send({ email: "gabriel@heaven.org", password: "wrong-password" })
        .then((res) => {
          response = res; // let's save the response for assertions
        });
    });
    it("should respond with 401", () => {
      expect(response.status).to.equal(401);
    });
  });
});
