const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
  res.send({ message: "Server Running" });
  console.log("Hitting /api");
});

module.exports = indexRouter;