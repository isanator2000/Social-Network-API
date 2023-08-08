const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(27017, () => {
    console.log("The server is running");
});
