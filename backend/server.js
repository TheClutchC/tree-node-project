const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/login/fetchLogin', (req, res) => {
  res.send("Send Whatever");
  console.log(req);
});

app.post('/login', (req, res) => {
  console.log("req: ", req);
  console.log("res: ", res);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));