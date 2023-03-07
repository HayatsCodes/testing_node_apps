const express = require('express');

const bookRoute = express.Router();

bookRoute.get('/api/books', httpGetBook);