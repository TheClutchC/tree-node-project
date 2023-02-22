const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');

const indexRouter = require("./src/routes/indexRouter");
const usersRouter = require("./src/routes/usersRouter");
const factoryRouter = require("./src/routes/factoryRouter");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(loggingMiddleware);

app.use("/factory", indexRouter);
app.use("/api", factoryRouter);
app.use("/users", usersRouter);

function loggingMiddleware(req, res, next) {
  console.log('we are hitting loggingMiddleWare');
  next();
}

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Server started on port ${port}`));