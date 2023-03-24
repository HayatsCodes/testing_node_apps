const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../app');

require('dotenv').config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URL)
});

afterEach(async () => {
    await mongoose.connection.close();
});

describe('GET /api/products', () => {
    it('should return all products', async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    })
})