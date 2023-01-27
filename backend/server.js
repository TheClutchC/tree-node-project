const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', false); // Fixes warning about pending change in Mongoose 7

const connection = mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/tree-node-project", {
  useNewUrlParser: true
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
  res.json({ message: "Server is running" });
  console.log(req);
});

const userRouter = require("./routes/users");

app.use("/login", userRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));