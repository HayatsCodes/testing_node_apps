const request = require("supertest");
const app = require("./app");

describe('Test example', () => {
    test('Get /', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                res.body.data.length = 1;
                res.bo
            })
    });
});