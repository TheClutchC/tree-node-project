const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

/* 
Server not properly connected to MongoDB or 100% 
communinicating with frontend, needs to be evaluated further. -CC 1/22/23
*/

const connection = mongoose.connect("mongodb://localhost:27018/tree-node-project", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connection
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => console.error(err));

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send("You have reached 8080 homebase");
  console.log(req);
});

app.get('/login', (req, res) => {
  res.send("You have reached /login");
  console.log(req);
});

app.get('/login/fetchLogin', (req, res) => {
  res.send("You have reached /login/fetchLogin");
  console.log(req);
});

app.post('/login', (req, res) => {
  console.log("req: ", req);
  console.log("res: ", res);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));