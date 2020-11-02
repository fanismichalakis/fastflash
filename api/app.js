const express = require('express');
const mongoose= require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB,  {useNewUrlParser: true}, { useUnifiedTopology: true } )
mongoose.connection.once('open', () => {
    console.log('connected to database');
});