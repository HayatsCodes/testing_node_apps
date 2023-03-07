const express = require('express');

const bookRoute = express.Router();

bookRoute.get('/api/books', (req, res) => {
    res.status(200).json({
        "message": "Welcome to the Book Router"
    })
});