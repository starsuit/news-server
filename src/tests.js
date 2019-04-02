const test = require("tape");
const supertest = require("supertest");
const router = require("./router");

test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

test("Home route", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.equal(res.text, "Hello", "response should contain 'Hello'");
      t.end();
    });
});

test("Public route (css)", t => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .expect("Content-Type", /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("Public route (js)", t => {
  supertest(router)
    .get("/public/script.js")
    .expect(200)
    .expect("Content-Type", /javascript/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});
