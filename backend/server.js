const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const indexRouter = require("./src/routes/indexRouter");
const usersRouter = require("./src/routes/usersRouter");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(loggingMiddleware);

app.use("/api", indexRouter);
app.use("/users", usersRouter);

function loggingMiddleware(req, res, next) {
  console.log('we are hitting loggingMiddleWare');
  next();
}

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Server started on port ${port}`));