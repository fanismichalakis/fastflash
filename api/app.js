const express = require('express');
const mongoose= require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
dotenv.config();

const schema = require('./schemas/schema');

//create express app
const app = express();


//connect to database
mongoose.connect(process.env.MONGODB,  {useNewUrlParser: true}, { useUnifiedTopology: true } )
mongoose.connection.once('open', () => {
    console.log('connected to database');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(process.env.PORT_API, () => {
    console.log('now listening for requests on port 4000');
});