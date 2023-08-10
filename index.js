const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const db = require("./config/connection.js"); 
const routes = require('./routes');

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(morgan("common"));

app.use('/api', routes);

app.listen(3000, () => {
    console.log("The server is running on port 3000");
});
