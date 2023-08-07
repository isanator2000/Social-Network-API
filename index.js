const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

mongoose.connect('mongodb://127.0.0.1:27017/myapp', ()=> {
    console.log("Connected to MongoDB")
});

app.listen(27017, ()=>{
    console.log("The server is running")
})