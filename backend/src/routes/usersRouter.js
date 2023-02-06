const express = require('express');
const usersRouter = express.Router();

// Routes files help breakup the server.js 
// file into smaller chunks instead of
// having every possible route in one file

const authorizeUsersAccess = (req, res, next) => {
  if (req.query.admin === 'true') {
    req.admin = true;
    next();
  } else {
    res.send('ERROR: You must be an admin');
  }
}

usersRouter.get('/', authorizeUsersAccess, (req, res) => {
  res.json({  message: "Users" });
  console.log(req.admin);
});

usersRouter.get('/login', (req, res) => {
  res.json({  message: "Login User" });
  console.log(req);
});

usersRouter.get('/register', (req, res) => {
  res.json({  message: "Register New User" });
  console.log(req);
});

module.exports = usersRouter;