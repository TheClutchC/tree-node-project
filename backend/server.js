const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: "./config/config.env" });

// Fixes warning about pending change in Mongoose 7
mongoose.set('strictQuery', false);

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connection
  .then(() => {
    console.log("MongoDB Connection: Success!");
  })
  .catch((err) =>{
    console.log("MongoDB Connection Failed: Error...", err);
    process.exit();
  });
    

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: "Server Running" });
  console.log(req);
});

const userRouter = require("./routes/users");

app.use("/login", userRouter);

const port = process.env.PORT || 666;

app.listen(port, () => console.log(`Server started on port ${port}`));