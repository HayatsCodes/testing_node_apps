const express = require("express");

const ProductRoutes = require("./routes/product.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ alive: "True" });
  });

app.use("/api/products", ProductRoutes);

module.exports = app;