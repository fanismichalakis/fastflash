const express = require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://fastflash_admin:fastflash@fastflash.d1nrx.mongodb.net/fastflash?retryWrites=true&w=majority',  {useNewUrlParser: true}, { useUnifiedTopology: true } )
mongoose.connection.once('open', () => {
    console.log('connected to database');
});