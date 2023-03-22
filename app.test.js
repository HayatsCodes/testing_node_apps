const request = require("supertest");
const app = require("./app");

describe('Test example', () => {
    test('GET /', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                res.body.data.length = 1;
                res.body.data[0].email = 'test@example.com';
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    }, 10000);
    
    test('POST /send', (done) => {
        request(app)
            .post('/send')
            .expect('Content-Type', /json/)
            .send({
                email: 'francisco@example.com',
            })
            .expect(201)
            .expect((req) => {
                req.body.data.id =
            })
    }, 10000);
});