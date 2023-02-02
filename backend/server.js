const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./config/db.js");
const indexRouter = require("./src/routes/indexRouter");
const usersRouter = require("./src/routes/usersRouter");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Server started on port ${port}`));

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
});