const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();


app.listen(3000, ()=>{
    console.log("The server is running")
})