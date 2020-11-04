const supertest = require("supertest");
const { app, mongoose } = require('./../../api/app.js');

let server;

const start = async () => new Promise((res) => {
  mongoose.connect(process.env.MONGODB,  {useNewUrlParser: true}, { useUnifiedTopology: true } )
  mongoose.connection.once('open', () => {
    console.log('connected to database');
    server = app.listen(process.env.PORT_API, () => {
      console.log('now listening for requests on port 4000');
      res();
    });
  });
});

describe('get /ping request', () => {
  beforeAll(async () => {
    await start();
    request = supertest(app);
  });

  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    server.close();
    done();
  })

  test('pong', async (done) => {
    // Sends GET Request to /test endpoint
    const resp = await request.get('/ping');

    expect(resp.text).toBe("pong");

    done();
  });

  test('graphql cards', async (done) => {
    // Sends GET Request to /test endpoint
    const resp = await request.post('/graphql')
      .send({
        query: "{cards { id } }"
      });

    expect(resp.text).toBe("{\"data\":{\"cards\":[{\"id\":1},{\"id\":3},{\"id\":2},{\"id\":4},{\"id\":5},{\"id\":6},{\"id\":7},{\"id\":8},{\"id\":9}]}}");

    done();
  });

});