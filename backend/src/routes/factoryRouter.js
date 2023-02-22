const express = require('express');
const factoryRouter = express.Router();

factoryRouter.get('/', function(req, res) {
  res.send({ message: "Server Running" });
  console.log("Hitting /api");
});

module.exports = factoryRouter;