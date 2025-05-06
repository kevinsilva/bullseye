import 'dotenv/config';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import schemas from './schemas';
import resolvers from './resolvers/';
import cors from 'cors';
import { SERVER_PORT } from './utils/config';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers,
});

async function startServer() {
  await server.start();

  app.use('/graphql', express.json(), expressMiddleware(server));

  app.listen(SERVER_PORT, () => {
    console.log(`Server ready at port ${SERVER_PORT}`);
  });
}

startServer();
