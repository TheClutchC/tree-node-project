const express = require('express');
const usersRouter = express.Router();

const authorizeUsersAccess = (req, res, next) => {
  if (req.query.admin === 'true') {
    req.admin = true;
    return next();
  } else {
    res.send('ERROR: You must be an admin');
  }
}

usersRouter.get('/', authorizeUsersAccess, (req, res) => {
  res.json({  message: "Users" });
  console.log("Hitting /users");
});

usersRouter.get('/login', (req, res) => {
  res.json({  message: "Login User" });
  console.log("Hitting /users/login");
});

usersRouter.get('/register', (req, res) => {
  res.json({  message: "Register New User" });
  console.log("Hitting /users/register");
});

module.exports = usersRouter;