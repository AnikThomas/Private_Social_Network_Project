const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");


//setting up the App
const app= express();
const PORT = 8080;

//middleware
app.use(bp.json());

//database connection and start server
mongoose.connect('mongodb://localhost:27017/asp', {useNewUrlParser: true});
app.listen(PORT, () => console.log (`asp server running on ${PORT}`))