const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

require("dotenv").config();

console.log(process.env.MONGO_URL);

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGO_URL, options)
  .then(() => {
    app.listen(PORT, console.log("Server started on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });