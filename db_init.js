const { mongoose } = require('./api/app.js');
const Card = require('./api/models/card');
const db_data = require('./db_data.json');
const { exists } = require('./api/models/card');

mongoose.connect(process.env.MONGODB,  {useNewUrlParser: true}, { useUnifiedTopology: true } )
mongoose.connection.once('open', () => {
  console.log('connected to database');
  console.log('Initializing the db by erasing everything then populate it');
  Card.remove({});
  Card
    .insertMany(db_data)
    .then(() => {
      console.log('data inserted');
      process.exit();
    });
});
