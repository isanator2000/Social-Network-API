const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://iruizord:Enero292000@cluster0.srggtxu.mongodb.net/?retryWrites=true&w=majority");

module.exports = mongoose.connection;
