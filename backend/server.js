const express = require('express');
// const mongoose = require('mongoose');
const app = express();

//connect to mongodb
// mongoose.connect('mongodb://localhost:27017/my-project', {useNewUrlParser: true});

const port = process.env.PORT || 8080;

app.post('/login', (req, res) => {
  console.log("req: ", req);
  console.log("res: ", res);
});

app.listen(port, () => console.log(`Server started on port ${port}`));