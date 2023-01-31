const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const userRouter = require("./src/routes/users");
const connectDB = require("./config/db.js");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: "Server Running" });
  console.log(req);
});

app.use("/login", userRouter);

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Server started on port ${port}`));

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
});