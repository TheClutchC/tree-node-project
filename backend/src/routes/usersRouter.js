const express = require('express');
const usersRouter = express.Router();

// Routes files help breakup the server.js 
// file into smaller chunks instead of
// having every possible route in one file


usersRouter.get('/', (req, res, next) => {
  res.json({  message: "Users" });
  console.log(req);
});

usersRouter.get('/login', (req, res, next) => {
  res.json({  message: "Login User" });
  console.log(req);
});

usersRouter.get('/register', (req, res, next) => {
  res.json({  message: "Register New User" });
  console.log(req);
});

module.exports = usersRouter;