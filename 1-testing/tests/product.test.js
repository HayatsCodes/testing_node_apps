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

describe('GET /api/products')