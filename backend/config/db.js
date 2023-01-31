const mongoose = require('mongoose');
const dotenv = require("dotenv");

mongoose.set('strictQuery', false);

dotenv.config({ path: "./config/config.env" });

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB;