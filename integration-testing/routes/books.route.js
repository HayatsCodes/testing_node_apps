const express = require('express');

const bookRoute = express.Router();

bookRoute.get('/', (req, res) => {
    res.status(200).json({
        "message": "Welcome to the Book Router"
    });
});

module.exports = bookRoute;