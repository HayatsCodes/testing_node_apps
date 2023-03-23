const request = require("supertest");
const app = require("./app");

let elementId = 0;

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
            .expect((res) => {
                res.body.data.length = 2;
                res.body.data[0].email = "test@example.com";
                res.body.data[1].email = "francisco@example.com";
              })
              .end((err, res) => {
                if (err) return done(err);
                elementId = res.body.data[1].id;
                return done();
              });
    }, 10000);

    test('PUT /update/:id', async (done) => {
        const response = await request(app)
        .put(`/update/:${elementId}`)
        .send({
            email: 'hayatscodes@gmail.com'
        })
        expect('Content-Type', /json/)
        expect(response.headers["Content-Type"]).toMatch(/json/);
        expect(response.status).toEqual(200)
        expect()
                res.body.data.length = 2;
                res.body.data[0].email = "test@example.com";
                res.body.data[1].id = elementId;
                res.body.data[1].email = "hayatscodes@gmail.com";
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    }, 10000)
});