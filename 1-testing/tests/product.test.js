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
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.name).toBe('CarX');
        expect(res.body.price).toBe(10000000);
    });
});