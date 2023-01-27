const express = require('express');

// Routes files help breakup the server.js 
// file into smaller chunks instead of
// having every possible route in one file

const router = express.Router();

router.get('/', (req, res) => {
  res.json({  message: "Login Page" });
  console.log(req);
});

router.get('/register', (req, res) => {
  res.json({  message: "Register New User" });
  console.log(req);
});

module.exports = router;