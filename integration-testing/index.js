const express = require('express');
const bookRoute = require('./routes/books.route')

const app = express();

app.use(express.json());

app.use('/', bookRoute);

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})