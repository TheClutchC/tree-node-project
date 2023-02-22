const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
  res.send({ message: "Home Here" });
  console.log("Hitting the Backend Too!");
});

module.exports = indexRouter;