const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
  res.json({ message: "Server Running" });
  console.log(req);
});

module.exports = indexRouter;