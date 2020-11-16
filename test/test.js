const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("respond with welcome to CI and CD with github actions ", (done) => {
        request(app).get("/").expect("Welcome to Ci and CD with github actions", done);
    })
});