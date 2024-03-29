const mongoose = require("mongoose");
const morgan = require('morgan');
require("dotenv").config();
const app = require("./app");

app.use(morgan('tiny'));

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};



mongoose.connection.once('open', () => {
  console.log('MongoDB Ready!');
})

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGO_URL, options)
  .then(() => {
    app.listen(PORT, console.log("Server started on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });