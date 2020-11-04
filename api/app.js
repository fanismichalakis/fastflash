const express = require('express');
const mongoose= require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const schema = require('./schemas/schema');

//create express app
const app = express();

app.use(cors());

app.use(morgan('combined'));

app.get('/ping', (req, res) => {
    res.send('pong');
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

module.exports = {
  app,
  mongoose
};