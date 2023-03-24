const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../app');

require('dotenv').config();

let productId = 0;

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URL)
});

afterEach(async () => {
    await mongoose.connection.close();
});

describe('GET /api/products', () => {
    it('should return all products', async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].name).toBe('CarX');
        expect(res.body[0].price).toBe(10000000);
        productId = res.body[0]._id
    });
});

describe('GET /api/products/:id', () => {
    it('should return a product', async () => {
        const res = await request(app).get(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).not.toBeNull();
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.name).toBe('CarX');
        expect(res.body.price).toBe(10000000);
    });

});

describe('POST /api/products', () => {
    it('should create a product', async () => {
        const res = await request(app).post('/api/products/')
        .send({
            name: "CarX-2",
            price: 12500000,
            description: "x2 Improved",
          });
          expect(res.statusCode).toBe(201);
          expect(res.body.name).toBe("CarX-2");
    });
});

describe('PATCH /api/products/:id',  () => {
    it ('should update a product', async () => {
        const res = await request(app).post('/api/products/')
        .send({
            name: "CarX-1",
            description: "Standard",
          });
    });
});